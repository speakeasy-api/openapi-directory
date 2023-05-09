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

            DfareportingMobileAppsGetRequest req = new DfareportingMobileAppsGetRequest("odit", "ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "debitis";
                key = "repudiandae";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "laboriosam";
                uploadProtocol = "laudantium";
            }};            

            DfareportingMobileAppsGetResponse res = sdk.mobileApps.dfareportingMobileAppsGet(req, new DfareportingMobileAppsGetSecurity("quasi", "nihil") {{
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

            DfareportingMobileAppsListRequest req = new DfareportingMobileAppsListRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.JSON;
                callback = "nisi";
                directories = new org.openapis.openapi.models.operations.DfareportingMobileAppsListDirectoriesEnum[]{{
                    add(DfareportingMobileAppsListDirectoriesEnum.GOOGLE_PLAY_STORE),
                }};
                fields = "ducimus";
                ids = new String[]{{
                    add("cupiditate"),
                    add("facilis"),
                    add("iusto"),
                }};
                key = "perspiciatis";
                maxResults = 363893L;
                oauthToken = "ex";
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "quae";
                searchString = "quidem";
                uploadType = "voluptatem";
                uploadProtocol = "tenetur";
            }};            

            DfareportingMobileAppsListResponse res = sdk.mobileApps.dfareportingMobileAppsList(req, new DfareportingMobileAppsListSecurity("mollitia", "voluptatem") {{
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
