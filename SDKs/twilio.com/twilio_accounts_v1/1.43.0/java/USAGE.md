<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialAwsCreateCredentialAwsRequest;
import org.openapis.openapi.models.operations.CreateCredentialAwsResponse;
import org.openapis.openapi.models.operations.CreateCredentialAwsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialAwsCreateCredentialAwsRequest req = new CreateCredentialAwsCreateCredentialAwsRequest("corrupti") {{
                accountSid = "provident";
                friendlyName = "distinctio";
            }};            

            CreateCredentialAwsResponse res = sdk.createCredentialAws(req, new CreateCredentialAwsSecurity("quibusdam", "unde") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialAws != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->