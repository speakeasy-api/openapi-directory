# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ntropy.network/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Batch.GetABatchOfConsumerTransactionClassificationResults(ctx, operations.GetABatchOfConsumerTransactionClassificationResultsRequest{
        ID: "247ee045-3d04-4b3c-872b-a9160b810f33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Batch](docs/batch/README.md)

* [GetABatchOfConsumerTransactionClassificationResults](docs/batch/README.md#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

### [Batch1](docs/batch1/README.md)

* [GetABatchOfBusinessTransactionClassificationResults](docs/batch1/README.md#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

### [Business](docs/business/README.md)

* [GetABatchOfBusinessTransactionClassificationResults](docs/business/README.md#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

### [Classifier](docs/classifier/README.md)

* [GetABatchOfBusinessTransactionClassificationResults](docs/classifier/README.md#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.
* [GetABatchOfConsumerTransactionClassificationResults](docs/classifier/README.md#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

### [Consumer](docs/consumer/README.md)

* [GetABatchOfConsumerTransactionClassificationResults](docs/consumer/README.md#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
