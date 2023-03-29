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
        Security: operations.DeleteAPIV1AnnouncementsIDReactionsNameSecurity{
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteAPIV1AnnouncementsIDReactionsNamePathParams{
            ID: "unde",
            Name: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteAPIV1AnnouncementsIDReactionsName(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAPIV1AnnouncementsIDReactionsName200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->