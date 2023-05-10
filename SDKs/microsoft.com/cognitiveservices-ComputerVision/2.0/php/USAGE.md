<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageUrl;
use \OpenAPI\OpenAPI\Models\Operations\AnalyzeImageDetailsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\VisualFeaturesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyzeImageRequest();
    $request->imageUrl = new ImageUrl();
    $request->imageUrl->url = 'corrupti';
    $request->details = [
        AnalyzeImageDetailsEnum::LANDMARKS,
        AnalyzeImageDetailsEnum::LANDMARKS,
        AnalyzeImageDetailsEnum::LANDMARKS,
    ];
    $request->language = ServiceLanguageEnum::ZH;
    $request->visualFeatures = [
        VisualFeaturesEnum::OBJECTS,
        VisualFeaturesEnum::CATEGORIES,
        VisualFeaturesEnum::TAGS,
    ];

    $response = $sdk->analyzeImage($request);

    if ($response->imageAnalysis !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->