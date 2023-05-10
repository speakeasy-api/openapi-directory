# manifests

## Overview

manifests


### Available Operations

* [createManifest](#createmanifest) - Create Manifest
* [getManifestById](#getmanifestbyid) - Get Manifest By Id
* [getManifestRequestById](#getmanifestrequestbyid) - Get Manifest Request By Id
* [listManifests](#listmanifests) - List Manifests

## createManifest

Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateManifestByObjectRequestBody();
    $request->carrierId = 'se-28529731';
    $request->excludedLabelIds = [
        'se-28529731',
    ];
    $request->labelIds = [
        'se-28529731',
        'se-28529731',
    ];
    $request->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-09-23T15:00:00.000Z');
    $request->warehouseId = 'se-28529731';

    $response = $sdk->manifests->createManifest($request);

    if ($response->createManifestResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getManifestById

Get Manifest By Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetManifestByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetManifestByIdRequest();
    $request->manifestId = 'se-28529731';

    $response = $sdk->manifests->getManifestById($request);

    if ($response->getManifestByIdResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getManifestRequestById

Get Manifest Request By Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetManifestRequestByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetManifestRequestByIdRequest();
    $request->manifestRequestId = 'se-28529731';

    $response = $sdk->manifests->getManifestRequestById($request);

    if ($response->createManifestResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listManifests

Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListManifestsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListManifestsRequest();
    $request->carrierId = 'se-28529731';
    $request->createdAtEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T10:49:12.847Z');
    $request->createdAtStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T19:15:58.586Z');
    $request->labelIds = [
        'se-28529731',
        'se-28529731',
    ];
    $request->page = 480894;
    $request->pageSize = 118727;
    $request->shipDateEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-13T20:56:04.612Z');
    $request->shipDateStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-04T09:10:06.610Z');
    $request->warehouseId = 'se-28529731';

    $response = $sdk->manifests->listManifests($request);

    if ($response->listManifestsResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
