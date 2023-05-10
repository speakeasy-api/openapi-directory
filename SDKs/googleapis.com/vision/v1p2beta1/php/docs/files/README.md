# files

### Available Operations

* [visionFilesAnnotate](#visionfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionFilesAsyncBatchAnnotate](#visionfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

## visionFilesAnnotate

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

### Example Usage

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest();
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest->parent = 'magnam';
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
    ];
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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

## visionFilesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAsyncBatchAnnotateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudVisionV1p2beta1GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAsyncBatchAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAsyncBatchAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionFilesAsyncBatchAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionFilesAsyncBatchAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest->parent = 'nisi';
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest(),
    ];
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new VisionFilesAsyncBatchAnnotateSecurity();
    $requestSecurity->option1 = new VisionFilesAsyncBatchAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->files->visionFilesAsyncBatchAnnotate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
