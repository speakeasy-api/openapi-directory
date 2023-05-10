<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAEAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAEAssessmentRequest();
    $request->aeAssessmentId = 'corrupti';
    $request->apiVersion = 'provident';
    $request->authorization = 'distinctio';
    $request->employeeId = 'quibusdam';
    $request->employerId = 'unde';

    $response = $sdk->aeAssessment->deleteAEAssessment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->