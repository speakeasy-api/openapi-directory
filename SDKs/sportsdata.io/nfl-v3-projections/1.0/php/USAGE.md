<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlateOwnershipProjectionsBySlateidRequest;
use \OpenAPI\OpenAPI\Models\Operations\DfsSlateOwnershipProjectionsBySlateidFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfsSlateOwnershipProjectionsBySlateidRequest();
    $request->format = DfsSlateOwnershipProjectionsBySlateidFormatEnum::JSON;
    $request->slateId = 'provident';

    $response = $sdk->dfsSlateOwnershipProjectionsBySlateid($request);

    if ($response->dfsSlateWithOwnershipProjection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->