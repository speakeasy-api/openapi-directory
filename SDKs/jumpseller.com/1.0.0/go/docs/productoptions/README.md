# ProductOptions

### Available Operations

* [DeleteProductsIDOptionsOptionIDJSON](#deleteproductsidoptionsoptionidjson) - Delete a Product Option.
* [GetProductsIDOptionsJSON](#getproductsidoptionsjson) - Retrieve all Product Options.
* [GetProductsIDOptionsCountJSON](#getproductsidoptionscountjson) - Count all Product Options.
* [GetProductsIDOptionsOptionIDJSON](#getproductsidoptionsoptionidjson) - Retrieve a single Product Option.
* [PostProductsIDOptionsJSON](#postproductsidoptionsjson) - Create a new Product Option.
* [PutProductsIDOptionsOptionIDJSON](#putproductsidoptionsoptionidjson) - Modify an existing Product Option.

## DeleteProductsIDOptionsOptionIDJSON

Delete a Product Option.

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
    res, err := s.ProductOptions.DeleteProductsIDOptionsOptionIDJSON(ctx, operations.DeleteProductsIDOptionsOptionIDJSONRequest{
        Authtoken: "facere",
        ID: 85001,
        Login: "consequuntur",
        OptionID: 94458,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductsIDOptionsOptionIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProductsIDOptionsJSON

Retrieve all Product Options.

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
    res, err := s.ProductOptions.GetProductsIDOptionsJSON(ctx, operations.GetProductsIDOptionsJSONRequest{
        Authtoken: "similique",
        ID: 633608,
        Login: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOptions != nil {
        // handle response
    }
}
```

## GetProductsIDOptionsCountJSON

Count all Product Options.

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
    res, err := s.ProductOptions.GetProductsIDOptionsCountJSON(ctx, operations.GetProductsIDOptionsCountJSONRequest{
        Authtoken: "tenetur",
        ID: 62713,
        Login: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDOptionsOptionIDJSON

Retrieve a single Product Option.

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
    res, err := s.ProductOptions.GetProductsIDOptionsOptionIDJSON(ctx, operations.GetProductsIDOptionsOptionIDJSONRequest{
        Authtoken: "vel",
        ID: 447378,
        Login: "eius",
        OptionID: 727697,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOption != nil {
        // handle response
    }
}
```

## PostProductsIDOptionsJSON

Create a new Product Option.

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
    res, err := s.ProductOptions.PostProductsIDOptionsJSON(ctx, operations.PostProductsIDOptionsJSONRequest{
        ProductOptionEdit: shared.ProductOptionEdit{
            Option: &shared.ProductOptionEditFields{
                Name: sdk.String("Gerardo Bartoletti"),
                OptionType: shared.ProductOptionEditFieldsOptionTypeEnumOption.ToPointer(),
                Position: sdk.Int(355369),
            },
        },
        Authtoken: "reprehenderit",
        ID: 356707,
        Login: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOption != nil {
        // handle response
    }
}
```

## PutProductsIDOptionsOptionIDJSON

Modify an existing Product Option.

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
    res, err := s.ProductOptions.PutProductsIDOptionsOptionIDJSON(ctx, operations.PutProductsIDOptionsOptionIDJSONRequest{
        ProductOptionEdit: shared.ProductOptionEdit{
            Option: &shared.ProductOptionEditFields{
                Name: sdk.String("Nora Denesik"),
                OptionType: shared.ProductOptionEditFieldsOptionTypeEnumText.ToPointer(),
                Position: sdk.Int(929292),
            },
        },
        Authtoken: "dolorum",
        ID: 99615,
        Login: "omnis",
        OptionID: 945302,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOption != nil {
        // handle response
    }
}
```
