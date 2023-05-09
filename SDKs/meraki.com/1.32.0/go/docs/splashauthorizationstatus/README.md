# SplashAuthorizationStatus

### Available Operations

* [GetNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [UpdateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## GetNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.SplashAuthorizationStatus.GetNetworkClientSplashAuthorizationStatus(ctx, operations.GetNetworkClientSplashAuthorizationStatusRequest{
        ClientID: "rerum",
        NetworkID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.SplashAuthorizationStatus.UpdateNetworkClientSplashAuthorizationStatus(ctx, operations.UpdateNetworkClientSplashAuthorizationStatusRequest{
        RequestBody: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody{
            Ssids: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids{
                Zero: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0{
                    IsAuthorized: sdk.Bool(false),
                },
                One: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1{
                    IsAuthorized: sdk.Bool(false),
                },
                Ten: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10{
                    IsAuthorized: sdk.Bool(false),
                },
                Eleven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11{
                    IsAuthorized: sdk.Bool(false),
                },
                Twelve: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12{
                    IsAuthorized: sdk.Bool(false),
                },
                Thirteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13{
                    IsAuthorized: sdk.Bool(false),
                },
                Fourteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14{
                    IsAuthorized: sdk.Bool(false),
                },
                Two: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2{
                    IsAuthorized: sdk.Bool(false),
                },
                Three: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3{
                    IsAuthorized: sdk.Bool(false),
                },
                Four: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4{
                    IsAuthorized: sdk.Bool(false),
                },
                Five: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5{
                    IsAuthorized: sdk.Bool(false),
                },
                Six: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6{
                    IsAuthorized: sdk.Bool(false),
                },
                Seven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7{
                    IsAuthorized: sdk.Bool(false),
                },
                Eight: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8{
                    IsAuthorized: sdk.Bool(false),
                },
                Nine: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9{
                    IsAuthorized: sdk.Bool(false),
                },
            },
        },
        ClientID: "in",
        NetworkID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```
