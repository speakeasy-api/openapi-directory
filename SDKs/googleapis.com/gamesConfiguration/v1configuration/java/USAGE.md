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
                    achievementId = "voluptas";
                }};
                queryParams = new GamesConfigurationAchievementConfigurationsDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "sed";
                    alt = "json";
                    callback = "ut";
                    fields = "ad";
                    key = "aut";
                    oauthToken = "id";
                    prettyPrint = false;
                    quotaUser = "corporis";
                    uploadType = "quas";
                    uploadProtocol = "velit";
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