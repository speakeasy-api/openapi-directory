# healthyhomecoach

## Overview

Healthy Home Coach specific methods

### Available Operations

* [gethomecoachsdata](#gethomecoachsdata) - The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

## gethomecoachsdata

The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GethomecoachsdataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GethomecoachsdataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GethomecoachsdataRequest();
    $request->deviceId = 'corrupti';

    $requestSecurity = new GethomecoachsdataSecurity();
    $requestSecurity->codeOauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->healthyhomecoach->gethomecoachsdata($request, $requestSecurity);

    if ($response->naHealthyHomeCoachDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
