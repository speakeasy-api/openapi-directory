# Taxes

### Available Operations

* [GetTaxesJSON](#gettaxesjson) - Retrieve all Taxes.
* [GetTaxesIDJSON](#gettaxesidjson) - Retrieve a single Tax information.
* [PostTaxesJSON](#posttaxesjson) - Create a new Tax.

## GetTaxesJSON

Retrieve all Taxes.

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
    res, err := s.Taxes.GetTaxesJSON(ctx, operations.GetTaxesJSONRequest{
        Authtoken: "amet",
        Login: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Taxes != nil {
        // handle response
    }
}
```

## GetTaxesIDJSON

Retrieve a single Tax information.

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
    res, err := s.Taxes.GetTaxesIDJSON(ctx, operations.GetTaxesIDJSONRequest{
        Authtoken: "ea",
        ID: 539118,
        Login: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tax != nil {
        // handle response
    }
}
```

## PostTaxesJSON

Create a new Tax.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Taxes.PostTaxesJSON(ctx, operations.PostTaxesJSONRequest{
        TaxEdit: shared.TaxEdit{
            Tax: &shared.TaxEditFields{
                CategoryID: sdk.Int(887265),
                Country: sdk.String("Timor-Leste"),
                Fixed: sdk.Bool(false),
                Name: sdk.String("Wendell Harber"),
                Region: sdk.String("maiores"),
                Shipping: sdk.Bool(false),
                Tax: sdk.Float32(5446.47),
            },
        },
        Authtoken: "at",
        Login: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tax != nil {
        // handle response
    }
}
```
