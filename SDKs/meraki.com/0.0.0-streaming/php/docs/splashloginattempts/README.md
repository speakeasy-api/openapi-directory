# splashLoginAttempts

### Available Operations

* [getNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network

## getNetworkSplashLoginAttempts

List the splash login attempts for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSplashLoginAttemptsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSplashLoginAttemptsSsidNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSplashLoginAttemptsRequest();
    $request->loginIdentifier = 'doloremque';
    $request->networkId = 'iure';
    $request->ssidNumber = GetNetworkSplashLoginAttemptsSsidNumberEnum::ZERO;
    $request->timespan = 517612;

    $response = $sdk->splashLoginAttempts->getNetworkSplashLoginAttempts($request);

    if ($response->getNetworkSplashLoginAttempts200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
