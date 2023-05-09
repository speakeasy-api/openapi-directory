# stats

### Available Operations

* [gamesStatsGet](#gamesstatsget) - Returns engagement and spend statistics in this application for the currently authenticated user.

## gamesStatsGet

Returns engagement and spend statistics in this application for the currently authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesStatsGetRequest;
import org.openapis.openapi.models.operations.GamesStatsGetResponse;
import org.openapis.openapi.models.operations.GamesStatsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesStatsGetRequest req = new GamesStatsGetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "ducimus";
                key = "dolore";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "sequi";
                uploadProtocol = "natus";
            }};            

            GamesStatsGetResponse res = sdk.stats.gamesStatsGet(req, new GamesStatsGetSecurity("impedit", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
