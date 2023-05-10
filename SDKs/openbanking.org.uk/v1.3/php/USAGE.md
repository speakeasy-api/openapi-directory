<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAtmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAtmsRequest();
    $request->ifModifiedSince = 'corrupti';
    $request->ifNoneMatch = 'provident';

    $response = $sdk->atm->getAtms($request);

    if ($response->getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->