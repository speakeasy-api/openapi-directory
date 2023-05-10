# SDK

## Overview

The missing minimalistic JSON real-time UV Index API for awesome Developers, Innovators and Smart Home Enthusiasts

### Available Operations

* [getForecast](#getforecast) - Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.
* [getProtection](#getprotection) - Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.
* [getUv](#getuv) - Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

## getForecast

Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetForecastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetForecastRequest();
    $request->alt = 1050;
    $request->dt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-02-04T04:39:06.467Z');
    $request->lat = 78.67;
    $request->lng = 115.67;
    $request->ozone = 304.5;
    $request->xAccessToken = 'provident';

    $response = $sdk->sdk->getForecast($request);

    if ($response->forecastResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProtection

Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProtectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProtectionRequest();
    $request->alt = 1050;
    $request->from = 2.5;
    $request->lat = 78.67;
    $request->lng = 115.67;
    $request->ozone = 304.5;
    $request->to = 3.6;
    $request->xAccessToken = 'distinctio';

    $response = $sdk->sdk->getProtection($request);

    if ($response->protectionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUv

Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUvRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUvRequest();
    $request->alt = 1050;
    $request->dt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-02-04T04:39:06.467Z');
    $request->lat = 78.67;
    $request->lng = 115.67;
    $request->ozone = 304.5;
    $request->xAccessToken = 'quibusdam';

    $response = $sdk->sdk->getUv($request);

    if ($response->uvIndexResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
