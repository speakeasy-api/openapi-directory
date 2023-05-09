# Netflow

### Available Operations

* [GetNetworkNetflow](#getnetworknetflow) - Return the NetFlow traffic reporting settings for a network
* [UpdateNetworkNetflow](#updatenetworknetflow) - Update the NetFlow traffic reporting settings for a network

## GetNetworkNetflow

Return the NetFlow traffic reporting settings for a network

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
    res, err := s.Netflow.GetNetworkNetflow(ctx, operations.GetNetworkNetflowRequest{
        NetworkID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkNetflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkNetflow

Update the NetFlow traffic reporting settings for a network

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
    res, err := s.Netflow.UpdateNetworkNetflow(ctx, operations.UpdateNetworkNetflowRequest{
        RequestBody: &operations.UpdateNetworkNetflowRequestBody{
            CollectorIP: sdk.String("quibusdam"),
            CollectorPort: sdk.Int64(734952),
            EtaDstPort: sdk.Int64(989095),
            EtaEnabled: sdk.Bool(false),
            ReportingEnabled: sdk.Bool(false),
        },
        NetworkID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkNetflow200ApplicationJSONObject != nil {
        // handle response
    }
}
```
