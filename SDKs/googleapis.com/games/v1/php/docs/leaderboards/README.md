# leaderboards

### Available Operations

* [gamesLeaderboardsGet](#gamesleaderboardsget) - Retrieves the metadata of the leaderboard with the given ID.
* [gamesLeaderboardsList](#gamesleaderboardslist) - Lists all the leaderboard metadata for your application.

## gamesLeaderboardsGet

Retrieves the metadata of the leaderboard with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesLeaderboardsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesLeaderboardsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesLeaderboardsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->language = 'quos';
    $request->leaderboardId = 'perferendis';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new GamesLeaderboardsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboards->gamesLeaderboardsGet($request, $requestSecurity);

    if ($response->leaderboard !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesLeaderboardsList

Lists all the leaderboard metadata for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesLeaderboardsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesLeaderboardsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesLeaderboardsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'facilis';
    $request->key = 'tempore';
    $request->language = 'labore';
    $request->maxResults = 962189;
    $request->oauthToken = 'eum';
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new GamesLeaderboardsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->leaderboards->gamesLeaderboardsList($request, $requestSecurity);

    if ($response->leaderboardListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
