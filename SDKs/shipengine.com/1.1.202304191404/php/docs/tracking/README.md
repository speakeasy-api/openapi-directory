# tracking

## Overview

[Track packages](https://www.shipengine.com/docs/tracking/) across any of our 20+ supported carrier accounts and create tracking events to keep your customers up-to-date. Easily integrate real-time tracking information for shipments into your app, email, or SMS.


Learn how to use ShipEngine to track any package with a carrier and a tracking number
<https://www.shipengine.com/docs/tracking/>
### Available Operations

* [getTrackingLog](#gettrackinglog) - Get Tracking Information
* [startTracking](#starttracking) - Start Tracking a Package
* [stopTracking](#stoptracking) - Stop Tracking a Package

## getTrackingLog

Retrieve package tracking information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrackingLogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrackingLogRequest();
    $request->carrierCode = 'nam';
    $request->trackingNumber = 'eaque';

    $response = $sdk->tracking->getTrackingLog($request);

    if ($response->getTrackingLogResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTracking

Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,
and receive notifications via webhooks whenever the shipping status changes.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTrackingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTrackingRequest();
    $request->carrierCode = 'pariatur';
    $request->trackingNumber = 'nemo';

    $response = $sdk->tracking->startTracking($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTracking

Unsubscribe from tracking updates for a package.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTrackingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTrackingRequest();
    $request->carrierCode = 'voluptatibus';
    $request->trackingNumber = 'perferendis';

    $response = $sdk->tracking->stopTracking($request);

    if ($response->emptyResponseBody !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
