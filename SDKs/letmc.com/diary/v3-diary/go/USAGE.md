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

    req := operations.CompanyControllerGetBranchesRequest{
        Count: 548814,
        Offset: 592845,
        ShortName: "distinctio",
    }

    ctx := context.Background()
    res, err := s.CompanyController.CompanyControllerGetBranches(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertisingBranchModelResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->