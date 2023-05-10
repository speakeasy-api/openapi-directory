# SDK

## Overview

IP2Location.io IP Geolocation API provides RESTful API to obtain visitors’ geolocation information such as country, region, district, city, latitude & longitude, ZIP code, time zone, ASN, ISP, domain, net speed, IDD code, area code, weather station data, MNC, MCC, mobile brand, elevation, usage type, address type, advertisement category, ASN and proxy data with an IP address.

### Available Operations

* [get](#get) - Geolocate user's location information via IP address

## get

Geolocate user's location information via IP address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLangEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->format = GetFormatEnum::XML;
    $request->ip = '8.8.8.8';
    $request->key = 'unde';
    $request->lang = GetLangEnum::TR;

    $response = $sdk->sdk->get($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
