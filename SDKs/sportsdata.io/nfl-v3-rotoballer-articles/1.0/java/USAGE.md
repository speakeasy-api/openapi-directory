<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotoballerArticlesFormatEnum;
import org.openapis.openapi.models.operations.RotoballerArticlesRequest;
import org.openapis.openapi.models.operations.RotoballerArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RotoballerArticlesRequest req = new RotoballerArticlesRequest(RotoballerArticlesFormatEnum.JSON);            

            RotoballerArticlesResponse res = sdk.rotoballerArticles(req);

            if (res.articles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->