# CompanyCodes

### Available Operations

* [GetAllCompanyCodesAndDescriptionsByResource](#getallcompanycodesanddescriptionsbyresource) - Get All Company Codes

## GetAllCompanyCodesAndDescriptionsByResource

Get All Company Codes for the selected company and resource

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
    res, err := s.CompanyCodes.GetAllCompanyCodesAndDescriptionsByResource(ctx, operations.GetAllCompanyCodesAndDescriptionsByResourceRequest{
        CodeResource: "quis",
        CompanyID: "veritatis",
    }, operations.GetAllCompanyCodesAndDescriptionsByResourceSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyCodes != nil {
        // handle response
    }
}
```
