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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'alias';
    $request->id = '750a00e9-66ec-4736-9431-94398c783c92';
    $request->key = 'dolor';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->profileId = 'praesentium';
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ipsum';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'quam';
    $request->id = 'ca3c5ca8-649a-470c-bd5d-6989b7206451';
    $request->key = 'ipsa';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->profileId = 'voluptate';
    $request->quotaUser = 'illum';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'perspiciatis';

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
    $request->placementStrategy->accountId = 'laborum';
    $request->placementStrategy->id = 'voluptatum';
    $request->placementStrategy->kind = 'ratione';
    $request->placementStrategy->name = 'Frederick Mertz';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ut';
    $request->fields = 'tempore';
    $request->key = 'molestias';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'minus';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'sint';

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
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quaerat';
    $request->fields = 'minima';
    $request->ids = [
        'unde',
        'ullam',
        'enim',
        'facere',
    ];
    $request->key = 'cumque';
    $request->maxResults = 765900;
    $request->oauthToken = 'et';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'minima';
    $request->quotaUser = 'eveniet';
    $request->searchString = 'est';
    $request->sortField = DfareportingPlacementStrategiesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingPlacementStrategiesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'dicta';

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
    $request->placementStrategy->accountId = 'iure';
    $request->placementStrategy->id = 'cumque';
    $request->placementStrategy->kind = 'quaerat';
    $request->placementStrategy->name = 'Harriet Schultz';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'totam';
    $request->id = '4aba3d23-0edf-4738-91a1-15382bd7ed56';
    $request->key = 'veniam';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->profileId = 'quam';
    $request->quotaUser = 'vel';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'veritatis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->placementStrategy = new PlacementStrategy();
    $request->placementStrategy->accountId = 'ad';
    $request->placementStrategy->id = 'deleniti';
    $request->placementStrategy->kind = 'doloribus';
    $request->placementStrategy->name = 'Janis Kshlerin';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'modi';
    $request->key = 'cumque';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->profileId = 'accusantium';
    $request->quotaUser = 'fuga';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'reprehenderit';

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
