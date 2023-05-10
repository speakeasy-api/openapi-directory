# spots

## Overview

A spot is an audio file that is to be inserted into streams using cues.

### Available Operations

* [deleteApiV2SpotsId](#deleteapiv2spotsid) - Deletes the spot with the given ID.
* [getApiV2Spots](#getapiv2spots) - Returns the spots matching the query parameters.
* [getApiV2SpotsId](#getapiv2spotsid) - Returns the spot matching the given ID.
* [postApiV2Spots](#postapiv2spots) - Creates a new spot.

## deleteApiV2SpotsId

Deletes the spot with the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2SpotsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiV2SpotsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiV2SpotsIdRequest();
    $request->id = 988374;

    $requestSecurity = new DeleteApiV2SpotsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spots->deleteApiV2SpotsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2Spots

Returns the spots matching the query parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotsOrderByIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SpotsRequest();
    $request->orderById = GetApiV2SpotsOrderByIDEnum::DESC;
    $request->pageSize = 102044;
    $request->pageStart = 652790;

    $requestSecurity = new GetApiV2SpotsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spots->getApiV2Spots($request, $requestSecurity);

    if ($response->spots !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2SpotsId

Returns the spot matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2SpotsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2SpotsIdRequest();
    $request->id = 208876;

    $requestSecurity = new GetApiV2SpotsIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spots->getApiV2SpotsId($request, $requestSecurity);

    if ($response->spot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV2Spots

Creates a new spot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2SpotsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV2SpotsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV2SpotsRequestBody();
    $request->cdDriveUri = 'culpa';
    $request->name = 'Jaime O'Hara';
    $request->notes = 'commodi';

    $requestSecurity = new PostApiV2SpotsSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spots->postApiV2Spots($request, $requestSecurity);

    if ($response->spot !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
