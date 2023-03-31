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

    req := operations.GetAPIV2BroadcastservicesRequest{
        OrderByID: "desc",
        PageSize: 592845,
        PageStart: 715190,
    }

    ctx := context.Background()
    res, err := s.BroadcastServices.GetAPIV2Broadcastservices(ctx, req, operations.GetAPIV2BroadcastservicesSecurity{
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