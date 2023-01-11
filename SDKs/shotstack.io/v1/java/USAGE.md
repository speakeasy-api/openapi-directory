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

            GetRenderRequest req = new GetRenderRequest() {{
                security = new GetRenderSecurity() {{
                    developerKey = new SchemeDeveloperKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetRenderPathParams() {{
                    id = "sit";
                }};
            }};

            GetRenderResponse res = sdk.edit.getRender(req);

            if (res.renderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->