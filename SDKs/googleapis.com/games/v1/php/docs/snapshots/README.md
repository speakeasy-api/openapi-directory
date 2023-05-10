# snapshots

### Available Operations

* [gamesSnapshotsGet](#gamessnapshotsget) - Retrieves the metadata for a given snapshot ID.
* [gamesSnapshotsList](#gamessnapshotslist) - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

## gamesSnapshotsGet

Retrieves the metadata for a given snapshot ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesSnapshotsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'quos';
    $request->key = 'aliquid';
    $request->language = 'dolorem';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->snapshotId = 'qui';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new GamesSnapshotsGetSecurity();
    $requestSecurity->option1 = new GamesSnapshotsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->gamesSnapshotsGet($request, $requestSecurity);

    if ($response->snapshot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gamesSnapshotsList

Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\GamesSnapshotsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GamesSnapshotsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'reiciendis';
    $request->key = 'amet';
    $request->language = 'dolorum';
    $request->maxResults = 254356;
    $request->oauthToken = 'veritatis';
    $request->pageToken = 'ipsa';
    $request->playerId = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new GamesSnapshotsListSecurity();
    $requestSecurity->option1 = new GamesSnapshotsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->snapshots->gamesSnapshotsList($request, $requestSecurity);

    if ($response->snapshotListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
