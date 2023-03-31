<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.RotoballerArticlesFormatEnum;
import org.openapis.openapi.models.operations.RotoballerArticlesPathParams;
import org.openapis.openapi.models.operations.RotoballerArticlesRequest;
import org.openapis.openapi.models.operations.RotoballerArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = new SchemeAPIKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            RotoballerArticlesRequest req = new RotoballerArticlesRequest() {{
                pathParams = new RotoballerArticlesPathParams() {{
                    format = "json";
                }};
            }};            

            RotoballerArticlesResponse res = sdk.rotoballerArticles(req);

            if (res.articles.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->