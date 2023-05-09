# ProductOptionValues

### Available Operations

* [DeleteProductsIDOptionsOptionIDValuesValueIDJSON](#deleteproductsidoptionsoptionidvaluesvalueidjson) - Delete a Product Option Value.
* [GetProductsIDOptionsOptionIDValuesJSON](#getproductsidoptionsoptionidvaluesjson) - Retrieve all Product Option Values.
* [GetProductsIDOptionsOptionIDValuesCountJSON](#getproductsidoptionsoptionidvaluescountjson) - Count all Product Option Values.
* [GetProductsIDOptionsOptionIDValuesValueIDJSON](#getproductsidoptionsoptionidvaluesvalueidjson) - Retrieve a single Product Option Value.
* [PostProductsIDOptionsOptionIDValuesJSON](#postproductsidoptionsoptionidvaluesjson) - Create a new Product Option Value.
* [PutProductsIDOptionsOptionIDValuesValueIDJSON](#putproductsidoptionsoptionidvaluesvalueidjson) - Modify an existing Product Option Value.

## DeleteProductsIDOptionsOptionIDValuesValueIDJSON

Delete a Product Option Value.

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
    res, err := s.ProductOptionValues.DeleteProductsIDOptionsOptionIDValuesValueIDJSON(ctx, operations.DeleteProductsIDOptionsOptionIDValuesValueIDJSONRequest{
        Authtoken: "vero",
        ID: 399025,
        Login: "quasi",
        OptionID: 904045,
        ValueID: 426306,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductsIDOptionsOptionIDValuesValueIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProductsIDOptionsOptionIDValuesJSON

Retrieve all Product Option Values.

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
    res, err := s.ProductOptionValues.GetProductsIDOptionsOptionIDValuesJSON(ctx, operations.GetProductsIDOptionsOptionIDValuesJSONRequest{
        Authtoken: "harum",
        ID: 473221,
        Login: "rerum",
        OptionID: 580197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOptionValues != nil {
        // handle response
    }
}
```

## GetProductsIDOptionsOptionIDValuesCountJSON

Count all Product Option Values.

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
    res, err := s.ProductOptionValues.GetProductsIDOptionsOptionIDValuesCountJSON(ctx, operations.GetProductsIDOptionsOptionIDValuesCountJSONRequest{
        Authtoken: "minima",
        ID: 716244,
        Login: "eligendi",
        OptionID: 27069,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDOptionsOptionIDValuesValueIDJSON

Retrieve a single Product Option Value.

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
    res, err := s.ProductOptionValues.GetProductsIDOptionsOptionIDValuesValueIDJSON(ctx, operations.GetProductsIDOptionsOptionIDValuesValueIDJSONRequest{
        Authtoken: "culpa",
        ID: 731398,
        Login: "adipisci",
        OptionID: 766964,
        ValueID: 160538,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOptionValue != nil {
        // handle response
    }
}
```

## PostProductsIDOptionsOptionIDValuesJSON

Create a new Product Option Value.

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
    res, err := s.ProductOptionValues.PostProductsIDOptionsOptionIDValuesJSON(ctx, operations.PostProductsIDOptionsOptionIDValuesJSONRequest{
        ProductOptionValueEdit: shared.ProductOptionValueEdit{
            Value: &shared.ProductOptionValueEditFields{
                Name: sdk.String("Sadie Hackett"),
                Position: sdk.Int(458139),
            },
        },
        Authtoken: "blanditiis",
        ID: 590984,
        Login: "a",
        OptionID: 857723,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOptionValue != nil {
        // handle response
    }
}
```

## PutProductsIDOptionsOptionIDValuesValueIDJSON

Modify an existing Product Option Value.

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
    res, err := s.ProductOptionValues.PutProductsIDOptionsOptionIDValuesValueIDJSON(ctx, operations.PutProductsIDOptionsOptionIDValuesValueIDJSONRequest{
        ProductOptionValueEdit: shared.ProductOptionValueEdit{
            Value: &shared.ProductOptionValueEditFields{
                Name: sdk.String("Cory Boyle"),
                Position: sdk.Int(575751),
            },
        },
        Authtoken: "pariatur",
        ID: 820767,
        Login: "quia",
        OptionID: 908844,
        ValueID: 992430,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOptionValue != nil {
        // handle response
    }
}
```
