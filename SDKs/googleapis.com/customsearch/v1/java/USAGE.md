<!-- Start SDK Example Usage -->
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
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
                imgColorType = SearchCseListImgColorTypeEnum.MONO;
                imgDominantColor = SearchCseListImgDominantColorEnum.ORANGE;
                imgSize = SearchCseListImgSizeEnum.XLARGE;
                imgType = SearchCseListImgTypeEnum.PHOTO;
                key = "voluptatum";
                linkSite = "iusto";
                lowRange = "excepturi";
                lr = "nisi";
                num = 925597L;
                oauthToken = "temporibus";
                orTerms = "ab";
                prettyPrint = false;
                q = "quis";
                quotaUser = "veritatis";
                relatedSite = "deserunt";
                rights = "perferendis";
                safe = SearchCseListSafeEnum.ACTIVE;
                searchType = SearchCseListSearchTypeEnum.IMAGE;
                siteSearch = "sapiente";
                siteSearchFilter = SearchCseListSiteSearchFilterEnum.I;
                sort = "odit";
                start = 870013L;
                uploadType = "at";
                uploadProtocol = "maiores";
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
<!-- End SDK Example Usage -->