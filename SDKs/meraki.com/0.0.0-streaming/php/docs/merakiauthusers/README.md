# merakiAuthUsers

### Available Operations

* [getNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash or RADIUS user
* [getNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the splash or RADIUS users configured under Meraki Authentication for a network

## getNetworkMerakiAuthUser

Return the Meraki Auth splash or RADIUS user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUserRequest();
    $request->merakiAuthUserId = 'impedit';
    $request->networkId = 'corporis';

    $response = $sdk->merakiAuthUsers->getNetworkMerakiAuthUser($request);

    if ($response->getNetworkMerakiAuthUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkMerakiAuthUsers

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkMerakiAuthUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkMerakiAuthUsersRequest();
    $request->networkId = 'veniam';

    $response = $sdk->merakiAuthUsers->getNetworkMerakiAuthUsers($request);

    if ($response->getNetworkMerakiAuthUsers200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
