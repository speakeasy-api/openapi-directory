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
                    dollarXgafv = "2";
                    accessToken = "enim";
                    alt = "proto";
                    c2coff = "sit";
                    callback = "adipisci";
                    cr = "architecto";
                    cx = "atque";
                    dateRestrict = "aliquam";
                    exactTerms = "pariatur";
                    excludeTerms = "at";
                    fields = "id";
                    fileType = "quidem";
                    filter = "fugit";
                    gl = "tempora";
                    googlehost = "commodi";
                    highRange = "qui";
                    hl = "quisquam";
                    hq = "soluta";
                    imgColorType = "imgColorTypeUndefined";
                    imgDominantColor = "white";
                    imgSize = "XLARGE";
                    imgType = "animated";
                    key = "facere";
                    linkSite = "cupiditate";
                    lowRange = "aut";
                    lr = "nam";
                    num = 6955065737663598861;
                    oauthToken = "vero";
                    orTerms = "animi";
                    prettyPrint = true;
                    q = "voluptate";
                    quotaUser = "impedit";
                    relatedSite = "illum";
                    rights = "unde";
                    safe = "high";
                    searchType = "searchTypeUndefined";
                    siteSearch = "modi";
                    siteSearchFilter = "siteSearchFilterUndefined";
                    sort = "qui";
                    start = 2624734962307975100;
                    uploadType = "mollitia";
                    uploadProtocol = "iste";
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