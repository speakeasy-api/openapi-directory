# MerakiAuthUsers

### Available Operations

* [GetNetworkMerakiAuthUser](#getnetworkmerakiauthuser) - Return the Meraki Auth splash or RADIUS user
* [GetNetworkMerakiAuthUsers](#getnetworkmerakiauthusers) - List the splash or RADIUS users configured under Meraki Authentication for a network

## GetNetworkMerakiAuthUser

Return the Meraki Auth splash or RADIUS user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.GetNetworkMerakiAuthUser(ctx, operations.GetNetworkMerakiAuthUserRequest{
        MerakiAuthUserID: "porro",
        NetworkID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkMerakiAuthUsers

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MerakiAuthUsers.GetNetworkMerakiAuthUsers(ctx, operations.GetNetworkMerakiAuthUsersRequest{
        NetworkID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkMerakiAuthUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
