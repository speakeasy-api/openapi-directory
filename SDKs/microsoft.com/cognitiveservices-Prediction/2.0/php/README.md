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

* [predictImage](docs/imagepredictionapi/README.md#predictimage) - Predict an image and saves the result
* [predictImageUrlWithNoStoreForm](docs/imagepredictionapi/README.md#predictimageurlwithnostoreform) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreJson](docs/imagepredictionapi/README.md#predictimageurlwithnostorejson) - Predict an image url without saving the result
* [predictImageUrlWithNoStoreRaw](docs/imagepredictionapi/README.md#predictimageurlwithnostoreraw) - Predict an image url without saving the result
* [predictImageUrlForm](docs/imagepredictionapi/README.md#predictimageurlform) - Predict an image url and saves the result
* [predictImageUrlJson](docs/imagepredictionapi/README.md#predictimageurljson) - Predict an image url and saves the result
* [predictImageUrlRaw](docs/imagepredictionapi/README.md#predictimageurlraw) - Predict an image url and saves the result
* [predictImageWithNoStore](docs/imagepredictionapi/README.md#predictimagewithnostore) - Predict an image without saving the result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
