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
use \OpenAPI\OpenAPI\Models\Operations\GetABatchOfConsumerTransactionClassificationResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetABatchOfConsumerTransactionClassificationResultsRequest();
    $request->id = '247ee045-3d04-4b3c-872b-a9160b810f33';

    $response = $sdk->batch->getABatchOfConsumerTransactionClassificationResults($request);

    if ($response->getABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [batch](docs/batch/README.md)

* [getABatchOfConsumerTransactionClassificationResults](docs/batch/README.md#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

### [batch1](docs/batch1/README.md)

* [getABatchOfBusinessTransactionClassificationResults](docs/batch1/README.md#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

### [business](docs/business/README.md)

* [getABatchOfBusinessTransactionClassificationResults](docs/business/README.md#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

### [classifier](docs/classifier/README.md)

* [getABatchOfBusinessTransactionClassificationResults](docs/classifier/README.md#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.
* [getABatchOfConsumerTransactionClassificationResults](docs/classifier/README.md#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

### [consumer](docs/consumer/README.md)

* [getABatchOfConsumerTransactionClassificationResults](docs/consumer/README.md#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
