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

    req := operations.DeleteAPIV1AnnouncementsIDReactionsNameRequest{
        ID: "corrupti",
        Name: "provident",
    }

    ctx := context.Background()
    res, err := s.DeleteAPIV1AnnouncementsIDReactionsName(ctx, req, operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1AnnouncementsIDReactionsName200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->