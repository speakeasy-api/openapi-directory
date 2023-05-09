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

            DfareportingDirectorySitesGetRequest req = new DfareportingDirectorySitesGetRequest("est", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "optio";
                fields = "minus";
                key = "sint";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "ullam";
                uploadProtocol = "dicta";
            }};            

            DfareportingDirectorySitesGetResponse res = sdk.directorySites.dfareportingDirectorySitesGet(req, new DfareportingDirectorySitesGetSecurity("nesciunt", "reprehenderit") {{
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

            DfareportingDirectorySitesInsertRequest req = new DfareportingDirectorySitesInsertRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                directorySite = new DirectorySite() {{
                    active = false;
                    id = "ea";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "quibusdam";
                        etag = "veritatis";
                        id = "5321b832-a56d-4691-80ff-60eb9a6658e6";
                        kind = "molestias";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "non";
                    }};;
                    inpageTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInpageTagFormatsEnum[]{{
                        add(DirectorySiteInpageTagFormatsEnum.INTERNAL_REDIRECT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.IFRAME_JAVASCRIPT_INPAGE),
                        add(DirectorySiteInpageTagFormatsEnum.STANDARD),
                    }};
                    interstitialTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInterstitialTagFormatsEnum[]{{
                        add(DirectorySiteInterstitialTagFormatsEnum.IFRAME_JAVASCRIPT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.INTERNAL_REDIRECT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.IFRAME_JAVASCRIPT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.JAVASCRIPT_INTERSTITIAL),
                    }};
                    kind = "harum";
                    name = "Lowell Kuphal";
                    settings = new DirectorySiteSettings() {{
                        activeViewOptOut = false;
                        dfpSettings = new DfpSettings() {{
                            dfpNetworkCode = "ea";
                            dfpNetworkName = "corrupti";
                            programmaticPlacementAccepted = false;
                            pubPaidPlacementAccepted = false;
                            publisherPortalOnly = false;
                        }};;
                        instreamVideoPlacementAccepted = false;
                        interstitialPlacementAccepted = false;
                    }};;
                    url = "minus";
                }};;
                accessToken = "autem";
                alt = AltEnum.JSON;
                callback = "nisi";
                fields = "veniam";
                key = "cupiditate";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "atque";
                uploadProtocol = "minus";
            }};            

            DfareportingDirectorySitesInsertResponse res = sdk.directorySites.dfareportingDirectorySitesInsert(req, new DfareportingDirectorySitesInsertSecurity("debitis", "neque") {{
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

            DfareportingDirectorySitesListRequest req = new DfareportingDirectorySitesListRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "quibusdam";
                active = false;
                alt = AltEnum.MEDIA;
                callback = "quas";
                dfpNetworkCode = "magnam";
                fields = "cupiditate";
                ids = new String[]{{
                    add("sapiente"),
                    add("deleniti"),
                    add("explicabo"),
                }};
                key = "veritatis";
                maxResults = 276643L;
                oauthToken = "eligendi";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "ipsum";
                searchString = "nihil";
                sortField = DfareportingDirectorySitesListSortFieldEnum.NAME;
                sortOrder = DfareportingDirectorySitesListSortOrderEnum.DESCENDING;
                uploadType = "iure";
                uploadProtocol = "libero";
            }};            

            DfareportingDirectorySitesListResponse res = sdk.directorySites.dfareportingDirectorySitesList(req, new DfareportingDirectorySitesListSecurity("cum", "eaque") {{
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
