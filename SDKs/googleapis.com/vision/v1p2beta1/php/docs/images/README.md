# images

### Available Operations

* [visionImagesAnnotate](#visionimagesannotate) - Run image detection and annotation for a batch of images.
* [visionImagesAsyncBatchAnnotate](#visionimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

## visionImagesAnnotate

Run image detection and annotation for a batch of images.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1AnnotateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1Feature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1ImageSource;
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionImagesAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVisionV1p2beta1BatchAnnotateImagesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest();
    $request->googleCloudVisionV1p2beta1BatchAnnotateImagesRequest->parent = 'odit';
    $request->googleCloudVisionV1p2beta1BatchAnnotateImagesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->key = 'quod';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new VisionImagesAnnotateSecurity();
    $requestSecurity->option1 = new VisionImagesAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->visionImagesAnnotate($request, $requestSecurity);

    if ($response->googleCloudVisionV1p2beta1BatchAnnotateImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## visionImagesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAsyncBatchAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1AnnotateImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1Feature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1FeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1ImageSource;
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAsyncBatchAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAsyncBatchAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionImagesAsyncBatchAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionImagesAsyncBatchAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest = new GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig = new GoogleCloudVisionV1p2beta1OutputConfig();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig->batchSize = 720633;
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig->gcsDestination = new GoogleCloudVisionV1p2beta1GcsDestination();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig->gcsDestination->uri = 'https://oily-cephalopod.name';
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->parent = 'hic';
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
    ];
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new VisionImagesAsyncBatchAnnotateSecurity();
    $requestSecurity->option1 = new VisionImagesAsyncBatchAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->images->visionImagesAsyncBatchAnnotate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
