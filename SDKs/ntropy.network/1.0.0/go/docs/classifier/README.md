# Classifier

### Available Operations

* [GetABatchOfBusinessTransactionClassificationResults](#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.
* [GetABatchOfConsumerTransactionClassificationResults](#getabatchofconsumertransactionclassificationresults) - Get a batch of consumer transaction classification results.

## GetABatchOfBusinessTransactionClassificationResults

Get a batch of business transaction classification results.

### Example Usage

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
    res, err := s.Classifier.GetABatchOfBusinessTransactionClassificationResults(ctx, operations.GetABatchOfBusinessTransactionClassificationResultsRequest{
        ID: "247ee045-3d04-4b3c-872b-a9160b810f33",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetABatchOfConsumerTransactionClassificationResults

Get a batch of consumer transaction classification results.

### Example Usage

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
    res, err := s.Classifier.GetABatchOfConsumerTransactionClassificationResults(ctx, operations.GetABatchOfConsumerTransactionClassificationResultsRequest{
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
