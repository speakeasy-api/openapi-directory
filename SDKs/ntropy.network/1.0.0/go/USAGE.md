<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetABatchOfConsumerTransactionClassificationResultsRequest{
        ID: "247ee045-3d04-4b3c-872b-a9160b810f33",
    }

    ctx := context.Background()
    res, err := s.Batch.GetABatchOfConsumerTransactionClassificationResults(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->