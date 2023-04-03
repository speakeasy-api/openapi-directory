<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetArticlesearchJsonSortEnum;
import org.openapis.openapi.models.operations.GetArticlesearchJsonRequest;
import org.openapis.openapi.models.operations.GetArticlesearchJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArticlesearchJsonRequest req = new GetArticlesearchJsonRequest() {{
                beginDate = "corrupti";
                endDate = "provident";
                facetField = "distinctio";
                facetFilter = false;
                fl = "quibusdam";
                fq = "unde";
                hl = false;
                page = 857946;
                q = "corrupti";
                sort = "oldest";
            }}            

            GetArticlesearchJsonResponse res = sdk.stories.getArticlesearchJson(req);

            if (res.getArticlesearchJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->