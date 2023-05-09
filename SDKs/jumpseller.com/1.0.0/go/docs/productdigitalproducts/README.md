# ProductDigitalProducts

### Available Operations

* [DeleteProductsIDDigitalProductsDigitalProductIDJSON](#deleteproductsiddigitalproductsdigitalproductidjson) - Delete a Product DigitalProduct.
* [GetProductsIDDigitalProductsJSON](#getproductsiddigitalproductsjson) - Retrieve all Product DigitalProducts.
* [GetProductsIDDigitalProductsCountJSON](#getproductsiddigitalproductscountjson) - Count all Product DigitalProducts.
* [GetProductsIDDigitalProductsDigitalProductIDJSON](#getproductsiddigitalproductsdigitalproductidjson) - Retrieve a single Product DigitalProduct.
* [PostProductsIDDigitalProductsJSON](#postproductsiddigitalproductsjson) - Create a new Product DigitalProduct.

## DeleteProductsIDDigitalProductsDigitalProductIDJSON

Delete a Product DigitalProduct.

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
    res, err := s.ProductDigitalProducts.DeleteProductsIDDigitalProductsDigitalProductIDJSON(ctx, operations.DeleteProductsIDDigitalProductsDigitalProductIDJSONRequest{
        Authtoken: "occaecati",
        DigitalProductID: 414567,
        ID: 959434,
        Login: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductsIDDigitalProductsDigitalProductIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProductsIDDigitalProductsJSON

Retrieve all Product DigitalProducts.

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
    res, err := s.ProductDigitalProducts.GetProductsIDDigitalProductsJSON(ctx, operations.GetProductsIDDigitalProductsJSONRequest{
        Authtoken: "deserunt",
        ID: 475289,
        Login: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DigitalProducts != nil {
        // handle response
    }
}
```

## GetProductsIDDigitalProductsCountJSON

Count all Product DigitalProducts.

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
    res, err := s.ProductDigitalProducts.GetProductsIDDigitalProductsCountJSON(ctx, operations.GetProductsIDDigitalProductsCountJSONRequest{
        Authtoken: "porro",
        ID: 430402,
        Login: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDDigitalProductsDigitalProductIDJSON

Retrieve a single Product DigitalProduct.

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
    res, err := s.ProductDigitalProducts.GetProductsIDDigitalProductsDigitalProductIDJSON(ctx, operations.GetProductsIDDigitalProductsDigitalProductIDJSONRequest{
        Authtoken: "praesentium",
        DigitalProductID: 159867,
        ID: 536178,
        Login: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DigitalProduct != nil {
        // handle response
    }
}
```

## PostProductsIDDigitalProductsJSON

Create a new Product DigitalProduct.

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
    res, err := s.ProductDigitalProducts.PostProductsIDDigitalProductsJSON(ctx, operations.PostProductsIDDigitalProductsJSONRequest{
        DigitalProductEdit: shared.DigitalProductEdit{
            DigitalProduct: &shared.DigitalProductEditFields{
                Filename: sdk.String("fuga"),
                URL: sdk.String("mollitia"),
            },
        },
        Authtoken: "incidunt",
        ID: 539224,
        Login: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DigitalProduct != nil {
        // handle response
    }
}
```
