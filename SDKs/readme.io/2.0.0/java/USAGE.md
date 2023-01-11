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

            DeleteApiSpecificationRequest req = new DeleteApiSpecificationRequest() {{
                security = new DeleteApiSpecificationSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new DeleteApiSpecificationPathParams() {{
                    id = "sit";
                }};
            }};

            DeleteApiSpecificationResponse res = sdk.apiSpecification.deleteApiSpecification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->