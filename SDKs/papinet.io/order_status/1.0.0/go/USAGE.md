<!-- Start SDK Example Usage -->
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
    res, err := s.GetOrders(ctx, operations.GetOrdersRequest{
        Limit: sdk.String("corrupti"),
        Offset: sdk.String("provident"),
        OrderStatus: operations.GetOrdersOrderStatusEnumCompleted.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfOrders != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->