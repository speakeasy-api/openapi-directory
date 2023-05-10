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
    $request->accessToken = 'atque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'cupiditate';
    $request->id = '2398ed3d-3ab7-4ca3-85ca-8649a70cfd5d';
    $request->key = 'commodi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'corrupti';
    $request->quotaUser = 'iste';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'in';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'ad';
    $request->id = '1077d19e-a83d-4492-ad14-b8a2c1954545';
    $request->key = 'officiis';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->profileId = 'ullam';
    $request->quotaUser = 'enim';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'cumque';

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
    $request->placementStrategy->accountId = 'et';
    $request->placementStrategy->id = 'praesentium';
    $request->placementStrategy->kind = 'minima';
    $request->placementStrategy->name = 'Ernesto Gutkowski Sr.';
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cumque';
    $request->fields = 'quaerat';
    $request->key = 'sequi';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->profileId = 'facere';
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'laborum';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'similique';
    $request->ids = [
        'culpa',
        'ratione',
        'illum',
    ];
    $request->key = 'sed';
    $request->maxResults = 229336;
    $request->oauthToken = 'aut';
    $request->pageToken = 'voluptates';
    $request->prettyPrint = false;
    $request->profileId = 'nulla';
    $request->quotaUser = 'tenetur';
    $request->searchString = 'dignissimos';
    $request->sortField = DfareportingPlacementStrategiesListSortFieldEnum::ID;
    $request->sortOrder = DfareportingPlacementStrategiesListSortOrderEnum::DESCENDING;
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'vitae';

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
    $request->placementStrategy->accountId = 'beatae';
    $request->placementStrategy->id = 'vitae';
    $request->placementStrategy->kind = 'veniam';
    $request->placementStrategy->name = 'Lena Cruickshank';
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellendus';
    $request->fields = 'enim';
    $request->id = '6507621c-58f4-4d73-9656-4c20a0711a96';
    $request->key = 'dicta';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->profileId = 'aspernatur';
    $request->quotaUser = 'ut';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'dignissimos';

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
    $request->placementStrategy->accountId = 'facilis';
    $request->placementStrategy->id = 'libero';
    $request->placementStrategy->kind = 'corrupti';
    $request->placementStrategy->name = 'Bill Frami';
    $request->accessToken = 'atque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'eligendi';
    $request->key = 'earum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'sunt';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'placeat';

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
