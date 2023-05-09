# settings

### Available Operations

* [mirrorSettingsGet](#mirrorsettingsget) - Gets a single setting by ID.

## mirrorSettingsGet

Gets a single setting by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MirrorSettingsGetRequest;
import org.openapis.openapi.models.operations.MirrorSettingsGetResponse;
import org.openapis.openapi.models.operations.MirrorSettingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MirrorSettingsGetRequest req = new MirrorSettingsGetRequest("reiciendis") {{
                alt = AltEnum.JSON;
                fields = "mollitia";
                key = "ad";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "dolor";
                userIp = "necessitatibus";
            }};            

            MirrorSettingsGetResponse res = sdk.settings.mirrorSettingsGet(req, new MirrorSettingsGetSecurity("odit", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
