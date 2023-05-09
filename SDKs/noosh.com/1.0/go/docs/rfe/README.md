# Rfe

### Available Operations

* [GetRfe](#getrfe) - Get a specific Rfe
* [GetRfeList](#getrfelist) - List the RFES
* [PostRfeJSON](#postrfejson) - Create a RFE
* [PostRfeRaw](#postrferaw) - Create a RFE

## GetRfe

Get a specific Rfe

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
    res, err := s.Rfe.GetRfe(ctx, operations.GetRfeRequest{
        ProjectID: "pariatur",
        RfeID: "nemo",
        WorkgroupID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetRfeList

List the RFES

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
    res, err := s.Rfe.GetRfeList(ctx, operations.GetRfeListRequest{
        ProjectID: "perferendis",
        WorkgroupID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostRfeJSON

Create a RFE

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Rfe.PostRfeJSON(ctx, operations.PostRfeJSONRequest{
        RfePO: &shared.RfePO{
            Description: sdk.String("sample description"),
            Details: sdk.String("sample details"),
            EstimateDueDate: types.MustDateFromString("2022-12-27"),
            ProposedOrderCompletionDate: types.MustDateFromString("2021-12-02"),
            RfeNumber: sdk.String("sample rfe_number"),
            RfeTitle: sdk.String("sample rfe_title"),
            Specs: []shared.RfeSpecPO{
                shared.RfeSpecPO{
                    Quantity1: sdk.Int64(1),
                    Quantity2: sdk.Int64(1),
                    Quantity3: sdk.Int64(1),
                    Quantity4: sdk.Int64(1),
                    Quantity5: sdk.Int64(1),
                    SpecID: sdk.Int64(1),
                },
                shared.RfeSpecPO{
                    Quantity1: sdk.Int64(1),
                    Quantity2: sdk.Int64(1),
                    Quantity3: sdk.Int64(1),
                    Quantity4: sdk.Int64(1),
                    Quantity5: sdk.Int64(1),
                    SpecID: sdk.Int64(1),
                },
                shared.RfeSpecPO{
                    Quantity1: sdk.Int64(1),
                    Quantity2: sdk.Int64(1),
                    Quantity3: sdk.Int64(1),
                    Quantity4: sdk.Int64(1),
                    Quantity5: sdk.Int64(1),
                    SpecID: sdk.Int64(1),
                },
                shared.RfeSpecPO{
                    Quantity1: sdk.Int64(1),
                    Quantity2: sdk.Int64(1),
                    Quantity3: sdk.Int64(1),
                    Quantity4: sdk.Int64(1),
                    Quantity5: sdk.Int64(1),
                    SpecID: sdk.Int64(1),
                },
            },
            SupplierUserIds: []int64{
                1,
                1,
                1,
            },
        },
        ProjectID: "nobis",
        WorkgroupID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostRfeRaw

Create a RFE

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Rfe.PostRfeRaw(ctx, operations.PostRfeRawRequest{
        RequestBody: []byte("quis"),
        ProjectID: "totam",
        WorkgroupID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
