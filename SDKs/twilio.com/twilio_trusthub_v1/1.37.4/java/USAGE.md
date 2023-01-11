<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateCustomerProfileRequest req = new CreateCustomerProfileRequest() {{
                security = new CreateCustomerProfileSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCustomerProfileCreateCustomerProfileRequest() {{
                    email = "sit";
                    friendlyName = "voluptas";
                    policySid = "culpa";
                    statusCallback = "expedita";
                }};
            }};

            CreateCustomerProfileResponse res = sdk.createCustomerProfile(req);

            if (res.trusthubV1CustomerProfile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->