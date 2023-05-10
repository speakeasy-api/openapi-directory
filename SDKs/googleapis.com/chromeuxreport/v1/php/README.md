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
use \OpenAPI\OpenAPI\Models\Operations\ChromeuxreportRecordsQueryHistoryRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\QueryHistoryRequestFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromeuxreportRecordsQueryHistoryRecordRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryHistoryRequest = new QueryHistoryRequest();
    $request->queryHistoryRequest->formFactor = QueryHistoryRequestFormFactorEnum::DESKTOP;
    $request->queryHistoryRequest->metrics = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->queryHistoryRequest->origin = 'corrupti';
    $request->queryHistoryRequest->url = 'illum';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'delectus';

    $response = $sdk->records->chromeuxreportRecordsQueryHistoryRecord($request);

    if ($response->queryHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [records](docs/records/README.md)

* [chromeuxreportRecordsQueryHistoryRecord](docs/records/README.md#chromeuxreportrecordsqueryhistoryrecord) - Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.
* [chromeuxreportRecordsQueryRecord](docs/records/README.md#chromeuxreportrecordsqueryrecord) - Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
