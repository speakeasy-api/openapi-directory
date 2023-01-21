<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetOrdersRequest{
        QueryParams: operations.GetOrdersQueryParams{
            Limit: "sit",
            Offset: "voluptas",
            OrderStatus: "Cancelled",
        },
    }
    
    res, err := s.GetOrders(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOfOrders != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->