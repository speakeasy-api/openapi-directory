# Products

### Available Operations

* [GetProducts](#getproducts) - /products

## GetProducts

### Get products

Get a list of insurance [products](https://www.heraldapi.com/docs/products).

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Products.GetProducts(ctx, operations.GetProductsRequest{
        ProducerID: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProducts200ApplicationJSONObject != nil {
        // handle response
    }
}
```
