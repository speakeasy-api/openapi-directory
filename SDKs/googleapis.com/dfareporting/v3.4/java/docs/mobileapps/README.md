# mobileApps

### Available Operations

* [dfareportingMobileAppsGet](#dfareportingmobileappsget) - Gets one mobile app by ID.
* [dfareportingMobileAppsList](#dfareportingmobileappslist) - Retrieves list of available mobile apps.

## dfareportingMobileAppsGet

Gets one mobile app by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingMobileAppsGetRequest;
import org.openapis.openapi.models.operations.DfareportingMobileAppsGetResponse;
import org.openapis.openapi.models.operations.DfareportingMobileAppsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingMobileAppsGetRequest req = new DfareportingMobileAppsGetRequest("sequi", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "temporibus";
                key = "adipisci";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "nulla";
                uploadProtocol = "delectus";
            }};            

            DfareportingMobileAppsGetResponse res = sdk.mobileApps.dfareportingMobileAppsGet(req, new DfareportingMobileAppsGetSecurity("id", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.mobileApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingMobileAppsList

Retrieves list of available mobile apps.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingMobileAppsListDirectoriesEnum;
import org.openapis.openapi.models.operations.DfareportingMobileAppsListRequest;
import org.openapis.openapi.models.operations.DfareportingMobileAppsListResponse;
import org.openapis.openapi.models.operations.DfareportingMobileAppsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingMobileAppsListRequest req = new DfareportingMobileAppsListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                directories = new org.openapis.openapi.models.operations.DfareportingMobileAppsListDirectoriesEnum[]{{
                    add(DfareportingMobileAppsListDirectoriesEnum.UNKNOWN),
                    add(DfareportingMobileAppsListDirectoriesEnum.SAMSUNG_TV_APP_STORE),
                    add(DfareportingMobileAppsListDirectoriesEnum.GOOGLE_PLAY_STORE),
                }};
                fields = "necessitatibus";
                ids = new String[]{{
                    add("laudantium"),
                    add("tempore"),
                    add("exercitationem"),
                    add("velit"),
                }};
                key = "totam";
                maxResults = 390423L;
                oauthToken = "dolores";
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                searchString = "illo";
                uploadType = "fuga";
                uploadProtocol = "molestias";
            }};            

            DfareportingMobileAppsListResponse res = sdk.mobileApps.dfareportingMobileAppsList(req, new DfareportingMobileAppsListSecurity("at", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.mobileAppsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
