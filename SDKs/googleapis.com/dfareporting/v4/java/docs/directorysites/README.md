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

            DfareportingDirectorySitesGetRequest req = new DfareportingDirectorySitesGetRequest("ex", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "quisquam";
                key = "sint";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "placeat";
                uploadProtocol = "in";
            }};            

            DfareportingDirectorySitesGetResponse res = sdk.directorySites.dfareportingDirectorySitesGet(req, new DfareportingDirectorySitesGetSecurity("possimus", "iste") {{
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

            DfareportingDirectorySitesInsertRequest req = new DfareportingDirectorySitesInsertRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                directorySite = new DirectorySite() {{
                    id = "dolores";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "consectetur";
                        etag = "repellat";
                        id = "1aa63ed9-cf1c-4856-bcba-51ef2454a47f";
                        kind = "dolorum";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "repellat";
                    }};;
                    inpageTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInpageTagFormatsEnum[]{{
                        add(DirectorySiteInpageTagFormatsEnum.STANDARD),
                    }};
                    interstitialTagFormats = new org.openapis.openapi.models.shared.DirectorySiteInterstitialTagFormatsEnum[]{{
                        add(DirectorySiteInterstitialTagFormatsEnum.JAVASCRIPT_INTERSTITIAL),
                        add(DirectorySiteInterstitialTagFormatsEnum.JAVASCRIPT_INTERSTITIAL),
                    }};
                    kind = "facere";
                    name = "April Greenfelder";
                    settings = new DirectorySiteSettings() {{
                        activeViewOptOut = false;
                        dfpSettings = new DfpSettings() {{
                            dfpNetworkCode = "reprehenderit";
                            dfpNetworkName = "nemo";
                            programmaticPlacementAccepted = false;
                            pubPaidPlacementAccepted = false;
                            publisherPortalOnly = false;
                        }};;
                        instreamVideoPlacementAccepted = false;
                        interstitialPlacementAccepted = false;
                    }};;
                    url = "nisi";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                fields = "dolorem";
                key = "placeat";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "placeat";
                uploadProtocol = "natus";
            }};            

            DfareportingDirectorySitesInsertResponse res = sdk.directorySites.dfareportingDirectorySitesInsert(req, new DfareportingDirectorySitesInsertSecurity("accusamus", "repellat") {{
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

            DfareportingDirectorySitesListRequest req = new DfareportingDirectorySitesListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "labore";
                active = false;
                alt = AltEnum.JSON;
                callback = "at";
                dfpNetworkCode = "impedit";
                fields = "autem";
                ids = new String[]{{
                    add("consectetur"),
                }};
                key = "ea";
                maxResults = 134597L;
                oauthToken = "consequatur";
                pageToken = "delectus";
                prettyPrint = false;
                quotaUser = "nesciunt";
                searchString = "et";
                sortField = DfareportingDirectorySitesListSortFieldEnum.ID;
                sortOrder = DfareportingDirectorySitesListSortOrderEnum.DESCENDING;
                uploadType = "doloribus";
                uploadProtocol = "nesciunt";
            }};            

            DfareportingDirectorySitesListResponse res = sdk.directorySites.dfareportingDirectorySitesList(req, new DfareportingDirectorySitesListSecurity("doloremque", "at") {{
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
