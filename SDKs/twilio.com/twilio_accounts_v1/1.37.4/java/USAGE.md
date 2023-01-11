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

            CreateCredentialAwsRequest req = new CreateCredentialAwsRequest() {{
                security = new CreateCredentialAwsSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCredentialAwsCreateCredentialAwsRequest() {{
                    accountSid = "nihil";
                    credentials = "exercitationem";
                    friendlyName = "iste";
                }};
            }};

            CreateCredentialAwsResponse res = sdk.createCredentialAws(req);

            if (res.accountsV1CredentialCredentialAws.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->