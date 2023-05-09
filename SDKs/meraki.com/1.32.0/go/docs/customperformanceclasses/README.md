# CustomPerformanceClasses

### Available Operations

* [CreateNetworkApplianceTrafficShapingCustomPerformanceClass](#createnetworkappliancetrafficshapingcustomperformanceclass) - Add a custom performance class for an MX network
* [DeleteNetworkApplianceTrafficShapingCustomPerformanceClass](#deletenetworkappliancetrafficshapingcustomperformanceclass) - Delete a custom performance class from an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClass](#getnetworkappliancetrafficshapingcustomperformanceclass) - Return a custom performance class for an MX network
* [GetNetworkApplianceTrafficShapingCustomPerformanceClasses](#getnetworkappliancetrafficshapingcustomperformanceclasses) - List all custom performance classes for an MX network
* [UpdateNetworkApplianceTrafficShapingCustomPerformanceClass](#updatenetworkappliancetrafficshapingcustomperformanceclass) - Update a custom performance class for an MX network

## CreateNetworkApplianceTrafficShapingCustomPerformanceClass

Add a custom performance class for an MX network

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
    res, err := s.CustomPerformanceClasses.CreateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(708283),
            MaxLatency: sdk.Int64(908643),
            MaxLossPercentage: sdk.Int64(528287),
            Name: "Luke Turcotte",
        },
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkApplianceTrafficShapingCustomPerformanceClass

Delete a custom performance class from an MX network

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
    res, err := s.CustomPerformanceClasses.DeleteNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "tempore",
        NetworkID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClass

Return a custom performance class for an MX network

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
    res, err := s.CustomPerformanceClasses.GetNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        CustomPerformanceClassID: "iste",
        NetworkID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceTrafficShapingCustomPerformanceClasses

List all custom performance classes for an MX network

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
    res, err := s.CustomPerformanceClasses.GetNetworkApplianceTrafficShapingCustomPerformanceClasses(ctx, operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest{
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceTrafficShapingCustomPerformanceClass

Update a custom performance class for an MX network

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
    res, err := s.CustomPerformanceClasses.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx, operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest{
        RequestBody: &operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody{
            MaxJitter: sdk.Int64(206174),
            MaxLatency: sdk.Int64(430003),
            MaxLossPercentage: sdk.Int64(918614),
            Name: sdk.String("Jeffrey Frami MD"),
        },
        CustomPerformanceClassID: "quidem",
        NetworkID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject != nil {
        // handle response
    }
}
```
