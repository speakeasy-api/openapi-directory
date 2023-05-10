# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [files](docs/files/README.md)

* [visionFilesAnnotate](docs/files/README.md#visionfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionFilesAsyncBatchAnnotate](docs/files/README.md#visionfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### [images](docs/images/README.md)

* [visionImagesAnnotate](docs/images/README.md#visionimagesannotate) - Run image detection and annotation for a batch of images.
* [visionImagesAsyncBatchAnnotate](docs/images/README.md#visionimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### [projects](docs/projects/README.md)

* [visionProjectsLocationsFilesAnnotate](docs/projects/README.md#visionprojectslocationsfilesannotate) - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* [visionProjectsLocationsFilesAsyncBatchAnnotate](docs/projects/README.md#visionprojectslocationsfilesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* [visionProjectsLocationsImagesAnnotate](docs/projects/README.md#visionprojectslocationsimagesannotate) - Run image detection and annotation for a batch of images.
* [visionProjectsLocationsImagesAsyncBatchAnnotate](docs/projects/README.md#visionprojectslocationsimagesasyncbatchannotate) - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
