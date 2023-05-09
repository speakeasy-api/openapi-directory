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

            DfareportingMobileAppsGetRequest req = new DfareportingMobileAppsGetRequest("nostrum", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "quis";
                fields = "earum";
                key = "voluptatem";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "quas";
                uploadProtocol = "cum";
            }};            

            DfareportingMobileAppsGetResponse res = sdk.mobileApps.dfareportingMobileAppsGet(req, new DfareportingMobileAppsGetSecurity("sint", "laborum") {{
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

            DfareportingMobileAppsListRequest req = new DfareportingMobileAppsListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                directories = new org.openapis.openapi.models.operations.DfareportingMobileAppsListDirectoriesEnum[]{{
                    add(DfareportingMobileAppsListDirectoriesEnum.ROKU_APP_STORE),
                    add(DfareportingMobileAppsListDirectoriesEnum.PLAYSTATION_APP_STORE),
                }};
                fields = "nisi";
                ids = new String[]{{
                    add("odio"),
                    add("libero"),
                    add("aliquam"),
                    add("quasi"),
                }};
                key = "ipsum";
                maxResults = 777139L;
                oauthToken = "expedita";
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "magni";
                searchString = "assumenda";
                uploadType = "et";
                uploadProtocol = "molestiae";
            }};            

            DfareportingMobileAppsListResponse res = sdk.mobileApps.dfareportingMobileAppsList(req, new DfareportingMobileAppsListSecurity("ea", "assumenda") {{
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
