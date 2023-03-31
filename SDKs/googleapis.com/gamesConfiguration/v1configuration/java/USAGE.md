<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteSecurity;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeletePathParams;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteQueryParams;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsDeleteRequest req = new GamesConfigurationAchievementConfigurationsDeleteRequest() {{
                security = new GamesConfigurationAchievementConfigurationsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GamesConfigurationAchievementConfigurationsDeletePathParams() {{
                    achievementId = "corrupti";
                }};
                queryParams = new GamesConfigurationAchievementConfigurationsDeleteQueryParams() {{
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

            GamesConfigurationAchievementConfigurationsDeleteResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->