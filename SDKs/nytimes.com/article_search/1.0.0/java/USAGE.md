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
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetArticlesearchJsonRequest req = new GetArticlesearchJsonRequest() {{
                queryParams = new GetArticlesearchJsonQueryParams() {{
                    beginDate = "et";
                    endDate = "harum";
                    facetField = "minima";
                    facetFilter = true;
                    fl = "et";
                    fq = "est";
                    hl = false;
                    page = 7894933729009416451;
                    q = "magni";
                    sort = "newest";
                }};
            }};

            GetArticlesearchJsonResponse res = sdk.stories.getArticlesearchJson(req);

            if (res.getArticlesearchJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->