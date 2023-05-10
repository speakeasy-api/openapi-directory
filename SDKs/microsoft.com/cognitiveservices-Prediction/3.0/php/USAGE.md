<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ClassifyImageRequestBodyImageData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClassifyImageRequest();
    $request->requestBody = new ClassifyImageRequestBody();
    $request->requestBody->imageData = new ClassifyImageRequestBodyImageData();
    $request->requestBody->imageData->content = 'corrupti';
    $request->requestBody->imageData->imageData = 'provident';
    $request->application = 'distinctio';
    $request->projectId = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';
    $request->publishedName = 'repellendus';

    $response = $sdk->imagePredictionApi->classifyImage($request);

    if ($response->imagePrediction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->