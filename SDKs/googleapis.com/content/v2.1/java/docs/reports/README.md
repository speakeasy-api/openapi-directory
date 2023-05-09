# reports

### Available Operations

* [contentReportsSearch](#contentreportssearch) - Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

## contentReportsSearch

Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReportsSearchRequest;
import org.openapis.openapi.models.operations.ContentReportsSearchResponse;
import org.openapis.openapi.models.operations.ContentReportsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SearchRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReportsSearchRequest req = new ContentReportsSearchRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                searchRequest = new SearchRequest() {{
                    pageSize = 289342;
                    pageToken = "quis";
                    query = "aliquid";
                }};;
                accessToken = "vero";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "sit";
                key = "adipisci";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "iure";
                uploadProtocol = "praesentium";
            }};            

            ContentReportsSearchResponse res = sdk.reports.contentReportsSearch(req, new ContentReportsSearchSecurity("perspiciatis", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
