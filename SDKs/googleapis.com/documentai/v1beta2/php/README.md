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
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsBatchProcessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2AutoMlParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2EntityExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2FormExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2KeyValuePairHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OcrParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2OutputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableExtractionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2TableBoundHint;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2BoundingPoly;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2NormalizedVertex;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDocumentaiV1beta2Vertex;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DocumentaiProjectsLocationsDocumentsBatchProcessSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentaiProjectsLocationsDocumentsBatchProcessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest = new GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest();
    $request->googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest->requests = [
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
        new GoogleCloudDocumentaiV1beta2ProcessDocumentRequest(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DocumentaiProjectsLocationsDocumentsBatchProcessSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->documentaiProjectsLocationsDocumentsBatchProcess($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [documentaiProjectsLocationsDocumentsBatchProcess](docs/projects/README.md#documentaiprojectslocationsdocumentsbatchprocess) - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
* [documentaiProjectsLocationsDocumentsProcess](docs/projects/README.md#documentaiprojectslocationsdocumentsprocess) - Processes a single document.
* [documentaiProjectsOperationsGet](docs/projects/README.md#documentaiprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
