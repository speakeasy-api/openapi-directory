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
use \OpenAPI\OpenAPI\Models\Operations\CreateCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCreateCorpusRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdminCorpus;
use \OpenAPI\OpenAPI\Models\Shared\AdminDimension;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttribute;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttributeLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdminFilterAttributeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCorpusRequest();
    $request->adminCreateCorpusRequest = new AdminCreateCorpusRequest();
    $request->adminCreateCorpusRequest->corpus = new AdminCorpus();
    $request->adminCreateCorpusRequest->corpus->customDimensions = [
        new AdminDimension(),
        new AdminDimension(),
        new AdminDimension(),
    ];
    $request->adminCreateCorpusRequest->corpus->description = 'provident';
    $request->adminCreateCorpusRequest->corpus->dtProvision = 'distinctio';
    $request->adminCreateCorpusRequest->corpus->enabled = false;
    $request->adminCreateCorpusRequest->corpus->encoderId = 'quibusdam';
    $request->adminCreateCorpusRequest->corpus->encrypted = false;
    $request->adminCreateCorpusRequest->corpus->filterAttributes = [
        new AdminFilterAttribute(),
        new AdminFilterAttribute(),
        new AdminFilterAttribute(),
    ];
    $request->adminCreateCorpusRequest->corpus->id = 857946;
    $request->adminCreateCorpusRequest->corpus->metadataMaxBytes = 544883;
    $request->adminCreateCorpusRequest->corpus->name = 'Ben Mueller';
    $request->adminCreateCorpusRequest->corpus->swapIenc = false;
    $request->adminCreateCorpusRequest->corpus->swapQenc = false;
    $request->adminCreateCorpusRequest->corpus->textless = false;
    $request->customerId = 437587;

    $response = $sdk->adminService->createCorpus($request);

    if ($response->adminCreateCorpusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [adminService](docs/adminservice/README.md)

* [createCorpus](docs/adminservice/README.md#createcorpus) - Create Corpus
* [deleteCorpus](docs/adminservice/README.md#deletecorpus) - Delete Corpus
* [listCorpora](docs/adminservice/README.md#listcorpora) - List Corpora
* [resetCorpus](docs/adminservice/README.md#resetcorpus) - Reset Corpus

### [indexService](docs/indexservice/README.md)

* [delete](docs/indexservice/README.md#delete) - Delete
* [fileUpload](docs/indexservice/README.md#fileupload) - File Upload
* [index](docs/indexservice/README.md#index) - Index

### [queryService](docs/queryservice/README.md)

* [query](docs/queryservice/README.md#query) - Query
* [streamQuery](docs/queryservice/README.md#streamquery) - Stream Query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
