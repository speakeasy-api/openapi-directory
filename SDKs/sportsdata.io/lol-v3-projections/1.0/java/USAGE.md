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
                    apiKeyHeader = new SchemeApiKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DfsSlatesByDateRequest req = new DfsSlatesByDateRequest() {{
                pathParams = new DfsSlatesByDatePathParams() {{
                    date = "sit";
                    format = "json";
                }};
            }};

            DfsSlatesByDateResponse res = sdk.dfsSlatesByDate(req);

            if (res.dfsSlates.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->