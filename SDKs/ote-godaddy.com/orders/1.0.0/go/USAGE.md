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
    
    req := operations.GetRequest{
        PathParams: operations.GetPathParams{
            OrderID: "ipsum",
        },
        Headers: operations.GetHeaders{
            XMarketID: "commodi",
            XShopperID: "qui",
        },
    }
    
    res, err := s.V1.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->