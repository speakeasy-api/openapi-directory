# ProductVariants

### Available Operations

* [GetProductsIDVariantsJSON](#getproductsidvariantsjson) - Retrieve all Product Variants.
* [GetProductsIDVariantsCountJSON](#getproductsidvariantscountjson) - Count all Product Variants.
* [GetProductsIDVariantsVariantIDJSON](#getproductsidvariantsvariantidjson) - Retrieve a single Product Variant.
* [PostProductsIDVariantsJSON](#postproductsidvariantsjson) - Create a new Product Variant.
* [PutProductsIDVariantsVariantIDJSON](#putproductsidvariantsvariantidjson) - Modify an existing Product Variant.

## GetProductsIDVariantsJSON

Retrieve all Product Variants.

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
    res, err := s.ProductVariants.GetProductsIDVariantsJSON(ctx, operations.GetProductsIDVariantsJSONRequest{
        Authtoken: "quasi",
        ID: 869489,
        Login: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variants != nil {
        // handle response
    }
}
```

## GetProductsIDVariantsCountJSON

Count all Product Variants.

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
    res, err := s.ProductVariants.GetProductsIDVariantsCountJSON(ctx, operations.GetProductsIDVariantsCountJSONRequest{
        Authtoken: "voluptate",
        ID: 55965,
        Login: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDVariantsVariantIDJSON

Retrieve a single Product Variant.

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
    res, err := s.ProductVariants.GetProductsIDVariantsVariantIDJSON(ctx, operations.GetProductsIDVariantsVariantIDJSONRequest{
        Authtoken: "veritatis",
        ID: 232744,
        Login: "adipisci",
        VariantID: 614465,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variant != nil {
        // handle response
    }
}
```

## PostProductsIDVariantsJSON

Create a new Product Variant.

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
    res, err := s.ProductVariants.PostProductsIDVariantsJSON(ctx, operations.PostProductsIDVariantsJSONRequest{
        VariantEdit: shared.VariantEdit{
            Variant: &shared.VariantEditFields{
                ImageID: sdk.Int(839513),
                Options: []shared.ProductOptionVariantEdit{
                    shared.ProductOptionVariantEdit{
                        Name: sdk.String("Charles Langworth"),
                        ProductOptionID: sdk.Int(68074),
                        ProductOptionPosition: sdk.Int(544591),
                        ProductOptionValueID: sdk.Int(251941),
                        ProductValuePosition: sdk.Int(32465),
                        Value: sdk.String("dolor"),
                    },
                },
                Price: sdk.Float32(5801.52),
                Sku: sdk.String("numquam"),
                Stock: sdk.Int(771089),
                StockUnlimited: sdk.Bool(false),
            },
        },
        Authtoken: "explicabo",
        ID: 376226,
        Login: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variant != nil {
        // handle response
    }
}
```

## PutProductsIDVariantsVariantIDJSON

Modify an existing Product Variant.

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
    res, err := s.ProductVariants.PutProductsIDVariantsVariantIDJSON(ctx, operations.PutProductsIDVariantsVariantIDJSONRequest{
        VariantEdit: shared.VariantEdit{
            Variant: &shared.VariantEditFields{
                ImageID: sdk.Int(491025),
                Options: []shared.ProductOptionVariantEdit{
                    shared.ProductOptionVariantEdit{
                        Name: sdk.String("Wendell Frami"),
                        ProductOptionID: sdk.Int(990345),
                        ProductOptionPosition: sdk.Int(45659),
                        ProductOptionValueID: sdk.Int(409054),
                        ProductValuePosition: sdk.Int(310067),
                        Value: sdk.String("consequuntur"),
                    },
                },
                Price: sdk.Float32(8315.2),
                Sku: sdk.String("officia"),
                Stock: sdk.Int(807023),
                StockUnlimited: sdk.Bool(false),
            },
        },
        Authtoken: "dignissimos",
        ID: 640024,
        Login: "asperiores",
        VariantID: 368102,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Variant != nil {
        // handle response
    }
}
```
