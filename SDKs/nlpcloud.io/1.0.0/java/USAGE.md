<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            ReadDependenciesV1EnCoreWebSmDependenciesPostRequest req = new ReadDependenciesV1EnCoreWebSmDependenciesPostRequest() {{
                request = new UserRequestIn() {{
                    text = "aut";
                }};
            }};

            ReadDependenciesV1EnCoreWebSmDependenciesPostResponse res = sdk.readDependenciesV1EnCoreWebSmDependenciesPost(req);

            if (res.dependenciesOut.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->