<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCredentialAwsSecurity;
import org.openapis.openapi.models.operations.CreateCredentialAwsCreateCredentialAwsRequest;
import org.openapis.openapi.models.operations.CreateCredentialAwsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialAwsCreateCredentialAwsRequest req = new CreateCredentialAwsCreateCredentialAwsRequest() {{
                accountSid = "corrupti";
                credentials = "provident";
                friendlyName = "distinctio";
            }}            

            CreateCredentialAwsResponse res = sdk.createCredentialAws(req, new CreateCredentialAwsSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.accountsV1CredentialCredentialAws.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->