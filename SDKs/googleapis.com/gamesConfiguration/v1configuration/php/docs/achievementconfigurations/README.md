# achievementConfigurations

### Available Operations

* [gamesConfigurationAchievementConfigurationsDelete](#gamesconfigurationachievementconfigurationsdelete) - Delete the achievement configuration with the given ID.
* [gamesConfigurationAchievementConfigurationsGet](#gamesconfigurationachievementconfigurationsget) - Retrieves the metadata of the achievement configuration with the given ID.
* [gamesConfigurationAchievementConfigurationsInsert](#gamesconfigurationachievementconfigurationsinsert) - Insert a new achievement configuration in this application.
* [gamesConfigurationAchievementConfigurationsList](#gamesconfigurationachievementconfigurationslist) - Returns a list of the achievement configurations in this application.
* [gamesConfigurationAchievementConfigurationsUpdate](#gamesconfigurationachievementconfigurationsupdate) - Update the metadata of the achievement configuration with the given ID.

## gamesConfigurationAchievementConfigurationsDelete

Delete the achievement configuration with the given ID.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->achievementId = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

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

## gamesConfigurationAchievementConfigurationsGet

Retrieves the metadata of the achievement configuration with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationAchievementConfigurationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->achievementId = 'excepturi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'recusandae';
    $request->fields = 'temporibus';
    $request->key = 'ab';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new GamesConfigurationAchievementConfigurationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementConfigurations->gamesConfigurationAchievementConfigurationsGet($request, $requestSecurity);

    if ($response->achievementConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationAchievementConfigurationsInsert

Insert a new achievement configuration in this application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfigurationAchievementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfigurationDetail;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedStringBundle;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedString;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfigurationInitialStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationAchievementConfigurationsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->achievementConfiguration = new AchievementConfiguration();
    $request->achievementConfiguration->achievementType = AchievementConfigurationAchievementTypeEnum::INCREMENTAL;
    $request->achievementConfiguration->draft = new AchievementConfigurationDetail();
    $request->achievementConfiguration->draft->description = new LocalizedStringBundle();
    $request->achievementConfiguration->draft->description->kind = 'sapiente';
    $request->achievementConfiguration->draft->description->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->draft->iconUrl = 'odit';
    $request->achievementConfiguration->draft->kind = 'at';
    $request->achievementConfiguration->draft->name = new LocalizedStringBundle();
    $request->achievementConfiguration->draft->name->kind = 'at';
    $request->achievementConfiguration->draft->name->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->draft->pointValue = 473608;
    $request->achievementConfiguration->draft->sortRank = 799159;
    $request->achievementConfiguration->id = 'c78ca1ba-928f-4c81-a742-cb7392059293';
    $request->achievementConfiguration->initialState = AchievementConfigurationInitialStateEnum::HIDDEN;
    $request->achievementConfiguration->kind = 'laboriosam';
    $request->achievementConfiguration->published = new AchievementConfigurationDetail();
    $request->achievementConfiguration->published->description = new LocalizedStringBundle();
    $request->achievementConfiguration->published->description->kind = 'hic';
    $request->achievementConfiguration->published->description->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->published->iconUrl = 'fuga';
    $request->achievementConfiguration->published->kind = 'in';
    $request->achievementConfiguration->published->name = new LocalizedStringBundle();
    $request->achievementConfiguration->published->name->kind = 'corporis';
    $request->achievementConfiguration->published->name->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->published->pointValue = 437032;
    $request->achievementConfiguration->published->sortRank = 902349;
    $request->achievementConfiguration->stepsToUnlock = 697631;
    $request->achievementConfiguration->token = 'architecto';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->applicationId = 'est';
    $request->callback = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new GamesConfigurationAchievementConfigurationsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementConfigurations->gamesConfigurationAchievementConfigurationsInsert($request, $requestSecurity);

    if ($response->achievementConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationAchievementConfigurationsList

Returns a list of the achievement configurations in this application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationAchievementConfigurationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->applicationId = 'minima';
    $request->callback = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->maxResults = 634274;
    $request->oauthToken = 'doloribus';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new GamesConfigurationAchievementConfigurationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementConfigurations->gamesConfigurationAchievementConfigurationsList($request, $requestSecurity);

    if ($response->achievementConfigurationListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationAchievementConfigurationsUpdate

Update the metadata of the achievement configuration with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfigurationAchievementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfigurationDetail;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedStringBundle;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedString;
use \OpenAPI\OpenAPI\Models\Shared\AchievementConfigurationInitialStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationAchievementConfigurationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationAchievementConfigurationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->achievementConfiguration = new AchievementConfiguration();
    $request->achievementConfiguration->achievementType = AchievementConfigurationAchievementTypeEnum::ACHIEVEMENT_TYPE_UNSPECIFIED;
    $request->achievementConfiguration->draft = new AchievementConfigurationDetail();
    $request->achievementConfiguration->draft->description = new LocalizedStringBundle();
    $request->achievementConfiguration->draft->description->kind = 'repellat';
    $request->achievementConfiguration->draft->description->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->draft->iconUrl = 'occaecati';
    $request->achievementConfiguration->draft->kind = 'numquam';
    $request->achievementConfiguration->draft->name = new LocalizedStringBundle();
    $request->achievementConfiguration->draft->name->kind = 'commodi';
    $request->achievementConfiguration->draft->name->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->draft->pointValue = 474697;
    $request->achievementConfiguration->draft->sortRank = 244425;
    $request->achievementConfiguration->id = '9251aa52-c3f5-4ad0-99da-1ffe78f097b0';
    $request->achievementConfiguration->initialState = AchievementConfigurationInitialStateEnum::INITIAL_STATE_UNSPECIFIED;
    $request->achievementConfiguration->kind = 'reprehenderit';
    $request->achievementConfiguration->published = new AchievementConfigurationDetail();
    $request->achievementConfiguration->published->description = new LocalizedStringBundle();
    $request->achievementConfiguration->published->description->kind = 'ut';
    $request->achievementConfiguration->published->description->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->published->iconUrl = 'dicta';
    $request->achievementConfiguration->published->kind = 'corporis';
    $request->achievementConfiguration->published->name = new LocalizedStringBundle();
    $request->achievementConfiguration->published->name->kind = 'dolore';
    $request->achievementConfiguration->published->name->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->achievementConfiguration->published->pointValue = 118727;
    $request->achievementConfiguration->published->sortRank = 688661;
    $request->achievementConfiguration->stepsToUnlock = 317983;
    $request->achievementConfiguration->token = 'accusamus';
    $request->accessToken = 'commodi';
    $request->achievementId = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new GamesConfigurationAchievementConfigurationsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->achievementConfigurations->gamesConfigurationAchievementConfigurationsUpdate($request, $requestSecurity);

    if ($response->achievementConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
