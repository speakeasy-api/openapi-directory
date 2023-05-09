# metagame

### Available Operations

* [gamesMetagameGetMetagameConfig](#gamesmetagamegetmetagameconfig) - Return the metagame configuration data for the calling application.
* [gamesMetagameListCategoriesByPlayer](#gamesmetagamelistcategoriesbyplayer) - List play data aggregated per category for the player corresponding to `playerId`.

## gamesMetagameGetMetagameConfig

Return the metagame configuration data for the calling application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesMetagameGetMetagameConfigRequest;
import org.openapis.openapi.models.operations.GamesMetagameGetMetagameConfigResponse;
import org.openapis.openapi.models.operations.GamesMetagameGetMetagameConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesMetagameGetMetagameConfigRequest req = new GamesMetagameGetMetagameConfigRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "dolores";
                key = "quis";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "eaque";
                uploadProtocol = "quis";
            }};            

            GamesMetagameGetMetagameConfigResponse res = sdk.metagame.gamesMetagameGetMetagameConfig(req, new GamesMetagameGetMetagameConfigSecurity("nesciunt", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.metagameConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesMetagameListCategoriesByPlayer

List play data aggregated per category for the player corresponding to `playerId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesMetagameListCategoriesByPlayerCollectionEnum;
import org.openapis.openapi.models.operations.GamesMetagameListCategoriesByPlayerRequest;
import org.openapis.openapi.models.operations.GamesMetagameListCategoriesByPlayerResponse;
import org.openapis.openapi.models.operations.GamesMetagameListCategoriesByPlayerSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesMetagameListCategoriesByPlayerRequest req = new GamesMetagameListCategoriesByPlayerRequest(GamesMetagameListCategoriesByPlayerCollectionEnum.COLLECTION_UNSPECIFIED, "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "nostrum";
                key = "hic";
                language = "recusandae";
                maxResults = 608253L;
                oauthToken = "facilis";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "porro";
                uploadProtocol = "consequuntur";
            }};            

            GamesMetagameListCategoriesByPlayerResponse res = sdk.metagame.gamesMetagameListCategoriesByPlayer(req, new GamesMetagameListCategoriesByPlayerSecurity("blanditiis", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.categoryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
