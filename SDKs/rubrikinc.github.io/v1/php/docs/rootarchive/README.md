# rootArchive

## Overview

Archival.

### Available Operations

* [disableArchivalLocation](#disablearchivallocation) - Disable location for archival and modification operations
* [enableArchivalLocation](#enablearchivallocation) - Enable archival location for archival and modification operations
* [getAwsAccountId](#getawsaccountid) - Get the AWS account ID of an AWS S3 archival location
* [refreshArchivalLocationDataSources](#refresharchivallocationdatasources) - Refresh archive information for a list of data sources

## disableArchivalLocation

Disables archiving and any changes to the data for the specified archival location. This operation disables snapshot upload, snapshot expiration, consolidation, and garbage collection operations on the archival location.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DisableArchivalLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableArchivalLocationRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->rootArchive->disableArchivalLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableArchivalLocation

Enable archiving and other operations that were previously disabled on the specified archival location.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\EnableArchivalLocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableArchivalLocationRequest();
    $request->id = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $response = $sdk->rootArchive->enableArchivalLocation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAwsAccountId

Get the AWS account ID of an AWS S3 archival location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetAwsAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAwsAccountIdRequest();
    $request->id = '52c59559-07af-4f1a-ba2f-a9467739251a';

    $response = $sdk->rootArchive->getAwsAccountId($request);

    if ($response->stringResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshArchivalLocationDataSources

Update the current Rubrik CDM cluster with information about the changes made to a list of data sources in an archival location by the Rubrik CDM cluster that owns the archival location.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\RefreshArchivalLocationDataSourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReaderRefreshDataSourcesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshArchivalLocationDataSourcesRequest();
    $request->readerRefreshDataSourcesRequest = new ReaderRefreshDataSourcesRequest();
    $request->readerRefreshDataSourcesRequest->archivalDataSourceIds = [
        'enim',
        'odit',
        'quo',
    ];
    $request->readerRefreshDataSourcesRequest->localDataSourceIds = [
        'tenetur',
    ];
    $request->locationId = 'ipsam';

    $response = $sdk->rootArchive->refreshArchivalLocationDataSources($request);

    if ($response->asyncRequestStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
