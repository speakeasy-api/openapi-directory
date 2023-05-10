# programs

## Overview

Program information including searching for existing programs or fetching a specific program. A program is a collection of episodes that are delivered by ContentDepot as a live stream or pre-recorded files.

### Available Operations

* [getApiV2ProgramsSearch](#getapiv2programssearch) - Optimized free-text search for programs using various filters.
* [getApiV2ProgramsId](#getapiv2programsid) - Returns the program matching the given ID.

## getApiV2ProgramsSearch

Optimized free-text search for programs using various filters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ProgramsSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ProgramsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2ProgramsSearchRequest();
    $request->keywords = 'sed';
    $request->pageSize = 612096;
    $request->pageStart = 222321;

    $requestSecurity = new GetApiV2ProgramsSearchSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->programs->getApiV2ProgramsSearch($request, $requestSecurity);

    if ($response->programs !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2ProgramsId

Returns the program matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ProgramsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ProgramsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2ProgramsIdRequest();
    $request->id = 616934;

    $requestSecurity = new GetApiV2ProgramsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->programs->getApiV2ProgramsId($request, $requestSecurity);

    if ($response->program !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
