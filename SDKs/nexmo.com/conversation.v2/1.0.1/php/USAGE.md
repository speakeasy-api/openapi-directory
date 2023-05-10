<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsersRequest();
    $request->cursor = 'corrupti';
    $request->order = OrderEnum::DESC;
    $request->pageSize = 715190;

    $response = $sdk->getUsers($request);

    if ($response->getUsers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->