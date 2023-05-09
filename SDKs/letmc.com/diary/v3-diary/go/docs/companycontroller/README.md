# CompanyController

### Available Operations

* [CompanyControllerGetBranches](#companycontrollergetbranches) - All branches defined for a company
* [GetV3DiaryShortNameCompanyBranchesBranchID](#getv3diaryshortnamecompanybranchesbranchid) - Get a specific branch given its unique Object ID (OID)

## CompanyControllerGetBranches

All branches defined for a company

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
    res, err := s.CompanyController.CompanyControllerGetBranches(ctx, operations.CompanyControllerGetBranchesRequest{
        Count: 844266,
        Offset: 602763,
        ShortName: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertisingBranchModelResults != nil {
        // handle response
    }
}
```

## GetV3DiaryShortNameCompanyBranchesBranchID

Get a specific branch given its unique Object ID (OID)

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
    res, err := s.CompanyController.GetV3DiaryShortNameCompanyBranchesBranchID(ctx, operations.GetV3DiaryShortNameCompanyBranchesBranchIDRequest{
        BranchID: "corrupti",
        ShortName: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertisingBranchModel != nil {
        // handle response
    }
}
```
