# achievementDefinitions

### Available Operations

* [gamesAchievementDefinitionsList](#gamesachievementdefinitionslist) - Lists all the achievement definitions for your application.

## gamesAchievementDefinitionsList

Lists all the achievement definitions for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListRequest;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListResponse;
import org.openapis.openapi.models.operations.GamesAchievementDefinitionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementDefinitionsListRequest req = new GamesAchievementDefinitionsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                language = "placeat";
                maxResults = 528895L;
                oauthToken = "iusto";
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            GamesAchievementDefinitionsListResponse res = sdk.achievementDefinitions.gamesAchievementDefinitionsList(req, new GamesAchievementDefinitionsListSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementDefinitionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
