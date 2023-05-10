# outlets

### Available Operations

* [outletsGetAllOutlets](#outletsgetalloutlets) - List all ticket outlets
* [outletsGetOutletsByGeolocation](#outletsgetoutletsbygeolocation) - List ticket outlets near a specific location

## outletsGetAllOutlets

List all ticket outlets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OutletsGetAllOutletsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OutletsGetAllOutletsRequest();
    $request->devid = 'culpa';
    $request->maxResults = 161309;
    $request->signature = 'repellat';
    $request->token = 'mollitia';

    $response = $sdk->outlets->outletsGetAllOutlets($request);

    if ($response->v3OutletResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## outletsGetOutletsByGeolocation

List ticket outlets near a specific location

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OutletsGetOutletsByGeolocationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OutletsGetOutletsByGeolocationRequest();
    $request->devid = 'occaecati';
    $request->latitude = 2532.91;
    $request->longitude = 4143.69;
    $request->maxDistance = 4663.11;
    $request->maxResults = 474697;
    $request->signature = 'velit';
    $request->token = 'error';

    $response = $sdk->outlets->outletsGetOutletsByGeolocation($request);

    if ($response->v3OutletGeolocationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
