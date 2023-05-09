# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/gamesConfiguration/v1configuration/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsDelete(ctx, operations.GamesConfigurationAchievementConfigurationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        AchievementID: "distinctio",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.GamesConfigurationAchievementConfigurationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AchievementConfigurations](docs/achievementconfigurations/README.md)

* [GamesConfigurationAchievementConfigurationsDelete](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsdelete) - Delete the achievement configuration with the given ID.
* [GamesConfigurationAchievementConfigurationsGet](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsget) - Retrieves the metadata of the achievement configuration with the given ID.
* [GamesConfigurationAchievementConfigurationsInsert](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsinsert) - Insert a new achievement configuration in this application.
* [GamesConfigurationAchievementConfigurationsList](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationslist) - Returns a list of the achievement configurations in this application.
* [GamesConfigurationAchievementConfigurationsUpdate](docs/achievementconfigurations/README.md#gamesconfigurationachievementconfigurationsupdate) - Update the metadata of the achievement configuration with the given ID.

### [LeaderboardConfigurations](docs/leaderboardconfigurations/README.md)

* [GamesConfigurationLeaderboardConfigurationsDelete](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsdelete) - Delete the leaderboard configuration with the given ID.
* [GamesConfigurationLeaderboardConfigurationsGet](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsget) - Retrieves the metadata of the leaderboard configuration with the given ID.
* [GamesConfigurationLeaderboardConfigurationsInsert](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsinsert) - Insert a new leaderboard configuration in this application.
* [GamesConfigurationLeaderboardConfigurationsList](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationslist) - Returns a list of the leaderboard configurations in this application.
* [GamesConfigurationLeaderboardConfigurationsUpdate](docs/leaderboardconfigurations/README.md#gamesconfigurationleaderboardconfigurationsupdate) - Update the metadata of the leaderboard configuration with the given ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
