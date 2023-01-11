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
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    userId = new SchemeUserId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            BadWordFilterRequest req = new BadWordFilterRequest() {{
                request = new BadWordFilterRequestBody() {{
                    catalog = "minima";
                    censorCharacter = "non";
                    content = "voluptatum";
                    outputCase = "camel";
                }};
            }};

            BadWordFilterResponse res = sdk.dataTools.badWordFilter(req);

            if (res.badWordFilterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->