# Policy

### Available Operations

* [GetNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [UpdateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network

## GetNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Policy.GetNetworkClientPolicy(ctx, operations.GetNetworkClientPolicyRequest{
        ClientID: "aspernatur",
        NetworkID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Policy.UpdateNetworkClientPolicy(ctx, operations.UpdateNetworkClientPolicyRequest{
        RequestBody: operations.UpdateNetworkClientPolicyRequestBody{
            DevicePolicy: "voluptatem",
            GroupPolicyID: sdk.String("sit"),
        },
        ClientID: "cum",
        NetworkID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```
