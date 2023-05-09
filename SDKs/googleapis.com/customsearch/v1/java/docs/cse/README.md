# cse

### Available Operations

* [searchCseList](#searchcselist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* [searchCseSiterestrictList](#searchcsesiterestrictlist) - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

## searchCseList

Returns metadata about the search performed, metadata about the engine used for the search, and the search results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCseListImgColorTypeEnum;
import org.openapis.openapi.models.operations.SearchCseListImgDominantColorEnum;
import org.openapis.openapi.models.operations.SearchCseListImgSizeEnum;
import org.openapis.openapi.models.operations.SearchCseListImgTypeEnum;
import org.openapis.openapi.models.operations.SearchCseListRequest;
import org.openapis.openapi.models.operations.SearchCseListResponse;
import org.openapis.openapi.models.operations.SearchCseListSafeEnum;
import org.openapis.openapi.models.operations.SearchCseListSearchTypeEnum;
import org.openapis.openapi.models.operations.SearchCseListSiteSearchFilterEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCseListRequest req = new SearchCseListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                c2coff = "esse";
                callback = "totam";
                cr = "porro";
                cx = "dolorum";
                dateRestrict = "dicta";
                exactTerms = "nam";
                excludeTerms = "officia";
                fields = "occaecati";
                fileType = "fugit";
                filter = "deleniti";
                gl = "hic";
                googlehost = "optio";
                highRange = "totam";
                hl = "beatae";
                hq = "commodi";
                imgColorType = SearchCseListImgColorTypeEnum.GRAY;
                imgDominantColor = SearchCseListImgDominantColorEnum.BROWN;
                imgSize = SearchCseListImgSizeEnum.HUGE;
                imgType = SearchCseListImgTypeEnum.PHOTO;
                key = "cum";
                linkSite = "esse";
                lowRange = "ipsum";
                lr = "excepturi";
                num = 135218L;
                oauthToken = "perferendis";
                orTerms = "ad";
                prettyPrint = false;
                q = "natus";
                quotaUser = "sed";
                relatedSite = "iste";
                rights = "dolor";
                safe = SearchCseListSafeEnum.MEDIUM;
                searchType = SearchCseListSearchTypeEnum.SEARCH_TYPE_UNDEFINED;
                siteSearch = "hic";
                siteSearchFilter = SearchCseListSiteSearchFilterEnum.I;
                sort = "fuga";
                start = 449950L;
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            SearchCseListResponse res = sdk.cse.searchCseList(req);

            if (res.search != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchCseSiterestrictList

Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListImgColorTypeEnum;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListImgDominantColorEnum;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListImgSizeEnum;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListImgTypeEnum;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListRequest;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListResponse;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListSafeEnum;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListSearchTypeEnum;
import org.openapis.openapi.models.operations.SearchCseSiterestrictListSiteSearchFilterEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCseSiterestrictListRequest req = new SearchCseSiterestrictListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                c2coff = "architecto";
                callback = "ipsa";
                cr = "reiciendis";
                cx = "est";
                dateRestrict = "mollitia";
                exactTerms = "laborum";
                excludeTerms = "dolores";
                fields = "dolorem";
                fileType = "corporis";
                filter = "explicabo";
                gl = "nobis";
                googlehost = "enim";
                highRange = "omnis";
                hl = "nemo";
                hq = "minima";
                imgColorType = SearchCseSiterestrictListImgColorTypeEnum.GRAY;
                imgDominantColor = SearchCseSiterestrictListImgDominantColorEnum.IMG_DOMINANT_COLOR_UNDEFINED;
                imgSize = SearchCseSiterestrictListImgSizeEnum.LARGE;
                imgType = SearchCseSiterestrictListImgTypeEnum.STOCK;
                key = "doloribus";
                linkSite = "sapiente";
                lowRange = "architecto";
                lr = "mollitia";
                num = 208876L;
                oauthToken = "culpa";
                orTerms = "consequuntur";
                prettyPrint = false;
                q = "repellat";
                quotaUser = "mollitia";
                relatedSite = "occaecati";
                rights = "numquam";
                safe = SearchCseSiterestrictListSafeEnum.HIGH;
                searchType = SearchCseSiterestrictListSearchTypeEnum.SEARCH_TYPE_UNDEFINED;
                siteSearch = "molestiae";
                siteSearchFilter = SearchCseSiterestrictListSiteSearchFilterEnum.SITE_SEARCH_FILTER_UNDEFINED;
                sort = "error";
                start = 158969L;
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            SearchCseSiterestrictListResponse res = sdk.cse.searchCseSiterestrictList(req);

            if (res.search != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
