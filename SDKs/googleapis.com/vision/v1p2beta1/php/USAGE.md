<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1AnnotateFileRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1Feature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1ImageContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1CropHintsParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1LatLongRect;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1ProductSearchParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1Vertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1TextDetectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1WebDetectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionFilesAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest();
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest->parent = 'provident';
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
    ];
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new VisionFilesAnnotateSecurity();
    $requestSecurity->option1 = new VisionFilesAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->visionFilesAnnotate($request, $requestSecurity);

    if ($response->googleCloudVisionV1p2beta1BatchAnnotateFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->