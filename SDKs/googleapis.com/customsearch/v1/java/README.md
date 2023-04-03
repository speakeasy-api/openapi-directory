# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            }}            

            SearchCseListResponse res = sdk.cse.searchCseList(req);

            if (res.search.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cse

* `searchCseList` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
* `searchCseSiterestrictList` - Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
