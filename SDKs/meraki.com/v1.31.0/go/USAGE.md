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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: shared.SchemeMerakiAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetNetworkSwitchAccessControlListsRequest{
        PathParams: operations.GetNetworkSwitchAccessControlListsPathParams{
            NetworkID: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AccessControlLists.GetNetworkSwitchAccessControlLists(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->