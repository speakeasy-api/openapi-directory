# lldpCdp

### Available Operations

* [getDeviceLldpCdp](#getdevicelldpcdp) - List LLDP and CDP information for a device

## getDeviceLldpCdp

List LLDP and CDP information for a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceLldpCdpRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceLldpCdpRequest();
    $request->serial = 'voluptatem';

    $response = $sdk->lldpCdp->getDeviceLldpCdp($request);

    if ($response->getDeviceLldpCdp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
