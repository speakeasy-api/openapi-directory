<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCredentialAwsSecurity;
import org.openapis.openapi.models.operations.CreateCredentialAwsCreateCredentialAwsRequest;
import org.openapis.openapi.models.operations.CreateCredentialAwsRequest;
import org.openapis.openapi.models.operations.CreateCredentialAwsResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialAwsRequest req = new CreateCredentialAwsRequest() {{
                security = new CreateCredentialAwsSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCredentialAwsCreateCredentialAwsRequest() {{
                    accountSid = "corrupti";
                    credentials = "provident";
                    friendlyName = "distinctio";
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