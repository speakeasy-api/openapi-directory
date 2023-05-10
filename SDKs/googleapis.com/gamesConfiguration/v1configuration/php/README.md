# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationAchievementConfigurationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->achievementId = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new GamesConfigurationAchievementConfigurationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementConfigurations->gamesConfigurationAchievementConfigurationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
