# scores

### Available Operations

* [gamesManagementScoresReset](#gamesmanagementscoresreset) - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementScoresResetAll](#gamesmanagementscoresresetall) - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementScoresResetAllForAllPlayers](#gamesmanagementscoresresetallforallplayers) - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* [gamesManagementScoresResetForAllPlayers](#gamesmanagementscoresresetforallplayers) - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* [gamesManagementScoresResetMultipleForAllPlayers](#gamesmanagementscoresresetmultipleforallplayers) - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

## gamesManagementScoresReset

Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementScoresResetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'quidem';
    $request->key = 'molestias';
    $request->leaderboardId = 'excepturi';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new GamesManagementScoresResetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesManagementScoresReset($request, $requestSecurity);

    if ($response->playerScoreResetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementScoresResetAll

Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementScoresResetAllRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'veritatis';
    $request->key = 'itaque';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new GamesManagementScoresResetAllSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesManagementScoresResetAll($request, $requestSecurity);

    if ($response->playerScoreResetAllResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementScoresResetAllForAllPlayers

Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetAllForAllPlayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetAllForAllPlayersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementScoresResetAllForAllPlayersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'quibusdam';
    $request->key = 'labore';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new GamesManagementScoresResetAllForAllPlayersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesManagementScoresResetAllForAllPlayers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementScoresResetForAllPlayers

Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetForAllPlayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetForAllPlayersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementScoresResetForAllPlayersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'assumenda';
    $request->fields = 'ipsam';
    $request->key = 'alias';
    $request->leaderboardId = 'fugit';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'facilis';

    $requestSecurity = new GamesManagementScoresResetForAllPlayersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesManagementScoresResetForAllPlayers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementScoresResetMultipleForAllPlayers

Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetMultipleForAllPlayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScoresResetMultipleForAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementScoresResetMultipleForAllPlayersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementScoresResetMultipleForAllPlayersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->scoresResetMultipleForAllRequest = new ScoresResetMultipleForAllRequest();
    $request->scoresResetMultipleForAllRequest->kind = 'labore';
    $request->scoresResetMultipleForAllRequest->leaderboardIds = [
        'eum',
        'non',
        'eligendi',
        'sint',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new GamesManagementScoresResetMultipleForAllPlayersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->scores->gamesManagementScoresResetMultipleForAllPlayers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
