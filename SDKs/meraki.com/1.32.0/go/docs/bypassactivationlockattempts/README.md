# BypassActivationLockAttempts

### Available Operations

* [CreateNetworkSmBypassActivationLockAttempt](#createnetworksmbypassactivationlockattempt) - Bypass activation lock attempt
* [GetNetworkSmBypassActivationLockAttempt](#getnetworksmbypassactivationlockattempt) - Bypass activation lock attempt status

## CreateNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt

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
    res, err := s.BypassActivationLockAttempts.CreateNetworkSmBypassActivationLockAttempt(ctx, operations.CreateNetworkSmBypassActivationLockAttemptRequest{
        RequestBody: operations.CreateNetworkSmBypassActivationLockAttemptRequestBody{
            Ids: []string{
                "libero",
                "molestias",
            },
        },
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSmBypassActivationLockAttempt201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSmBypassActivationLockAttempt

Bypass activation lock attempt status

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
    res, err := s.BypassActivationLockAttempts.GetNetworkSmBypassActivationLockAttempt(ctx, operations.GetNetworkSmBypassActivationLockAttemptRequest{
        AttemptID: "ipsum",
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSmBypassActivationLockAttempt200ApplicationJSONObject != nil {
        // handle response
    }
}
```
