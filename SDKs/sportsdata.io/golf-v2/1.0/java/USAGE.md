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

            CurrentSeasonRequest req = new CurrentSeasonRequest() {{
                pathParams = new CurrentSeasonPathParams() {{
                    format = "XML";
                }};
            }};

            CurrentSeasonResponse res = sdk.currentSeason(req);

            if (res.season.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->