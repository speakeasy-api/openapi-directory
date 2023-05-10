<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatorRolesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatorRolesListRequest();
    $request->page = 548814;
    $request->pageSize = 592845;

    $response = $sdk->creatorRoles->creatorRolesList($request);

    if ($response->creatorRolesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->