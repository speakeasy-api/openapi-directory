# ConnectivityMonitoringDestinations

### Available Operations

* [GetNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [GetNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [UpdateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [UpdateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network

## GetNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

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
    res, err := s.ConnectivityMonitoringDestinations.GetNetworkApplianceConnectivityMonitoringDestinations(ctx, operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest{
        NetworkID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

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
    res, err := s.ConnectivityMonitoringDestinations.GetNetworkCellularGatewayConnectivityMonitoringDestinations(ctx, operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest{
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

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
    res, err := s.ConnectivityMonitoringDestinations.UpdateNetworkApplianceConnectivityMonitoringDestinations(ctx, operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest{
        RequestBody: &operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody{
            Destinations: []UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("velit"),
                    IP: "perspiciatis",
                },
                operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("omnis"),
                    IP: "minima",
                },
            },
        },
        NetworkID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

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
    res, err := s.ConnectivityMonitoringDestinations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations(ctx, operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest{
        RequestBody: &operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody{
            Destinations: []UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("voluptatem"),
                    IP: "corrupti",
                },
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("tempore"),
                    IP: "nam",
                },
                operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations{
                    Default: sdk.Bool(false),
                    Description: sdk.String("accusamus"),
                    IP: "odio",
                },
            },
        },
        NetworkID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
