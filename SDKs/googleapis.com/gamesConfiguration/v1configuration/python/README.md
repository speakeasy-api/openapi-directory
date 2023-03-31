# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/gamesConfiguration/v1configuration/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GamesConfigurationAchievementConfigurationsDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    achievement_id="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.achievement_configurations.games_configuration_achievement_configurations_delete(req, operations.GamesConfigurationAchievementConfigurationsDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### achievement_configurations

* `games_configuration_achievement_configurations_delete` - Delete the achievement configuration with the given ID.
* `games_configuration_achievement_configurations_get` - Retrieves the metadata of the achievement configuration with the given ID.
* `games_configuration_achievement_configurations_insert` - Insert a new achievement configuration in this application.
* `games_configuration_achievement_configurations_list` - Returns a list of the achievement configurations in this application.
* `games_configuration_achievement_configurations_update` - Update the metadata of the achievement configuration with the given ID.

### leaderboard_configurations

* `games_configuration_leaderboard_configurations_delete` - Delete the leaderboard configuration with the given ID.
* `games_configuration_leaderboard_configurations_get` - Retrieves the metadata of the leaderboard configuration with the given ID.
* `games_configuration_leaderboard_configurations_insert` - Insert a new leaderboard configuration in this application.
* `games_configuration_leaderboard_configurations_list` - Returns a list of the leaderboard configurations in this application.
* `games_configuration_leaderboard_configurations_update` - Update the metadata of the leaderboard configuration with the given ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
