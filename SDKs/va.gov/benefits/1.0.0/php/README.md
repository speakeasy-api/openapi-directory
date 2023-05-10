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
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadDownloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBenefitsDocumentUploadDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBenefitsDocumentUploadDownloadRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $requestSecurity = new GetBenefitsDocumentUploadDownloadSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->vbaDocuments->getBenefitsDocumentUploadDownload($request, $requestSecurity);

    if ($response->getBenefitsDocumentUploadDownload200ApplicationZipBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [vbaDocuments](docs/vbadocuments/README.md)

* [getBenefitsDocumentUploadDownload](docs/vbadocuments/README.md#getbenefitsdocumentuploaddownload) - Download zip of "what the server sees"
* [getBenefitsDocumentUploadStatus](docs/vbadocuments/README.md#getbenefitsdocumentuploadstatus) - Get status for a previous benefits document upload
* [getBenefitsDocumentUploadStatusReport](docs/vbadocuments/README.md#getbenefitsdocumentuploadstatusreport) - Get a bulk status report for a list of previous uploads
* [postBenefitsDocumentUpload](docs/vbadocuments/README.md#postbenefitsdocumentupload) - Get a location for subsequent document upload PUT request
* [postBenefitsDocumentUploadValidateDocument](docs/vbadocuments/README.md#postbenefitsdocumentuploadvalidatedocument) - Validate an individual document against system file requirements
* [putBenefitsDocumentUpload](docs/vbadocuments/README.md#putbenefitsdocumentupload) - Accepts document upload.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
