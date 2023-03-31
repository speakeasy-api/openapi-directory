<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCustomerProfileSecurity;
import org.openapis.openapi.models.operations.CreateCustomerProfileCreateCustomerProfileRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerProfileRequest req = new CreateCustomerProfileRequest() {{
                security = new CreateCustomerProfileSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCustomerProfileCreateCustomerProfileRequest() {{
                    email = "Larue_Rau85@yahoo.com";
                    friendlyName = "corrupti";
                    policySid = "illum";
                    statusCallback = "http://physical-pegboard.info";
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