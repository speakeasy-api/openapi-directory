<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->query = 'corrupti';

    $response = $sdk->aiAlphaSearchMessages($request);

    if ($response->aiAlphaSearchMessages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->