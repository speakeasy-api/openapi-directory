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
    res, err := s.BroadcastServices.GetAPIV2Broadcastservices(ctx, operations.GetAPIV2BroadcastservicesRequest{
        OrderByID: operations.GetAPIV2BroadcastservicesOrderByIDEnumDesc.ToPointer(),
        PageSize: sdk.Int(592845),
        PageStart: sdk.Int(715190),
    }, operations.GetAPIV2BroadcastservicesSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Episodes != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->