# SplashLoginAttempts

### Available Operations

* [GetNetworkSplashLoginAttempts](#getnetworksplashloginattempts) - List the splash login attempts for a network

## GetNetworkSplashLoginAttempts

List the splash login attempts for a network

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
    res, err := s.SplashLoginAttempts.GetNetworkSplashLoginAttempts(ctx, operations.GetNetworkSplashLoginAttemptsRequest{
        LoginIdentifier: sdk.String("nemo"),
        NetworkID: "doloribus",
        SsidNumber: operations.GetNetworkSplashLoginAttemptsSsidNumberEnumTwelve.ToPointer(),
        Timespan: sdk.Int64(603323),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSplashLoginAttempts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
