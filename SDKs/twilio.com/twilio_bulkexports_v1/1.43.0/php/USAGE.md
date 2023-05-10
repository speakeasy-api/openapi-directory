<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobCreateExportCustomJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExportCustomJobSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExportCustomJobRequest();
    $request->requestBody = new CreateExportCustomJobCreateExportCustomJobRequest();
    $request->requestBody->email = 'Larue_Rau85@yahoo.com';
    $request->requestBody->endDay = 'corrupti';
    $request->requestBody->friendlyName = 'illum';
    $request->requestBody->startDay = 'vel';
    $request->requestBody->webhookMethod = 'error';
    $request->requestBody->webhookUrl = 'deserunt';
    $request->resourceType = 'suscipit';

    $requestSecurity = new CreateExportCustomJobSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createExportCustomJob($request, $requestSecurity);

    if ($response->bulkexportsV1ExportExportCustomJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->