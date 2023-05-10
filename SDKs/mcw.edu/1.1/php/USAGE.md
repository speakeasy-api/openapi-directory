<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAffectedGenomicModelsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAffectedGenomicModelsUsingGETRequest();
    $request->taxonId = 'corrupti';

    $response = $sdk->agr->getAffectedGenomicModelsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->