<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateActionRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateActionRetrieveRequest();
    $request->certificateId = 'corrupti';

    $response = $sdk->v1->certificateActionRetrieve($request);

    if ($response->arrayOfCertificateAction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->