# IsochroneAPI

## Overview

Everything about isochrones

### Available Operations

* [GetIsochrone](#getisochrone) - Isochrone Endpoint

## GetIsochrone

### Example
You can get an example response via:

```
curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
```

Don't forget to replace the placeholder with your own key.

### Introduction
![Isochrone screenshot](./img/isochrone-example.png)

An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.

### Use Cases
Some possible areas in which this API may be useful to you:

- real estate analysis
- realtors
- vehicle scheduling
- geomarketing
- reach of electric vehicles
- transport planning
- logistics (distribution and retail network planning)

### API Clients and Examples
See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IsochroneAPI.GetIsochrone(ctx, operations.GetIsochroneRequest{
        Buckets: sdk.Int(437587),
        DistanceLimit: sdk.Int(297534),
        Point: "debitis",
        ReverseFlow: sdk.Bool(false),
        TimeLimit: sdk.Int(56713),
        Vehicle: shared.VehicleProfileIDEnumSmallTruck.ToPointer(),
        Weighting: operations.GetIsochroneWeightingEnumFastest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IsochroneResponse != nil {
        // handle response
    }
}
```
