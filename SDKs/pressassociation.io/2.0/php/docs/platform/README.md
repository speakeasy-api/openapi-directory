# platform

### Available Operations

* [getPlatform](#getplatform) - Platform Detail
* [listPlatformRegions](#listplatformregions) - Platform Region Collection
* [listPlatforms](#listplatforms) - Platform Collection

## getPlatform

Return the content of the selected platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlatformRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPlatformSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlatformRequest();
    $request->platformId = 'quis';

    $requestSecurity = new GetPlatformSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->platform->getPlatform($request, $requestSecurity);

    if ($response->getPlatform200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlatformRegions

Return a list of regions for a platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPlatformRegionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPlatformRegionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPlatformRegionsRequest();
    $request->aliases = false;
    $request->platformId = 'veritatis';

    $requestSecurity = new ListPlatformRegionsSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->platform->listPlatformRegions($request, $requestSecurity);

    if ($response->listPlatformRegions200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlatforms

Return a list of available platforms.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListPlatformsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPlatformsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPlatformsRequest();
    $request->aliases = false;

    $requestSecurity = new ListPlatformsSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->platform->listPlatforms($request, $requestSecurity);

    if ($response->listPlatforms200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
