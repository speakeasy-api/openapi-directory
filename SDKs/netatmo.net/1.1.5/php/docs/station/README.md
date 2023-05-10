# station

## Overview

Weather station specific methods

### Available Operations

* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getstationsdata](#getstationsdata) - The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

## getmeasure

The method getmeasure returns the measurements of a device or a module.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureScaleEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetmeasureSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetmeasureRequest();
    $request->dateBegin = 20218;
    $request->dateEnd = 'ipsam';
    $request->deviceId = 'repellendus';
    $request->limit = 957156;
    $request->moduleId = 'quo';
    $request->optimize = false;
    $request->realTime = false;
    $request->scale = GetmeasureScaleEnum::MAX;
    $request->type = [
        GetmeasureTypeEnum::DATE_MAX_CO2,
        GetmeasureTypeEnum::SUM_BOILER_OFF,
        GetmeasureTypeEnum::DATE_MAX_TEMP,
        GetmeasureTypeEnum::MAX_NOISE,
    ];

    $requestSecurity = new GetmeasureSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->station->getmeasure($request, $requestSecurity);

    if ($response->naMeasureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getstationsdata

The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetstationsdataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetstationsdataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetstationsdataRequest();
    $request->deviceId = 'quod';
    $request->getFavorites = false;

    $requestSecurity = new GetstationsdataSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->station->getstationsdata($request, $requestSecurity);

    if ($response->naStationDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
