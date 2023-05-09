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
                Lat: sdk.Float32(3639.44),
                Lng: sdk.Float32(2240.39),
            },
            BottomRightCorner: &operations.CreateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(4626.65),
                Lng: sdk.Float32(2784.59),
            },
            Center: &operations.CreateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(2330.9),
                Lng: sdk.Float32(9094.5),
            },
            ImageContents: "hic",
            Name: "Ms. Lamar Boyle",
            TopLeftCorner: &operations.CreateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(1577.51),
                Lng: sdk.Float32(1756.68),
            },
            TopRightCorner: &operations.CreateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(716.71),
                Lng: sdk.Float32(9955.38),
            },
        },
        NetworkID: "iste",
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
        FloorPlanID: "libero",
        NetworkID: "inventore",
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
        FloorPlanID: "tenetur",
        NetworkID: "nihil",
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
        NetworkID: "fugiat",
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
                Lat: sdk.Float32(6145.13),
                Lng: sdk.Float32(6433.74),
            },
            BottomRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyBottomRightCorner{
                Lat: sdk.Float32(9391.03),
                Lng: sdk.Float32(9537.65),
            },
            Center: &operations.UpdateNetworkFloorPlanRequestBodyCenter{
                Lat: sdk.Float32(9212.73),
                Lng: sdk.Float32(4322.15),
            },
            ImageContents: sdk.String("omnis"),
            Name: sdk.String("Mattie Corwin"),
            TopLeftCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopLeftCorner{
                Lat: sdk.Float32(9249.66),
                Lng: sdk.Float32(9261.79),
            },
            TopRightCorner: &operations.UpdateNetworkFloorPlanRequestBodyTopRightCorner{
                Lat: sdk.Float32(9909.41),
                Lng: sdk.Float32(7402.06),
            },
        },
        FloorPlanID: "accusantium",
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkFloorPlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```
