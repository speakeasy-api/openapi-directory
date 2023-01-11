<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            SearchCseListRequest req = new SearchCseListRequest() {{
                queryParams = new SearchCseListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    c2coff = "expedita";
                    callback = "consequuntur";
                    cr = "dolor";
                    cx = "expedita";
                    dateRestrict = "voluptas";
                    exactTerms = "fugit";
                    excludeTerms = "et";
                    fields = "nihil";
                    fileType = "rerum";
                    filter = "dicta";
                    gl = "debitis";
                    googlehost = "voluptatum";
                    highRange = "et";
                    hl = "ut";
                    hq = "dolorem";
                    imgColorType = "imgColorTypeUndefined";
                    imgDominantColor = "blue";
                    imgSize = "LARGE";
                    imgType = "face";
                    key = "totam";
                    linkSite = "dolores";
                    lowRange = "illum";
                    lr = "debitis";
                    num = 3706853784096366226;
                    oauthToken = "odio";
                    orTerms = "dolore";
                    prettyPrint = false;
                    q = "aspernatur";
                    quotaUser = "accusantium";
                    relatedSite = "totam";
                    rights = "commodi";
                    safe = "medium";
                    searchType = "image";
                    siteSearch = "aut";
                    siteSearchFilter = "e";
                    sort = "non";
                    start = 167566062957544642;
                    uploadType = "omnis";
                    uploadProtocol = "aut";
                }};
            }};

            SearchCseListResponse res = sdk.cse.searchCseList(req);

            if (res.search.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->