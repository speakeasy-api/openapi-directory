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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [imagePredictionApi](docs/imagepredictionapi/README.md)

* [classifyImage](docs/imagepredictionapi/README.md#classifyimage) - Classify an image and saves the result.
* [classifyImageUrlWithNoStoreForm](docs/imagepredictionapi/README.md#classifyimageurlwithnostoreform) - Classify an image url without saving the result.
* [classifyImageUrlWithNoStoreJson](docs/imagepredictionapi/README.md#classifyimageurlwithnostorejson) - Classify an image url without saving the result.
* [classifyImageUrlWithNoStoreRaw](docs/imagepredictionapi/README.md#classifyimageurlwithnostoreraw) - Classify an image url without saving the result.
* [classifyImageUrlForm](docs/imagepredictionapi/README.md#classifyimageurlform) - Classify an image url and saves the result.
* [classifyImageUrlJson](docs/imagepredictionapi/README.md#classifyimageurljson) - Classify an image url and saves the result.
* [classifyImageUrlRaw](docs/imagepredictionapi/README.md#classifyimageurlraw) - Classify an image url and saves the result.
* [classifyImageWithNoStore](docs/imagepredictionapi/README.md#classifyimagewithnostore) - Classify an image without saving the result.
* [detectImage](docs/imagepredictionapi/README.md#detectimage) - Detect objects in an image and saves the result.
* [detectImageUrlWithNoStoreForm](docs/imagepredictionapi/README.md#detectimageurlwithnostoreform) - Detect objects in an image url without saving the result.
* [detectImageUrlWithNoStoreJson](docs/imagepredictionapi/README.md#detectimageurlwithnostorejson) - Detect objects in an image url without saving the result.
* [detectImageUrlWithNoStoreRaw](docs/imagepredictionapi/README.md#detectimageurlwithnostoreraw) - Detect objects in an image url without saving the result.
* [detectImageUrlForm](docs/imagepredictionapi/README.md#detectimageurlform) - Detect objects in an image url and saves the result.
* [detectImageUrlJson](docs/imagepredictionapi/README.md#detectimageurljson) - Detect objects in an image url and saves the result.
* [detectImageUrlRaw](docs/imagepredictionapi/README.md#detectimageurlraw) - Detect objects in an image url and saves the result.
* [detectImageWithNoStore](docs/imagepredictionapi/README.md#detectimagewithnostore) - Detect objects in an image without saving the result.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
