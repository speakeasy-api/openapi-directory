# placementStrategies

### Available Operations

* [dfareportingPlacementStrategiesDelete](#dfareportingplacementstrategiesdelete) - Deletes an existing placement strategy.
* [dfareportingPlacementStrategiesGet](#dfareportingplacementstrategiesget) - Gets one placement strategy by ID.
* [dfareportingPlacementStrategiesInsert](#dfareportingplacementstrategiesinsert) - Inserts a new placement strategy.
* [dfareportingPlacementStrategiesList](#dfareportingplacementstrategieslist) - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* [dfareportingPlacementStrategiesPatch](#dfareportingplacementstrategiespatch) - Updates an existing placement strategy. This method supports patch semantics.
* [dfareportingPlacementStrategiesUpdate](#dfareportingplacementstrategiesupdate) - Updates an existing placement strategy.

## dfareportingPlacementStrategiesDelete

Deletes an existing placement strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementStrategiesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'deserunt';
    $request->id = '7dbb8f53-2d89-42cf-b812-cb512c878240';
    $request->key = 'nobis';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->profileId = 'corporis';
    $request->quotaUser = 'tempora';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DfareportingPlacementStrategiesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementStrategies->dfareportingPlacementStrategiesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementStrategiesGet

Gets one placement strategy by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementStrategiesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'blanditiis';
    $request->fields = 'maiores';
    $request->id = '1bf0bc8e-1f20-46d5-9831-d0081090f670';
    $request->key = 'voluptas';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->profileId = 'ducimus';
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'ratione';

    $requestSecurity = new DfareportingPlacementStrategiesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementStrategies->dfareportingPlacementStrategiesGet($request, $requestSecurity);

    if ($response->placementStrategy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementStrategiesInsert

Inserts a new placement strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementStrategiesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placementStrategy = new PlacementStrategy();
    $request->placementStrategy->accountId = 'ex';
    $request->placementStrategy->id = 'quos';
    $request->placementStrategy->kind = 'dicta';
    $request->placementStrategy->name = 'Jorge Krajcik';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'itaque';
    $request->fields = 'molestiae';
    $request->key = 'quaerat';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->profileId = 'dolore';
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new DfareportingPlacementStrategiesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementStrategies->dfareportingPlacementStrategiesInsert($request, $requestSecurity);

    if ($response->placementStrategy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementStrategiesList

Retrieves a list of placement strategies, possibly filtered. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesListSortFieldEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementStrategiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'eaque';
    $request->ids = [
        'voluptas',
        'aut',
        'vitae',
    ];
    $request->key = 'tempora';
    $request->maxResults = 561813;
    $request->oauthToken = 'cupiditate';
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->profileId = 'minima';
    $request->quotaUser = 'doloribus';
    $request->searchString = 'suscipit';
    $request->sortField = DfareportingPlacementStrategiesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingPlacementStrategiesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DfareportingPlacementStrategiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementStrategies->dfareportingPlacementStrategiesList($request, $requestSecurity);

    if ($response->placementStrategiesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementStrategiesPatch

Updates an existing placement strategy. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementStrategiesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placementStrategy = new PlacementStrategy();
    $request->placementStrategy->accountId = 'non';
    $request->placementStrategy->id = 'pariatur';
    $request->placementStrategy->kind = 'vero';
    $request->placementStrategy->name = 'Marty Spencer';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'pariatur';
    $request->id = '63483e4a-7a98-4e4d-b37e-45b8955d413e';
    $request->key = 'inventore';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->profileId = 'error';
    $request->quotaUser = 'numquam';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new DfareportingPlacementStrategiesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementStrategies->dfareportingPlacementStrategiesPatch($request, $requestSecurity);

    if ($response->placementStrategy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingPlacementStrategiesUpdate

Updates an existing placement strategy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingPlacementStrategiesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingPlacementStrategiesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->placementStrategy = new PlacementStrategy();
    $request->placementStrategy->accountId = 'dicta';
    $request->placementStrategy->id = 'ipsa';
    $request->placementStrategy->kind = 'occaecati';
    $request->placementStrategy->name = 'Charlene Ritchie';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quo';
    $request->fields = 'aut';
    $request->key = 'cupiditate';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->profileId = 'harum';
    $request->quotaUser = 'vero';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DfareportingPlacementStrategiesUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->placementStrategies->dfareportingPlacementStrategiesUpdate($request, $requestSecurity);

    if ($response->placementStrategy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
