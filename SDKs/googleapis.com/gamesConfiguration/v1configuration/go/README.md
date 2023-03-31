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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GamesConfigurationAchievementConfigurationsDeleteRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        AchievementID: "distinctio",
        Alt: "proto",
        Callback: "unde",
        Fields: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        PrettyPrint: false,
        QuotaUser: "vel",
        UploadType: "error",
        UploadProtocol: "deserunt",
    }

    ctx := context.Background()
    res, err := s.AchievementConfigurations.GamesConfigurationAchievementConfigurationsDelete(ctx, req, operations.GamesConfigurationAchievementConfigurationsDeleteSecurity{
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


### AchievementConfigurations

* `GamesConfigurationAchievementConfigurationsDelete` - Delete the achievement configuration with the given ID.
* `GamesConfigurationAchievementConfigurationsGet` - Retrieves the metadata of the achievement configuration with the given ID.
* `GamesConfigurationAchievementConfigurationsInsert` - Insert a new achievement configuration in this application.
* `GamesConfigurationAchievementConfigurationsList` - Returns a list of the achievement configurations in this application.
* `GamesConfigurationAchievementConfigurationsUpdate` - Update the metadata of the achievement configuration with the given ID.

### LeaderboardConfigurations

* `GamesConfigurationLeaderboardConfigurationsDelete` - Delete the leaderboard configuration with the given ID.
* `GamesConfigurationLeaderboardConfigurationsGet` - Retrieves the metadata of the leaderboard configuration with the given ID.
* `GamesConfigurationLeaderboardConfigurationsInsert` - Insert a new leaderboard configuration in this application.
* `GamesConfigurationLeaderboardConfigurationsList` - Returns a list of the leaderboard configurations in this application.
* `GamesConfigurationLeaderboardConfigurationsUpdate` - Update the metadata of the leaderboard configuration with the given ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
