# contributors

### Available Operations

* [getContributor](#getcontributor) - Get details about a single contributor
* [getContributorCollectionItems](#getcontributorcollectionitems) - Get the items in contributors' collections
* [getContributorCollections](#getcontributorcollections) - Get details about contributors' collections
* [getContributorCollectionsList](#getcontributorcollectionslist) - List contributors' collections
* [getContributorList](#getcontributorlist) - Get details about multiple contributors

## getContributor

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributorRequest();
    $request->contributorId = 'saepe';

    $requestSecurity = new GetContributorSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contributors->getContributor($request, $requestSecurity);

    if ($response->contributorProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributorCollectionItems

This endpoint lists the IDs of items in a contributor's collection and the date that each was added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionItemsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionItemsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributorCollectionItemsRequest();
    $request->contributorId = 'eius';
    $request->id = '203ce5e6-a95d-48a0-9446-ce2af7a73cf3';
    $request->page = 730856;
    $request->perPage = 880298;
    $request->sort = GetContributorCollectionItemsSortEnum::NEWEST;

    $requestSecurity = new GetContributorCollectionItemsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contributors->getContributorCollectionItems($request, $requestSecurity);

    if ($response->collectionItemDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributorCollections

This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributorCollectionsRequest();
    $request->contributorId = 'enim';
    $request->id = '3f870b32-6b5a-4734-a9cd-b1a8422bb679';

    $requestSecurity = new GetContributorCollectionsSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contributors->getContributorCollections($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributorCollectionsList

This endpoint lists collections based on contributor ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionsListSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorCollectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributorCollectionsListRequest();
    $request->contributorId = 'temporibus';
    $request->sort = GetContributorCollectionsListSortEnum::NEWEST;

    $requestSecurity = new GetContributorCollectionsListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contributors->getContributorCollectionsList($request, $requestSecurity);

    if ($response->collectionDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributorList

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributorListRequest();
    $request->id = [
        'fugit',
    ];

    $requestSecurity = new GetContributorListSecurity();
    $requestSecurity->basic->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->basic->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->contributors->getContributorList($request, $requestSecurity);

    if ($response->contributorProfileDataList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
