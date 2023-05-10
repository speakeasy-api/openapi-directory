<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PredictImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PredictImageRequest();
    $request->predictionKey = 'corrupti';
    $request->requestBody = new PredictImageRequestBody();
    $request->requestBody->imageData = new PredictImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'provident';
    $request->requestBody->imageData->imageData = 'distinctio';
    $request->application = 'quibusdam';
    $request->iterationId = '9d8d69a6-74e0-4f46-bcc8-796ed151a05d';
    $request->projectId = 'fc2ddf7c-c78c-4a1b-a928-fc816742cb73';

    $response = $sdk->imagePredictionApi->predictImage($request);

    if ($response->imagePredictionResultModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->