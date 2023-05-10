<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBenefitsDocumentUploadDownloadRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $requestSecurity = new GetBenefitsDocumentUploadDownloadSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->vbaDocuments->getBenefitsDocumentUploadDownload($request, $requestSecurity);

    if ($response->getBenefitsDocumentUploadDownload200ApplicationZipBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->