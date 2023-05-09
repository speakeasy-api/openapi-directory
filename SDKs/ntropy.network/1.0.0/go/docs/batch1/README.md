# Batch1

### Available Operations

* [GetABatchOfBusinessTransactionClassificationResults](#getabatchofbusinesstransactionclassificationresults) - Get a batch of business transaction classification results.

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
    res, err := s.Batch1.GetABatchOfBusinessTransactionClassificationResults(ctx, operations.GetABatchOfBusinessTransactionClassificationResultsRequest{
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
