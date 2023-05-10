# health

### Available Operations

* [getUtilityV1HealthHeartbeat](#getutilityv1healthheartbeat)
* [getUtilityV1HealthThreadinfo](#getutilityv1healththreadinfo)

## getUtilityV1HealthHeartbeat

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->health->getUtilityV1HealthHeartbeat();

    if ($response->getUtilityV1HealthHeartbeat200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUtilityV1HealthThreadinfo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->health->getUtilityV1HealthThreadinfo();

    if ($response->threadPoolInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
