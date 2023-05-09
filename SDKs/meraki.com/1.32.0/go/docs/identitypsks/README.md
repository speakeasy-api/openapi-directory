# IdentityPsks

### Available Operations

* [CreateNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [DeleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [GetNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [UpdateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK

## CreateNetworkWirelessSsidIdentityPsk

Create an Identity PSK

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
    res, err := s.IdentityPsks.CreateNetworkWirelessSsidIdentityPsk(ctx, operations.CreateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: operations.CreateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: "doloremque",
            Name: "Mindy Zboncak",
            Passphrase: sdk.String("odio"),
        },
        NetworkID: "animi",
        Number: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

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
    res, err := s.IdentityPsks.DeleteNetworkWirelessSsidIdentityPsk(ctx, operations.DeleteNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "repellendus",
        NetworkID: "culpa",
        Number: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsk

Return an Identity PSK

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
    res, err := s.IdentityPsks.GetNetworkWirelessSsidIdentityPsk(ctx, operations.GetNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "ex",
        NetworkID: "non",
        Number: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

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
    res, err := s.IdentityPsks.GetNetworkWirelessSsidIdentityPsks(ctx, operations.GetNetworkWirelessSsidIdentityPsksRequest{
        NetworkID: "in",
        Number: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

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
    res, err := s.IdentityPsks.UpdateNetworkWirelessSsidIdentityPsk(ctx, operations.UpdateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: sdk.String("reprehenderit"),
            Name: sdk.String("Nora O'Hara"),
            Passphrase: sdk.String("distinctio"),
        },
        IdentityPskID: "error",
        NetworkID: "culpa",
        Number: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```
