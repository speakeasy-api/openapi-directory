<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArticlesearchJsonRequest;
import org.openapis.openapi.models.operations.GetArticlesearchJsonResponse;
import org.openapis.openapi.models.operations.GetArticlesearchJsonSortEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArticlesearchJsonRequest req = new GetArticlesearchJsonRequest() {{
                beginDate = "provident";
                endDate = "distinctio";
                facetField = "quibusdam";
                facetFilter = false;
                fl = "unde";
                fq = "nulla";
                hl = false;
                page = 544883L;
                q = "illum";
                sort = GetArticlesearchJsonSortEnum.NEWEST;
            }};            

            GetArticlesearchJsonResponse res = sdk.stories.getArticlesearchJson(req);

            if (res.getArticlesearchJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->