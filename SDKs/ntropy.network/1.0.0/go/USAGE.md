<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetABatchOfConsumerTransactionClassificationResultsRequest{
        PathParams: operations.GetABatchOfConsumerTransactionClassificationResultsPathParams{
            ID: "sit",
        },
    }
    
    res, err := s.Batch.GetABatchOfConsumerTransactionClassificationResults(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->