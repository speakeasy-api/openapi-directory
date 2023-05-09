# Commission

### Available Operations

* [GetCommissions](#getcommissions) - Returns a commission list of current client.
* [GetCommissionsByFilter](#getcommissionsbyfilter) - Returns a commission list of current client.

## GetCommissions

Returns a commission list of current client.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commission.GetCommissions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CommissionList != nil {
        // handle response
    }
}
```

## GetCommissionsByFilter

Returns a commission list of current client.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Commission.GetCommissionsByFilter(ctx, shared.ReportFilter{
        BudgetCode: sdk.String("porro"),
        DateFrom: types.MustTimeFromString("2022-10-06T15:49:54.663Z"),
        DateTo: types.MustTimeFromString("2021-09-20T20:35:01.256Z"),
        SourceLanguages: []string{
            "fugit",
            "deleniti",
            "hic",
        },
        TargetLanguages: []string{
            "totam",
            "beatae",
            "commodi",
            "molestiae",
        },
        Users: []int64{
            186332,
            774234,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommissionList != nil {
        // handle response
    }
}
```
