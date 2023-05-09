# Orders

### Available Operations

* [Orders](#orders) - Orders

## Orders

Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners

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
    res, err := s.Orders.Orders(ctx, operations.OrdersRequest{
        Accept: "velit",
        Name: "Miss Eugene Hauck",
        OrderID: "enim",
    }, operations.OrdersSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Orders200ApplicationJSONString != nil {
        // handle response
    }
}
```
