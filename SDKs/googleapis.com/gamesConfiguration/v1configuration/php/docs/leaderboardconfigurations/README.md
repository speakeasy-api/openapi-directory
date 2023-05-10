# leaderboardConfigurations

### Available Operations

* [gamesConfigurationLeaderboardConfigurationsDelete](#gamesconfigurationleaderboardconfigurationsdelete) - Delete the leaderboard configuration with the given ID.
* [gamesConfigurationLeaderboardConfigurationsGet](#gamesconfigurationleaderboardconfigurationsget) - Retrieves the metadata of the leaderboard configuration with the given ID.
* [gamesConfigurationLeaderboardConfigurationsInsert](#gamesconfigurationleaderboardconfigurationsinsert) - Insert a new leaderboard configuration in this application.
* [gamesConfigurationLeaderboardConfigurationsList](#gamesconfigurationleaderboardconfigurationslist) - Returns a list of the leaderboard configurations in this application.
* [gamesConfigurationLeaderboardConfigurationsUpdate](#gamesconfigurationleaderboardconfigurationsupdate) - Update the metadata of the leaderboard configuration with the given ID.

## gamesConfigurationLeaderboardConfigurationsDelete

Delete the leaderboard configuration with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationLeaderboardConfigurationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->key = 'veritatis';
    $request->leaderboardId = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new GamesConfigurationLeaderboardConfigurationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboardConfigurations->gamesConfigurationLeaderboardConfigurationsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationLeaderboardConfigurationsGet

Retrieves the metadata of the leaderboard configuration with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationLeaderboardConfigurationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->leaderboardId = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new GamesConfigurationLeaderboardConfigurationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboardConfigurations->gamesConfigurationLeaderboardConfigurationsGet($request, $requestSecurity);

    if ($response->leaderboardConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationLeaderboardConfigurationsInsert

Insert a new leaderboard configuration in this application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaderboardConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LeaderboardConfigurationDetail;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedStringBundle;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedString;
use \OpenAPI\OpenAPI\Models\Shared\GamesNumberFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GamesNumberFormatConfigurationNumberFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GamesNumberAffixConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LeaderboardConfigurationScoreOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationLeaderboardConfigurationsInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->leaderboardConfiguration = new LeaderboardConfiguration();
    $request->leaderboardConfiguration->draft = new LeaderboardConfigurationDetail();
    $request->leaderboardConfiguration->draft->iconUrl = 'magni';
    $request->leaderboardConfiguration->draft->kind = 'assumenda';
    $request->leaderboardConfiguration->draft->name = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->name->kind = 'ipsam';
    $request->leaderboardConfiguration->draft->name->translations = [
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat = new GamesNumberFormatConfiguration();
    $request->leaderboardConfiguration->draft->scoreFormat->currencyCode = 'fugit';
    $request->leaderboardConfiguration->draft->scoreFormat->numDecimalPlaces = 677817;
    $request->leaderboardConfiguration->draft->scoreFormat->numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum::TIME_DURATION;
    $request->leaderboardConfiguration->draft->scoreFormat->suffix = new GamesNumberAffixConfiguration();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->few = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->few->kind = 'tempora';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->few->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->many = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->many->kind = 'tempore';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->many->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->one = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->one->kind = 'delectus';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->one->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->other = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->other->kind = 'non';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->other->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->two = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->two->kind = 'sint';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->two->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->zero = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->zero->kind = 'provident';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->zero->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->sortRank = 572252;
    $request->leaderboardConfiguration->id = 'a3efa77d-fb14-4cd6-aae3-95efb9ba88f3';
    $request->leaderboardConfiguration->kind = 'deserunt';
    $request->leaderboardConfiguration->published = new LeaderboardConfigurationDetail();
    $request->leaderboardConfiguration->published->iconUrl = 'nisi';
    $request->leaderboardConfiguration->published->kind = 'vel';
    $request->leaderboardConfiguration->published->name = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->name->kind = 'natus';
    $request->leaderboardConfiguration->published->name->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat = new GamesNumberFormatConfiguration();
    $request->leaderboardConfiguration->published->scoreFormat->currencyCode = 'molestiae';
    $request->leaderboardConfiguration->published->scoreFormat->numDecimalPlaces = 19193;
    $request->leaderboardConfiguration->published->scoreFormat->numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum::NUMERIC;
    $request->leaderboardConfiguration->published->scoreFormat->suffix = new GamesNumberAffixConfiguration();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->few = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->few->kind = 'magnam';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->few->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->many = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->many->kind = 'id';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->many->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->one = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->one->kind = 'labore';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->one->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->other = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->other->kind = 'natus';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->other->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->two = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->two->kind = 'eum';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->two->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->zero = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->zero->kind = 'aspernatur';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->zero->translations = [
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->sortRank = 298282;
    $request->leaderboardConfiguration->scoreMax = 'et';
    $request->leaderboardConfiguration->scoreMin = 'excepturi';
    $request->leaderboardConfiguration->scoreOrder = LeaderboardConfigurationScoreOrderEnum::LARGER_IS_BETTER;
    $request->leaderboardConfiguration->token = 'provident';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->applicationId = 'accusantium';
    $request->callback = 'mollitia';
    $request->fields = 'reiciendis';
    $request->key = 'mollitia';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new GamesConfigurationLeaderboardConfigurationsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboardConfigurations->gamesConfigurationLeaderboardConfigurationsInsert($request, $requestSecurity);

    if ($response->leaderboardConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationLeaderboardConfigurationsList

Returns a list of the leaderboard configurations in this application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationLeaderboardConfigurationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->applicationId = 'iure';
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->maxResults = 806194;
    $request->oauthToken = 'deleniti';
    $request->pageToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new GamesConfigurationLeaderboardConfigurationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboardConfigurations->gamesConfigurationLeaderboardConfigurationsList($request, $requestSecurity);

    if ($response->leaderboardConfigurationListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesConfigurationLeaderboardConfigurationsUpdate

Update the metadata of the leaderboard configuration with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LeaderboardConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LeaderboardConfigurationDetail;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedStringBundle;
use \OpenAPI\OpenAPI\Models\Shared\LocalizedString;
use \OpenAPI\OpenAPI\Models\Shared\GamesNumberFormatConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\GamesNumberFormatConfigurationNumberFormatTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GamesNumberAffixConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LeaderboardConfigurationScoreOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesConfigurationLeaderboardConfigurationsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesConfigurationLeaderboardConfigurationsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->leaderboardConfiguration = new LeaderboardConfiguration();
    $request->leaderboardConfiguration->draft = new LeaderboardConfigurationDetail();
    $request->leaderboardConfiguration->draft->iconUrl = 'ullam';
    $request->leaderboardConfiguration->draft->kind = 'expedita';
    $request->leaderboardConfiguration->draft->name = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->name->kind = 'nihil';
    $request->leaderboardConfiguration->draft->name->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat = new GamesNumberFormatConfiguration();
    $request->leaderboardConfiguration->draft->scoreFormat->currencyCode = 'quibusdam';
    $request->leaderboardConfiguration->draft->scoreFormat->numDecimalPlaces = 149448;
    $request->leaderboardConfiguration->draft->scoreFormat->numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum::CURRENCY;
    $request->leaderboardConfiguration->draft->scoreFormat->suffix = new GamesNumberAffixConfiguration();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->few = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->few->kind = 'pariatur';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->few->translations = [
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->many = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->many->kind = 'consequuntur';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->many->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->one = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->one->kind = 'natus';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->one->translations = [
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->other = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->other->kind = 'sunt';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->other->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->two = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->two->kind = 'illum';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->two->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->zero = new LocalizedStringBundle();
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->zero->kind = 'maxime';
    $request->leaderboardConfiguration->draft->scoreFormat->suffix->zero->translations = [
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->draft->sortRank = 569101;
    $request->leaderboardConfiguration->id = '2601fb57-6b0d-45f0-930c-5fbb25870532';
    $request->leaderboardConfiguration->kind = 'perferendis';
    $request->leaderboardConfiguration->published = new LeaderboardConfigurationDetail();
    $request->leaderboardConfiguration->published->iconUrl = 'dolores';
    $request->leaderboardConfiguration->published->kind = 'minus';
    $request->leaderboardConfiguration->published->name = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->name->kind = 'quam';
    $request->leaderboardConfiguration->published->name->translations = [
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat = new GamesNumberFormatConfiguration();
    $request->leaderboardConfiguration->published->scoreFormat->currencyCode = 'vero';
    $request->leaderboardConfiguration->published->scoreFormat->numDecimalPlaces = 345352;
    $request->leaderboardConfiguration->published->scoreFormat->numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum::CURRENCY;
    $request->leaderboardConfiguration->published->scoreFormat->suffix = new GamesNumberAffixConfiguration();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->few = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->few->kind = 'recusandae';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->few->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->many = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->many->kind = 'facilis';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->many->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->one = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->one->kind = 'voluptatem';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->one->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->other = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->other->kind = 'consequuntur';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->other->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->two = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->two->kind = 'error';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->two->translations = [
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->scoreFormat->suffix->zero = new LocalizedStringBundle();
    $request->leaderboardConfiguration->published->scoreFormat->suffix->zero->kind = 'occaecati';
    $request->leaderboardConfiguration->published->scoreFormat->suffix->zero->translations = [
        new LocalizedString(),
        new LocalizedString(),
        new LocalizedString(),
    ];
    $request->leaderboardConfiguration->published->sortRank = 237893;
    $request->leaderboardConfiguration->scoreMax = 'asperiores';
    $request->leaderboardConfiguration->scoreMin = 'earum';
    $request->leaderboardConfiguration->scoreOrder = LeaderboardConfigurationScoreOrderEnum::SCORE_ORDER_UNSPECIFIED;
    $request->leaderboardConfiguration->token = 'iste';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'provident';
    $request->key = 'nobis';
    $request->leaderboardId = 'libero';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new GamesConfigurationLeaderboardConfigurationsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboardConfigurations->gamesConfigurationLeaderboardConfigurationsUpdate($request, $requestSecurity);

    if ($response->leaderboardConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
