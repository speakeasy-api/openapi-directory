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

    req := operations.GETAffectedGenomicModelsUsingGETRequest{
        TaxonID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Agr.GETAffectedGenomicModelsUsingGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->