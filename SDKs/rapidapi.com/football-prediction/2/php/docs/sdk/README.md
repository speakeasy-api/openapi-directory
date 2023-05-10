# SDK

## Overview

The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models.

### Available Operations

* [getApiV2ListFederations](#getapiv2listfederations) - Returns an array of all the available federations.
* [getApiV2ListMarkets](#getapiv2listmarkets) - Returns an array of all the supported prediction markets
* [getApiV2PerformanceStats](#getapiv2performancestats) - Returns predictions accuracy in the last 1, 7, 14, 30 days.
* [getApiV2Predictions](#getapiv2predictions) - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
* [getApiV2PredictionsId](#getapiv2predictionsid) - Returns all predictions available for a match id.

## getApiV2ListFederations

Returns an array of all the available federations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ListFederationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2ListFederationsRequest();
    $request->xRapidApiKey = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->sdk->getApiV2ListFederations($request);

    if ($response->getApiV2ListFederations200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2ListMarkets

Returns an array of all the supported prediction markets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2ListMarketsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2ListMarketsRequest();
    $request->xRapidApiKey = 'cb739205-9293-496f-aa75-96eb10faaa23';

    $response = $sdk->sdk->getApiV2ListMarkets($request);

    if ($response->getApiV2ListMarkets200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2PerformanceStats

Returns predictions accuracy in the last 1, 7, 14, 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PerformanceStatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2PerformanceStatsRequest();
    $request->xRapidApiKey = '52c59559-07af-4f1a-ba2f-a9467739251a';

    $response = $sdk->sdk->getApiV2PerformanceStats($request);

    if ($response->getApiV2PerformanceStats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2Predictions

This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PredictionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2PredictionsRequest();
    $request->xRapidApiKey = 'a52c3f5a-d019-4da1-bfe7-8f097b0074f1';

    $response = $sdk->sdk->getApiV2Predictions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV2PredictionsId

Returns all predictions available for a match id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV2PredictionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV2PredictionsIdRequest();
    $request->id = 359444;

    $response = $sdk->sdk->getApiV2PredictionsId($request);

    if ($response->getApiV2PredictionsId200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
