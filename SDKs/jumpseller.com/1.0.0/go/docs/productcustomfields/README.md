# ProductCustomFields

### Available Operations

* [DeleteProductsProductIDFieldsFieldIDJSON](#deleteproductsproductidfieldsfieldidjson) - Delete value of Product Custom Field
* [GetProductsIDFieldsJSON](#getproductsidfieldsjson) - Retrieve all Product Custom Fields
* [GetProductsIDFieldsCountJSON](#getproductsidfieldscountjson) - Count all Product Custom Fields.
* [PostProductsIDFieldsJSON](#postproductsidfieldsjson) - Add an existing Custom Field to a Product.
* [PutProductsProductIDFieldsFieldIDJSON](#putproductsproductidfieldsfieldidjson) - Update value of Product Custom Field

## DeleteProductsProductIDFieldsFieldIDJSON

Delete value of Product Custom Field

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
    res, err := s.ProductCustomFields.DeleteProductsProductIDFieldsFieldIDJSON(ctx, operations.DeleteProductsProductIDFieldsFieldIDJSONRequest{
        Authtoken: "consequatur",
        FieldID: 272822,
        Login: "debitis",
        ProductID: 370853,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MessageObject != nil {
        // handle response
    }
}
```

## GetProductsIDFieldsJSON

Retrieve all Product Custom Fields

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
    res, err := s.ProductCustomFields.GetProductsIDFieldsJSON(ctx, operations.GetProductsIDFieldsJSONRequest{
        Authtoken: "aspernatur",
        ID: 197054,
        Login: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCustomFields != nil {
        // handle response
    }
}
```

## GetProductsIDFieldsCountJSON

Count all Product Custom Fields.

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
    res, err := s.ProductCustomFields.GetProductsIDFieldsCountJSON(ctx, operations.GetProductsIDFieldsCountJSONRequest{
        Authtoken: "esse",
        ID: 925164,
        Login: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## PostProductsIDFieldsJSON

Add an existing Custom Field to a Product.

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
    res, err := s.ProductCustomFields.PostProductsIDFieldsJSON(ctx, operations.PostProductsIDFieldsJSONRequest{
        AddProductCustomField: shared.AddProductCustomField{
            Field: &shared.AddProductCustomFieldFields{
                ID: sdk.Int(715179),
                Value: sdk.String("quod"),
            },
        },
        Authtoken: "dignissimos",
        ID: 76956,
        Login: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## PutProductsProductIDFieldsFieldIDJSON

Update value of Product Custom Field

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
    res, err := s.ProductCustomFields.PutProductsProductIDFieldsFieldIDJSON(ctx, operations.PutProductsProductIDFieldsFieldIDJSONRequest{
        Authtoken: "totam",
        FieldID: 882710,
        Login: "aliquam",
        ProductID: 488410,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCustomField != nil {
        // handle response
    }
}
```
