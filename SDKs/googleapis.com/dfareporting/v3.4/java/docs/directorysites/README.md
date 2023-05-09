# directorySites

### Available Operations

* [dfareportingDirectorySitesGet](#dfareportingdirectorysitesget) - Gets one directory site by ID.
* [dfareportingDirectorySitesInsert](#dfareportingdirectorysitesinsert) - Inserts a new directory site.
* [dfareportingDirectorySitesList](#dfareportingdirectorysiteslist) - Retrieves a list of directory sites, possibly filtered. This method supports paging.

## dfareportingDirectorySitesGet

Gets one directory site by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesGetRequest;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesGetResponse;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDirectorySitesGetRequest req = new DfareportingDirectorySitesGetRequest("facere", "tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "facere";
                key = "iste";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "optio";
                uploadProtocol = "minus";
            }};            

            DfareportingDirectorySitesGetResponse res = sdk.directorySites.dfareportingDirectorySitesGet(req, new DfareportingDirectorySitesGetSecurity("sint", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directorySite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingDirectorySitesInsert

Inserts a new directory site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DfpSettings;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.DirectorySite;
import org.openapis.openapi.models.shared.DirectorySiteInpageTagFormatsEnum;
import org.openapis.openapi.models.shared.DirectorySiteInterstitialTagFormatsEnum;
import org.openapis.openapi.models.shared.DirectorySiteSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDirectorySitesInsertRequest req = new DfareportingDirectorySitesInsertRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                directorySite = new DirectorySite() {{
                    id = "dicta";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "nesciunt";
                        etag = "reprehenderit";
                        id = "726d1532-1b83-42a5-ad69-180ff60eb9a6";
                        kind = "autem";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "atque";
                    }};;
                    inpageTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInpageTagFormatsEnum[]{{
                        add(DirectorySiteInpageTagFormatsEnum.IFRAME_JAVASCRIPT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.INTERNAL_REDIRECT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.INTERNAL_REDIRECT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.IFRAME_JAVASCRIPT_INPAGE),
                    }};
                    interstitialTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInterstitialTagFormatsEnum[]{{
                        add(DirectorySiteInterstitialTagFormatsEnum.INTERNAL_REDIRECT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.IFRAME_JAVASCRIPT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.IFRAME_JAVASCRIPT_INTERSTITIAL),
                    }};
                    kind = "illum";
                    name = "Christy Christiansen";
                    settings = new DirectorySiteSettings() {{
                        activeViewOptOut = false;
                        dfpSettings = new DfpSettings() {{
                            dfpNetworkCode = "itaque";
                            dfpNetworkName = "porro";
                            programmaticPlacementAccepted = false;
                            pubPaidPlacementAccepted = false;
                            publisherPortalOnly = false;
                        }};;
                        instreamVideoPlacementAccepted = false;
                        interstitialPlacementAccepted = false;
                    }};;
                    url = "ducimus";
                }};;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "corrupti";
                key = "minus";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "nisi";
                uploadProtocol = "veniam";
            }};            

            DfareportingDirectorySitesInsertResponse res = sdk.directorySites.dfareportingDirectorySitesInsert(req, new DfareportingDirectorySitesInsertSecurity("cupiditate", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directorySite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingDirectorySitesList

Retrieves a list of directory sites, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesListRequest;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesListResponse;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesListSecurity;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingDirectorySitesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDirectorySitesListRequest req = new DfareportingDirectorySitesListRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "minus";
                active = false;
                alt = AltEnum.PROTO;
                callback = "neque";
                dfpNetworkCode = "doloremque";
                fields = "tempora";
                ids = new String[]{{
                    add("deleniti"),
                    add("quas"),
                    add("magnam"),
                    add("cupiditate"),
                }};
                key = "expedita";
                maxResults = 956966L;
                oauthToken = "deleniti";
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "veritatis";
                searchString = "incidunt";
                sortField = DfareportingDirectorySitesListSortFieldEnum.NAME;
                sortOrder = DfareportingDirectorySitesListSortOrderEnum.ASCENDING;
                uploadType = "ipsum";
                uploadProtocol = "nihil";
            }};            

            DfareportingDirectorySitesListResponse res = sdk.directorySites.dfareportingDirectorySitesList(req, new DfareportingDirectorySitesListSecurity("hic", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.directorySitesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
