# public

## Overview

Public stations specific methods

### Available Operations

* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [getpublicdata](#getpublicdata) - Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

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
    $request->dateBegin = 963663;
    $request->dateEnd = 'tempora';
    $request->deviceId = 'suscipit';
    $request->limit = 477665;
    $request->moduleId = 'minus';
    $request->optimize = false;
    $request->realTime = false;
    $request->scale = GetmeasureScaleEnum::ONEWEEK;
    $request->type = [
        GetmeasureTypeEnum::DATE_MAX_TEMP,
        GetmeasureTypeEnum::MAX_HUM,
        GetmeasureTypeEnum::MIN_TEMP,
    ];

    $requestSecurity = new GetmeasureSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->public->getmeasure($request, $requestSecurity);

    if ($response->naMeasureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getpublicdata

Retrieves publicly shared weather data from Outdoor Modules within a predefined area.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetpublicdataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetpublicdataRequiredDataEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetpublicdataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetpublicdataRequest();
    $request->filter = false;
    $request->latNe = 925597;
    $request->latSw = 836079;
    $request->lonNe = 71036;
    $request->lonSw = 337396;
    $request->requiredData = [
        GetpublicdataRequiredDataEnum::WIND,
    ];

    $requestSecurity = new GetpublicdataSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->public->getpublicdata($request, $requestSecurity);

    if ($response->naPublicDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
