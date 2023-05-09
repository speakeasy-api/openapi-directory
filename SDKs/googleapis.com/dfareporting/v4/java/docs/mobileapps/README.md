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

            DfareportingMobileAppsGetRequest req = new DfareportingMobileAppsGetRequest("quidem", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "voluptas";
                key = "dolorem";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "fuga";
                uploadProtocol = "odio";
            }};            

            DfareportingMobileAppsGetResponse res = sdk.mobileApps.dfareportingMobileAppsGet(req, new DfareportingMobileAppsGetSecurity("unde", "sapiente") {{
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

            DfareportingMobileAppsListRequest req = new DfareportingMobileAppsListRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "ab";
                directories = new org.openapis.openapi.models.operations.DfareportingMobileAppsListDirectoriesEnum[]{{
                    add(DfareportingMobileAppsListDirectoriesEnum.UNKNOWN),
                    add(DfareportingMobileAppsListDirectoriesEnum.UNKNOWN),
                    add(DfareportingMobileAppsListDirectoriesEnum.SAMSUNG_TV_APP_STORE),
                    add(DfareportingMobileAppsListDirectoriesEnum.UNKNOWN),
                }};
                fields = "illum";
                ids = new String[]{{
                    add("commodi"),
                }};
                key = "veritatis";
                maxResults = 968841L;
                oauthToken = "debitis";
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "blanditiis";
                searchString = "nulla";
                uploadType = "minus";
                uploadProtocol = "nemo";
            }};            

            DfareportingMobileAppsListResponse res = sdk.mobileApps.dfareportingMobileAppsList(req, new DfareportingMobileAppsListSecurity("voluptates", "a") {{
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
