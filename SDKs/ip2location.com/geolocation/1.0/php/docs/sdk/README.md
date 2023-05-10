# SDK

## Overview

IP2Location web service providing a service to do a reverse lookup of an IP address to an ISO3166 country code, region or state, city, latitude and longitude, ZIP/Postal code, time zone, Internet Service Provider (ISP) or company name, domain name, net speed, area code, weather station code, weather station name, mobile country code (MCC), mobile network code (MNC) and carrier brand, elevation, usage type, address type and IAB category. There are also 7 categories of additional add-on response fields supported such as metro, olson time zone, translations and more. Refer to https://www.ip2location.com/web-service/ip2location for further information.

### Available Operations

* [get](#get) - Get geolocation information via IP address

## get

Get geolocation information via IP address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLangEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPackageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->addon = [
        GetAddonEnum::GEOTARGETING,
        GetAddonEnum::GEOTARGETING,
    ];
    $request->format = GetFormatEnum::JSON;
    $request->ip = '8.8.8.8';
    $request->key = 'iure';
    $request->lang = GetLangEnum::ET;
    $request->package = GetPackageEnum::WS23;

    $response = $sdk->sdk->get($request);

    if ($response->get200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
