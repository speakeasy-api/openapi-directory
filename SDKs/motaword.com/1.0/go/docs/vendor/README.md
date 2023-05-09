# Vendor

### Available Operations

* [GetAvailableVendors](#getavailablevendors) - Get a list of vendors available for the criteria given

## GetAvailableVendors

Get a list of vendors available for the criteria given

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Vendor.GetAvailableVendors(ctx, operations.GetAvailableVendorsRequest{
        AvailableVendorsFilter: &shared.AvailableVendorsFilter{
            CorporateID: sdk.Float64(4445.87),
            ManualWorkPermission: sdk.Bool(false),
            SourceLanguage: sdk.String("est"),
            TargetLanguages: []string{
                "sint",
                "accusamus",
            },
            Types: []shared.AvailableVendorsFilterTypesEnum{
                shared.AvailableVendorsFilterTypesEnumBoth,
                shared.AvailableVendorsFilterTypesEnumBoth,
                shared.AvailableVendorsFilterTypesEnumBoth,
                shared.AvailableVendorsFilterTypesEnumProofreader,
            },
        },
        With: []GetAvailableVendorsWithEnum{
            operations.GetAvailableVendorsWithEnumUser,
            operations.GetAvailableVendorsWithEnumUser,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```
