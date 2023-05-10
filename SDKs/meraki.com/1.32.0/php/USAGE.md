<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSwitchAccessControlListsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSwitchAccessControlListsRequest();
    $request->networkId = 'corrupti';

    $response = $sdk->accessControlLists->getNetworkSwitchAccessControlLists($request);

    if ($response->getNetworkSwitchAccessControlLists200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->