<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAllTransfersRequest{
        QueryParams: operations.GetAllTransfersQueryParams{
            ID: "111",
            Limit: "10",
            Offset: "0",
            Order: "ASC",
            Status: "CREATED",
        },
    }

    ctx := context.Background()
    res, err := s.BillingSubPartnerAPI.GetAllTransfers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllTransfers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->