# episodes

## Overview

An episode is a specific instance of a program that will air on a specific date and time.

### Available Operations

* [getApiV2Episodes](#getapiv2episodes) - Gets episodes matching the given criteria.
* [getApiV2EpisodesId](#getapiv2episodesid) - Returns the episode matching the given ID.

## getApiV2Episodes

Gets episodes matching the given criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2EpisodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2EpisodesOrderByIDEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2EpisodesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2EpisodesRequest();
    $request->beginAirDateAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T02:15:00.468Z');
    $request->endAirDateBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-31T22:02:25.322Z');
    $request->id = 140350;
    $request->orderById = GetApiV2EpisodesOrderByIDEnum::DESC;
    $request->pageSize = 870088;
    $request->pageStart = 978619;
    $request->programId = 473608;

    $requestSecurity = new GetApiV2EpisodesSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->episodes->getApiV2Episodes($request, $requestSecurity);

    if ($response->episodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2EpisodesId

Returns the episode matching the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2EpisodesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2EpisodesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2EpisodesIdRequest();
    $request->id = 799159;

    $requestSecurity = new GetApiV2EpisodesIdSecurity();
    $requestSecurity->cdOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->episodes->getApiV2EpisodesId($request, $requestSecurity);

    if ($response->episode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
