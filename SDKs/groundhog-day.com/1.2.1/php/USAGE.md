<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroundhogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroundhogRequest();
    $request->slug = 'corrupti';

    $response = $sdk->groundhogs->groundhog($request);

    if ($response->groundhog200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->