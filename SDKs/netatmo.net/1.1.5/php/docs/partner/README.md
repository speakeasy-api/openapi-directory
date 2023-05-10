# partner

## Overview

Partner API specific methods

### Available Operations

* [getmeasure](#getmeasure) - The method getmeasure returns the measurements of a device or a module.

* [partnerdevices](#partnerdevices) - The method partnerdevices returns the list of device_id to which your partner application has access to.

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
    $request->dateBegin = 847252;
    $request->dateEnd = 'vel';
    $request->deviceId = 'error';
    $request->limit = 645894;
    $request->moduleId = 'suscipit';
    $request->optimize = false;
    $request->realTime = false;
    $request->scale = GetmeasureScaleEnum::THREEHOURS;
    $request->type = [
        GetmeasureTypeEnum::DATE_MAX_GUST,
        GetmeasureTypeEnum::CO2,
    ];

    $requestSecurity = new GetmeasureSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partner->getmeasure($request, $requestSecurity);

    if ($response->naMeasureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## partnerdevices

The method partnerdevices returns the list of device_id to which your partner application has access to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PartnerdevicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PartnerdevicesSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partner->partnerdevices($requestSecurity);

    if ($response->naPartnerDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
