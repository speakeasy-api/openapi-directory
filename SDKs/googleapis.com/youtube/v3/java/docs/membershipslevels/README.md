# membershipsLevels

### Available Operations

* [youtubeMembershipsLevelsList](#youtubemembershipslevelslist) - Retrieves a list of all pricing levels offered by a creator to the fans.

## youtubeMembershipsLevelsList

Retrieves a list of all pricing levels offered by a creator to the fans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeMembershipsLevelsListRequest;
import org.openapis.openapi.models.operations.YoutubeMembershipsLevelsListResponse;
import org.openapis.openapi.models.operations.YoutubeMembershipsLevelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeMembershipsLevelsListRequest req = new YoutubeMembershipsLevelsListRequest(                new String[]{{
                                add("suscipit"),
                            }}) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "occaecati";
                key = "labore";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "fugit";
                uploadProtocol = "aliquid";
            }};            

            YoutubeMembershipsLevelsListResponse res = sdk.membershipsLevels.youtubeMembershipsLevelsList(req, new YoutubeMembershipsLevelsListSecurity("magnam", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.membershipsLevelListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
