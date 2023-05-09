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