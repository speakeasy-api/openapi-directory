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

            DfareportingDirectorySitesGetRequest req = new DfareportingDirectorySitesGetRequest("quis", "doloremque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "eveniet";
                key = "possimus";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "velit";
                uploadProtocol = "soluta";
            }};            

            DfareportingDirectorySitesGetResponse res = sdk.directorySites.dfareportingDirectorySitesGet(req, new DfareportingDirectorySitesGetSecurity("cum", "accusantium") {{
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

            DfareportingDirectorySitesInsertRequest req = new DfareportingDirectorySitesInsertRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                directorySite = new DirectorySite() {{
                    id = "laudantium";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "est";
                        etag = "fuga";
                        id = "65432a98-6eb7-4e14-8a56-408915009701";
                        kind = "unde";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "eius";
                    }};;
                    inpageTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInpageTagFormatsEnum[]{{
                        add(DirectorySiteInpageTagFormatsEnum.JAVASCRIPT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.INTERNAL_REDIRECT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.INTERNAL_REDIRECT_INPAGE),
                    }};
                    interstitialTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInterstitialTagFormatsEnum[]{{
                        add(DirectorySiteInterstitialTagFormatsEnum.JAVASCRIPT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.JAVASCRIPT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.INTERNAL_REDIRECT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.JAVASCRIPT_INTERSTITIAL),
                    }};
                    kind = "hic";
                    name = "Christopher Fritsch Sr.";
                    settings = new DirectorySiteSettings() {{
                        activeViewOptOut = false;
                        dfpSettings = new DfpSettings() {{
                            dfpNetworkCode = "dicta";
                            dfpNetworkName = "sit";
                            programmaticPlacementAccepted = false;
                            pubPaidPlacementAccepted = false;
                            publisherPortalOnly = false;
                        }};;
                        instreamVideoPlacementAccepted = false;
                        interstitialPlacementAccepted = false;
                    }};;
                    url = "ad";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "excepturi";
                key = "alias";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "laboriosam";
                uploadProtocol = "aspernatur";
            }};            

            DfareportingDirectorySitesInsertResponse res = sdk.directorySites.dfareportingDirectorySitesInsert(req, new DfareportingDirectorySitesInsertSecurity("quod", "suscipit") {{
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

            DfareportingDirectorySitesListRequest req = new DfareportingDirectorySitesListRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "harum";
                active = false;
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                dfpNetworkCode = "culpa";
                fields = "doloremque";
                ids = new String[]{{
                    add("vel"),
                    add("enim"),
                    add("ducimus"),
                    add("quidem"),
                }};
                key = "in";
                maxResults = 870547L;
                oauthToken = "alias";
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "mollitia";
                searchString = "beatae";
                sortField = DfareportingDirectorySitesListSortFieldEnum.ID;
                sortOrder = DfareportingDirectorySitesListSortOrderEnum.DESCENDING;
                uploadType = "aperiam";
                uploadProtocol = "hic";
            }};            

            DfareportingDirectorySitesListResponse res = sdk.directorySites.dfareportingDirectorySitesList(req, new DfareportingDirectorySitesListSecurity("blanditiis", "at") {{
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
