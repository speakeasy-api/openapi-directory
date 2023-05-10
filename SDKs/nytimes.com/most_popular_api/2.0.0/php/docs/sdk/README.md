# SDK

## Overview

Get lists of NYT Articles based on shares, emails, and views.

<http://developer.nytimes.com/>
### Available Operations

* [getMostemailedSectionTimePeriodJson](#getmostemailedsectiontimeperiodjson) - Most Emailed by Section & Time Period
* [getMostsharedSectionTimePeriodJson](#getmostsharedsectiontimeperiodjson) - Most Shared by Section & Time Period
* [getMostviewedSectionTimePeriodJson](#getmostviewedsectiontimeperiodjson) - Most Viewed by Section & Time Period

## getMostemailedSectionTimePeriodJson

Most Emailed by Section & Time Period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMostemailedSectionTimePeriodJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETMostemailedSectionTimePeriodJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMostemailedSectionTimePeriodJsonRequest();
    $request->section = SectionEnum::T_MAGAZINE;
    $request->timePeriod = TimePeriodEnum::THIRTY;

    $requestSecurity = new GETMostemailedSectionTimePeriodJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getMostemailedSectionTimePeriodJson($request, $requestSecurity);

    if ($response->getMostemailedSectionTimePeriodJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMostsharedSectionTimePeriodJson

Most Shared by Section & Time Period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMostsharedSectionTimePeriodJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETMostsharedSectionTimePeriodJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMostsharedSectionTimePeriodJsonRequest();
    $request->section = SectionEnum::SCIENCE;
    $request->timePeriod = TimePeriodEnum::THIRTY;

    $requestSecurity = new GETMostsharedSectionTimePeriodJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getMostsharedSectionTimePeriodJson($request, $requestSecurity);

    if ($response->getMostsharedSectionTimePeriodJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMostviewedSectionTimePeriodJson

Most Viewed by Section & Time Period

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETMostviewedSectionTimePeriodJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimePeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETMostviewedSectionTimePeriodJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETMostviewedSectionTimePeriodJsonRequest();
    $request->section = SectionEnum::PUBLIC_EDITOR;
    $request->timePeriod = TimePeriodEnum::THIRTY;

    $requestSecurity = new GETMostviewedSectionTimePeriodJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getMostviewedSectionTimePeriodJson($request, $requestSecurity);

    if ($response->getMostviewedSectionTimePeriodJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
