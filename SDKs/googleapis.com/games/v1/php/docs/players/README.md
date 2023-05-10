# players

### Available Operations

* [gamesPlayersGet](#gamesplayersget) - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* [gamesPlayersGetMultipleApplicationPlayerIds](#gamesplayersgetmultipleapplicationplayerids) - Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
* [gamesPlayersGetScopedPlayerIds](#gamesplayersgetscopedplayerids) - Retrieves scoped player identifiers for currently authenticated user.
* [gamesPlayersList](#gamesplayerslist) - Get the collection of players for the currently authenticated user.

## gamesPlayersGet

Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesPlayersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'id';
    $request->key = 'blanditiis';
    $request->language = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->playerId = 'amet';
    $request->playerIdConsistencyToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new GamesPlayersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->players->gamesPlayersGet($request, $requestSecurity);

    if ($response->player !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesPlayersGetMultipleApplicationPlayerIds

Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersGetMultipleApplicationPlayerIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersGetMultipleApplicationPlayerIdsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesPlayersGetMultipleApplicationPlayerIdsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->applicationIds = [
        'magnam',
        'distinctio',
    ];
    $request->callback = 'id';
    $request->fields = 'labore';
    $request->key = 'labore';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new GamesPlayersGetMultipleApplicationPlayerIdsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->players->gamesPlayersGetMultipleApplicationPlayerIds($request, $requestSecurity);

    if ($response->getMultipleApplicationPlayerIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesPlayersGetScopedPlayerIds

Retrieves scoped player identifiers for currently authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersGetScopedPlayerIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersGetScopedPlayerIdsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesPlayersGetScopedPlayerIdsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'magnam';
    $request->fields = 'et';
    $request->key = 'excepturi';
    $request->oauthToken = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new GamesPlayersGetScopedPlayerIdsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->players->gamesPlayersGetScopedPlayerIds($request, $requestSecurity);

    if ($response->scopedPlayerIds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesPlayersList

Get the collection of players for the currently authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersListCollectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesPlayersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesPlayersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->collection = GamesPlayersListCollectionEnum::CONNECTED;
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->language = 'necessitatibus';
    $request->maxResults = 141264;
    $request->oauthToken = 'nemo';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new GamesPlayersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->players->gamesPlayersList($request, $requestSecurity);

    if ($response->playerListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
