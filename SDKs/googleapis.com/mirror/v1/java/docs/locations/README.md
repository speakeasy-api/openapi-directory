# locations

### Available Operations

* [mirrorLocationsGet](#mirrorlocationsget) - Gets a single location by ID.
* [mirrorLocationsList](#mirrorlocationslist) - Retrieves a list of locations for the user.

## mirrorLocationsGet

Gets a single location by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorLocationsGetRequest;
import org.openapis.openapi.models.operations.MirrorLocationsGetResponse;
import org.openapis.openapi.models.operations.MirrorLocationsGetSecurity;
import org.openapis.openapi.models.operations.MirrorLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.MirrorLocationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorLocationsGetRequest req = new MirrorLocationsGetRequest("natus") {{
                alt = AltEnum.JSON;
                fields = "nobis";
                key = "eum";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                userIp = "architecto";
            }};            

            MirrorLocationsGetResponse res = sdk.locations.mirrorLocationsGet(req, new MirrorLocationsGetSecurity() {{
                option1 = new MirrorLocationsGetSecurityOption1("magnam", "et") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mirrorLocationsList

Retrieves a list of locations for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorLocationsListRequest;
import org.openapis.openapi.models.operations.MirrorLocationsListResponse;
import org.openapis.openapi.models.operations.MirrorLocationsListSecurity;
import org.openapis.openapi.models.operations.MirrorLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.MirrorLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorLocationsListRequest req = new MirrorLocationsListRequest() {{
                alt = AltEnum.JSON;
                fields = "excepturi";
                key = "ullam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "quos";
                userIp = "sint";
            }};            

            MirrorLocationsListResponse res = sdk.locations.mirrorLocationsList(req, new MirrorLocationsListSecurity() {{
                option1 = new MirrorLocationsListSecurityOption1("accusantium", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
