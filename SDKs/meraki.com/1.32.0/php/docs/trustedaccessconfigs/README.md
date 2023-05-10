# trustedAccessConfigs

### Available Operations

* [getNetworkSmTrustedAccessConfigs](#getnetworksmtrustedaccessconfigs) - List Trusted Access Configs

## getNetworkSmTrustedAccessConfigs

List Trusted Access Configs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmTrustedAccessConfigsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSmTrustedAccessConfigsRequest();
    $request->endingBefore = 'accusamus';
    $request->networkId = 'tempore';
    $request->perPage = 315591;
    $request->startingAfter = 'doloribus';

    $response = $sdk->trustedAccessConfigs->getNetworkSmTrustedAccessConfigs($request);

    if ($response->getNetworkSmTrustedAccessConfigs200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
