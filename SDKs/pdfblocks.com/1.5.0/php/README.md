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
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBodyFile;
use \OpenAPI\OpenAPI\Models\Operations\AddImageWatermarkV1RequestBodyImage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddImageWatermarkV1RequestBody();
    $request->file = new AddImageWatermarkV1RequestBodyFile();
    $request->file->content = 'corrupti';
    $request->file->file = 'provident';
    $request->image = new AddImageWatermarkV1RequestBodyImage();
    $request->image->content = 'distinctio';
    $request->image->image = 'quibusdam';
    $request->margin = 1;
    $request->transparency = 50;

    $response = $sdk->addImageWatermarkV1($request);

    if ($response->addImageWatermarkV1200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [addImageWatermarkV1](docs/sdk/README.md#addimagewatermarkv1) - Add an image watermark to a PDF
* [addPasswordV1](docs/sdk/README.md#addpasswordv1) - Add a password to a PDF
* [addRestrictionsV1](docs/sdk/README.md#addrestrictionsv1) - Add restrictions to a PDF
* [addTextWatermarkV1](docs/sdk/README.md#addtextwatermarkv1) - Add a text watermark to a PDF
* [extractPagesV1](docs/sdk/README.md#extractpagesv1) - Extract pages from a PDF
* [mergeDocumentsV1](docs/sdk/README.md#mergedocumentsv1) - Merge PDF documents
* [removePagesV1](docs/sdk/README.md#removepagesv1) - Remove pages from a PDF
* [removePasswordV1](docs/sdk/README.md#removepasswordv1) - Remove the password from a PDF
* [removeRestrictionsV1](docs/sdk/README.md#removerestrictionsv1) - Remove the restrictions from a PDF
* [removeSignaturesV1](docs/sdk/README.md#removesignaturesv1) - Remove the signatures from a PDF
* [reversePagesV1](docs/sdk/README.md#reversepagesv1) - Reverse the pages of a PDF
* [rotatePagesV1](docs/sdk/README.md#rotatepagesv1) - Rotate pages in a PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
