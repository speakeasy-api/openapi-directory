<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GamesManagementAchievementsResetSecurity;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetPathParams;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetQueryParams;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetRequest req = new GamesManagementAchievementsResetRequest() {{
                security = new GamesManagementAchievementsResetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GamesManagementAchievementsResetPathParams() {{
                    achievementId = "corrupti";
                }};
                queryParams = new GamesManagementAchievementsResetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            GamesManagementAchievementsResetResponse res = sdk.achievements.gamesManagementAchievementsReset(req);

            if (res.achievementResetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->