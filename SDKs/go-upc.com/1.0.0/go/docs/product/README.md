# Product

### Available Operations

* [GetProductInfo](#getproductinfo) - Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

## GetProductInfo

Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Product.GetProductInfo(ctx, operations.GetProductInfoRequest{
        Code: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductInfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
