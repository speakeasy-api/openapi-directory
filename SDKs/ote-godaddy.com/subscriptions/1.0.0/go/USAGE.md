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
    
    req := operations.CancelRequest{
        PathParams: operations.CancelPathParams{
            SubscriptionID: "corrupti",
        },
        Headers: operations.CancelHeaders{
            XShopperID: "sapiente",
        },
    }
    
    res, err := s.V1.Cancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->