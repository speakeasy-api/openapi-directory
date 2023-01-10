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
    
    req := operations.GetAffectedGenomicModelsUsingGetRequest{
        PathParams: operations.GetAffectedGenomicModelsUsingGetPathParams{
            TaxonID: "dolorem",
        },
    }
    
    res, err := s.AGR.GetAffectedGenomicModelsUsingGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->