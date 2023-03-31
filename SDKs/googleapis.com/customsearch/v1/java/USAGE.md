<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SearchCseListImgColorTypeEnum;
import org.openapis.openapi.models.operations.SearchCseListImgDominantColorEnum;
import org.openapis.openapi.models.operations.SearchCseListImgSizeEnum;
import org.openapis.openapi.models.operations.SearchCseListImgTypeEnum;
import org.openapis.openapi.models.operations.SearchCseListSafeEnum;
import org.openapis.openapi.models.operations.SearchCseListSearchTypeEnum;
import org.openapis.openapi.models.operations.SearchCseListSiteSearchFilterEnum;
import org.openapis.openapi.models.operations.SearchCseListQueryParams;
import org.openapis.openapi.models.operations.SearchCseListRequest;
import org.openapis.openapi.models.operations.SearchCseListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCseListRequest req = new SearchCseListRequest() {{
                queryParams = new SearchCseListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    c2coff = "quibusdam";
                    callback = "unde";
                    cr = "nulla";
                    cx = "corrupti";
                    dateRestrict = "illum";
                    exactTerms = "vel";
                    excludeTerms = "error";
                    fields = "deserunt";
                    fileType = "suscipit";
                    filter = "iure";
                    gl = "magnam";
                    googlehost = "debitis";
                    highRange = "ipsa";
                    hl = "delectus";
                    hq = "tempora";
                    imgColorType = "mono";
                    imgDominantColor = "orange";
                    imgSize = "XLARGE";
                    imgType = "photo";
                    key = "voluptatum";
                    linkSite = "iusto";
                    lowRange = "excepturi";
                    lr = "nisi";
                    num = 925597;
                    oauthToken = "temporibus";
                    orTerms = "ab";
                    prettyPrint = false;
                    q = "quis";
                    quotaUser = "veritatis";
                    relatedSite = "deserunt";
                    rights = "perferendis";
                    safe = "active";
                    searchType = "image";
                    siteSearch = "sapiente";
                    siteSearchFilter = "i";
                    sort = "odit";
                    start = 870013;
                    uploadType = "at";
                    uploadProtocol = "maiores";
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