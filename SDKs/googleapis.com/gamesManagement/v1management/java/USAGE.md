<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    achievementId = "facilis";
                }};
                queryParams = new GamesManagementAchievementsResetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "nihil";
                    alt = "proto";
                    callback = "nostrum";
                    fields = "illo";
                    key = "sed";
                    oauthToken = "omnis";
                    prettyPrint = false;
                    quotaUser = "incidunt";
                    uploadType = "qui";
                    uploadProtocol = "occaecati";
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