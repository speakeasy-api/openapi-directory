# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### achievementConfigurations

* `gamesConfigurationAchievementConfigurationsDelete` - Delete the achievement configuration with the given ID.
* `gamesConfigurationAchievementConfigurationsGet` - Retrieves the metadata of the achievement configuration with the given ID.
* `gamesConfigurationAchievementConfigurationsInsert` - Insert a new achievement configuration in this application.
* `gamesConfigurationAchievementConfigurationsList` - Returns a list of the achievement configurations in this application.
* `gamesConfigurationAchievementConfigurationsUpdate` - Update the metadata of the achievement configuration with the given ID.

### leaderboardConfigurations

* `gamesConfigurationLeaderboardConfigurationsDelete` - Delete the leaderboard configuration with the given ID.
* `gamesConfigurationLeaderboardConfigurationsGet` - Retrieves the metadata of the leaderboard configuration with the given ID.
* `gamesConfigurationLeaderboardConfigurationsInsert` - Insert a new leaderboard configuration in this application.
* `gamesConfigurationLeaderboardConfigurationsList` - Returns a list of the leaderboard configurations in this application.
* `gamesConfigurationLeaderboardConfigurationsUpdate` - Update the metadata of the leaderboard configuration with the given ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
