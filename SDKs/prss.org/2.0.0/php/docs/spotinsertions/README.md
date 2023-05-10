# spotInsertions

## Overview

Spot insertions define spots to play when a cue is received.

### Available Operations

* [deleteApiV2SpotinsertionsId](#deleteapiv2spotinsertionsid) - Deletes the spot insertion with the given ID.
* [getApiV2Spotinsertions](#getapiv2spotinsertions) - Returns the spot insertions matching the query parameters.
* [getApiV2SpotinsertionsId](#getapiv2spotinsertionsid) - Returns the spot insertion matching the given ID.
* [postApiV2Spotinsertions](#postapiv2spotinsertions) - Creates a new spot insertion.

## deleteApiV2SpotinsertionsId

Deletes the spot insertion with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2SpotinsertionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2SpotinsertionsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV2SpotinsertionsIdRequest();
    $request->id = 210382;

    $requestSecurity = new DeleteApiV2SpotinsertionsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spotInsertions->deleteApiV2SpotinsertionsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2Spotinsertions

Returns the spot insertions matching the query parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotinsertionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotinsertionsOrderByIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotinsertionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SpotinsertionsRequest();
    $request->orderById = GetApiV2SpotinsertionsOrderByIDEnum::ASC;
    $request->pageSize = 128926;
    $request->pageStart = 750686;

    $requestSecurity = new GetApiV2SpotinsertionsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spotInsertions->getApiV2Spotinsertions($request, $requestSecurity);

    if ($response->spotInsertions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2SpotinsertionsId

Returns the spot insertion matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotinsertionsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotinsertionsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SpotinsertionsIdRequest();
    $request->id = 315428;

    $requestSecurity = new GetApiV2SpotinsertionsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spotInsertions->getApiV2SpotinsertionsId($request, $requestSecurity);

    if ($response->spotInsertion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV2Spotinsertions

Creates a new spot insertion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SpotInsertionInput;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2SpotinsertionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpotInsertionInput();
    $request->broadcastServiceId = 607831;
    $request->cue = 'S:000_SPOT';
    $request->duration = 363711;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2020-01-31');
    $request->programId = 325047;
    $request->spots = [
        38425,
        438601,
        634274,
    ];
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2020-01-31');

    $requestSecurity = new PostApiV2SpotinsertionsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spotInsertions->postApiV2Spotinsertions($request, $requestSecurity);

    if ($response->spotInsertion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
