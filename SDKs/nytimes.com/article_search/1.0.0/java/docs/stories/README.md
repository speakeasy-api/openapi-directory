# stories

### Available Operations

* [getArticlesearchJson](#getarticlesearchjson) - Article Search

## getArticlesearchJson

Article Search requests use the following URI structure:


### Example Usage

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
                .setSecurity(new Security("error") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArticlesearchJsonRequest req = new GetArticlesearchJsonRequest() {{
                beginDate = "deserunt";
                endDate = "suscipit";
                facetField = "iure";
                facetFilter = false;
                fl = "magnam";
                fq = "debitis";
                hl = false;
                page = 56713L;
                q = "delectus";
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
