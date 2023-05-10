<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CrawlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CrawlRequest();
    $request->query = 'corrupti';

    $response = $sdk->crawl($request);

    if ($response->crawl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->