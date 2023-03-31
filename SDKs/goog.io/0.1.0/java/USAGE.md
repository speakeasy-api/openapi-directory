<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CrawlPathParams;
import org.openapis.openapi.models.operations.CrawlRequest;
import org.openapis.openapi.models.operations.CrawlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CrawlRequest req = new CrawlRequest() {{
                pathParams = new CrawlPathParams() {{
                    query = "corrupti";
                }};
            }};            

            CrawlResponse res = sdk.crawl(req);

            if (res.crawl200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->