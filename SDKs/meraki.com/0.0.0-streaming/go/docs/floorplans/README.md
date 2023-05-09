# FloorPlans

### Available Operations

* [CreateNetworkFloorPlan](#createnetworkfloorplan) - Upload a floor plan
* [DeleteNetworkFloorPlan](#deletenetworkfloorplan) - Destroy a floor plan
* [GetNetworkFloorPlan](#getnetworkfloorplan) - Find a floor plan by ID
* [GetNetworkFloorPlans](#getnetworkfloorplans) - List the floor plans that belong to your network
* [UpdateNetworkFloorPlan](#updatenetworkfloorplan) - Update a floor plan's geolocation and other meta data

## CreateNetworkFloorPlan

Upload a floor plan

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
    res, err := s.FloorPlans.CreateNetworkFloorPlan(ctx, operations.CreateNetworkFloorPlanRequest{
        RequestBody: operations.CreateNetworkFloorPlanRequestBody{
            BottomLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomLeftCorner{
                Lat: sdk.Float32(1470.14),
                Lng: sdk.Float32(9564.06),
            },
            BottomRightCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(1598.7),
                Lng: sdk.Float32(1871.31),
            },
            Center: &operations.CreateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(1294.12),
                Lng: sdk.Float32(9039.84),
            },
            ImageContents: "occaecati",
            Name: "Carl Koch",
            TopLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(829.71),
                Lng: sdk.Float32(4586.04),
            },
            TopRightCorner: &operations.CreateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(8003.79),
                Lng: sdk.Float32(7241.68),
            },
        },
        NetworkID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkFloorPlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkFloorPlan

Destroy a floor plan

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
    res, err := s.FloorPlans.DeleteNetworkFloorPlan(ctx, operations.DeleteNetworkFloorPlanRequest{
        FloorPlanID: "aliquid",
        NetworkID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkFloorPlan

Find a floor plan by ID

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
    res, err := s.FloorPlans.GetNetworkFloorPlan(ctx, operations.GetNetworkFloorPlanRequest{
        FloorPlanID: "saepe",
        NetworkID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkFloorPlans

List the floor plans that belong to your network

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
    res, err := s.FloorPlans.GetNetworkFloorPlans(ctx, operations.GetNetworkFloorPlansRequest{
        NetworkID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFloorPlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkFloorPlan

Update a floor plan's geolocation and other meta data

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
    res, err := s.FloorPlans.UpdateNetworkFloorPlan(ctx, operations.UpdateNetworkFloorPlanRequest{
        RequestBody: &operations.UpdateNetworkFloorPlanRequestBody{
            BottomLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomLeftCorner{
                Lat: sdk.Float32(4732.21),
                Lng: sdk.Float32(6996.22),
            },
            BottomRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(5801.97),
                Lng: sdk.Float32(3277.2),
            },
            Center: &operations.UpdateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(7162.44),
                Lng: sdk.Float32(7567.79),
            },
            ImageContents: sdk.String("sit"),
            Name: sdk.String("Randolph Fisher"),
            TopLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(97.66),
                Lng: sdk.Float32(7963.92),
            },
            TopRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(3082.86),
                Lng: sdk.Float32(9591.67),
            },
        },
        FloorPlanID: "consectetur",
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```
