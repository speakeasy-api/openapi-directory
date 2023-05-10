# projects

### Available Operations

* [visionProjectsLocationsFilesAnnotate](#visionprojectslocationsfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionProjectsLocationsFilesAsyncBatchAnnotate](#visionprojectslocationsfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* [visionProjectsLocationsImagesAnnotate](#visionprojectslocationsimagesannotate) - Run image detection and annotation for a batch of images.
* [visionProjectsLocationsImagesAsyncBatchAnnotate](#visionprojectslocationsimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

## visionProjectsLocationsFilesAnnotate

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAnnotateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionProjectsLocationsFilesAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest();
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest->parent = 'excepturi';
    $request->googleCloudVisionV1p2beta1BatchAnnotateFilesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateFileRequest(),
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new VisionProjectsLocationsFilesAnnotateSecurity();
    $requestSecurity->option1 = new VisionProjectsLocationsFilesAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->visionProjectsLocationsFilesAnnotate($request, $requestSecurity);

    if ($response->googleCloudVisionV1p2beta1BatchAnnotateFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## visionProjectsLocationsFilesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAsyncBatchAnnotateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionProjectsLocationsFilesAsyncBatchAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest = new GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest->parent = 'in';
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest(),
        new GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest(),
    ];
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity();
    $requestSecurity->option1 = new VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->visionProjectsLocationsFilesAsyncBatchAnnotate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## visionProjectsLocationsImagesAnnotate

Run image detection and annotation for a batch of images.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAnnotateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionProjectsLocationsImagesAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudVisionV1p2beta1BatchAnnotateImagesRequest = new GoogleCloudVisionV1p2beta1BatchAnnotateImagesRequest();
    $request->googleCloudVisionV1p2beta1BatchAnnotateImagesRequest->parent = 'dolorem';
    $request->googleCloudVisionV1p2beta1BatchAnnotateImagesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
    ];
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'omnis';
    $request->key = 'nemo';
    $request->oauthToken = 'minima';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new VisionProjectsLocationsImagesAnnotateSecurity();
    $requestSecurity->option1 = new VisionProjectsLocationsImagesAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->visionProjectsLocationsImagesAnnotate($request, $requestSecurity);

    if ($response->googleCloudVisionV1p2beta1BatchAnnotateImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## visionProjectsLocationsImagesAsyncBatchAnnotate

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAsyncBatchAnnotateRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VisionProjectsLocationsImagesAsyncBatchAnnotateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest = new GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig = new GoogleCloudVisionV1p2beta1OutputConfig();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig->batchSize = 958950;
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig->gcsDestination = new GoogleCloudVisionV1p2beta1GcsDestination();
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->outputConfig->gcsDestination->uri = 'http://prize-cornmeal.name';
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->parent = 'consequuntur';
    $request->googleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest->requests = [
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
        new GoogleCloudVisionV1p2beta1AnnotateImageRequest(),
    ];
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->parent = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity();
    $requestSecurity->option1 = new VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->visionProjectsLocationsImagesAsyncBatchAnnotate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
