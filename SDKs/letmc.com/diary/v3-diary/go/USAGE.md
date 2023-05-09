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
    res, err := s.CompanyController.CompanyControllerGetBranches(ctx, operations.CompanyControllerGetBranchesRequest{
        Count: 548814,
        Offset: 592845,
        ShortName: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertisingBranchModelResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->