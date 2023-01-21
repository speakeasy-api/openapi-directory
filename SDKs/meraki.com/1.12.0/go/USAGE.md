<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                MerakiAPIKey: shared.SchemeMerakiAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetNetworkSwitchAccessControlListsRequest{
        PathParams: operations.GetNetworkSwitchAccessControlListsPathParams{
            NetworkID: "sit",
        },
    }
    
    res, err := s.AccessControlLists.GetNetworkSwitchAccessControlLists(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAccessControlLists200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->