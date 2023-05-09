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
    res, err := s.BillingSubPartnerAPI.GetAllTransfers(ctx, operations.GetAllTransfersRequest{
        ID: sdk.String("111"),
        Limit: sdk.String("10"),
        Offset: sdk.String("0"),
        Order: sdk.String("ASC"),
        Status: sdk.String("CREATED"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllTransfers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->