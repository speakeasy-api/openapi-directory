<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetASNLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetASNLookupRequest();
    $request->asn = '15169';
    $request->format = 'JSON';
    $request->isList = 'no';
    $request->key = '2517bc4fc3f790e8f09bc808bb63b899';

    $response = $sdk->getASNLookup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->