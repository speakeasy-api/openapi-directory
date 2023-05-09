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
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteResponse;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsDeleteRequest req = new GamesConfigurationAchievementConfigurationsDeleteRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            GamesConfigurationAchievementConfigurationsDeleteResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsDelete(req, new GamesConfigurationAchievementConfigurationsDeleteSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [achievementConfigurations](docs/achievementconfigurations/README.md)

* [gamesConfigurationAchievementConfigurationsDelete](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsdelete) - Delete the achievement configuration with the given ID.
* [gamesConfigurationAchievementConfigurationsGet](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsget) - Retrieves the metadata of the achievement configuration with the given ID.
* [gamesConfigurationAchievementConfigurationsInsert](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsinsert) - Insert a new achievement configuration in this application.
* [gamesConfigurationAchievementConfigurationsList](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationslist) - Returns a list of the achievement configurations in this application.
* [gamesConfigurationAchievementConfigurationsUpdate](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsupdate) - Update the metadata of the achievement configuration with the given ID.

### [leaderboardConfigurations](docs/leaderboardconfigurations/README.md)

* [gamesConfigurationLeaderboardConfigurationsDelete](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsdelete) - Delete the leaderboard configuration with the given ID.
* [gamesConfigurationLeaderboardConfigurationsGet](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsget) - Retrieves the metadata of the leaderboard configuration with the given ID.
* [gamesConfigurationLeaderboardConfigurationsInsert](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsinsert) - Insert a new leaderboard configuration in this application.
* [gamesConfigurationLeaderboardConfigurationsList](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationslist) - Returns a list of the leaderboard configurations in this application.
* [gamesConfigurationLeaderboardConfigurationsUpdate](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsupdate) - Update the metadata of the leaderboard configuration with the given ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
