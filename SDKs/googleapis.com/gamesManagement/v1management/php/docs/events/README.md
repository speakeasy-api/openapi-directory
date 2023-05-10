# events

### Available Operations

* [gamesManagementEventsReset](#gamesmanagementeventsreset) - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementEventsResetAll](#gamesmanagementeventsresetall) - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementEventsResetAllForAllPlayers](#gamesmanagementeventsresetallforallplayers) - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* [gamesManagementEventsResetForAllPlayers](#gamesmanagementeventsresetforallplayers) - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* [gamesManagementEventsResetMultipleForAllPlayers](#gamesmanagementeventsresetmultipleforallplayers) - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

## gamesManagementEventsReset

Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementEventsResetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->eventId = 'ipsa';
    $request->fields = 'reiciendis';
    $request->key = 'est';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'dolorem';

    $requestSecurity = new GamesManagementEventsResetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesManagementEventsReset($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementEventsResetAll

Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementEventsResetAllRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new GamesManagementEventsResetAllSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesManagementEventsResetAll($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementEventsResetAllForAllPlayers

Resets all draft events for all players. This method is only available to user accounts for your developer console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetAllForAllPlayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetAllForAllPlayersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementEventsResetAllForAllPlayersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'mollitia';
    $request->key = 'dolorem';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new GamesManagementEventsResetAllForAllPlayersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesManagementEventsResetAllForAllPlayers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementEventsResetForAllPlayers

Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetForAllPlayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetForAllPlayersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementEventsResetForAllPlayersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->eventId = 'molestiae';
    $request->fields = 'velit';
    $request->key = 'error';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new GamesManagementEventsResetForAllPlayersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesManagementEventsResetForAllPlayers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesManagementEventsResetMultipleForAllPlayers

Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetMultipleForAllPlayersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventsResetMultipleForAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesManagementEventsResetMultipleForAllPlayersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesManagementEventsResetMultipleForAllPlayersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->eventsResetMultipleForAllRequest = new EventsResetMultipleForAllRequest();
    $request->eventsResetMultipleForAllRequest->eventIds = [
        'odit',
        'quo',
    ];
    $request->eventsResetMultipleForAllRequest->kind = 'sequi';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new GamesManagementEventsResetMultipleForAllPlayersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->events->gamesManagementEventsResetMultipleForAllPlayers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
