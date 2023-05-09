# Spots

## Overview

The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.
It is possible to configure Smartspots through this resource.

Smartspots also have their own locally stored sets, referred to as "spotsets".
Spotsets can be created and managed within a single spot instance or by using `spotsets` resource.
Created or updated spotsets are automatically synced between Smartspot and server.


<https://intellifi.zendesk.com/hc/en-us/categories/360000685434>
### Available Operations

* [AddSpotSet](#addspotset) - Create spotset
* [GetSpotByID](#getspotbyid) - Get spot
* [GetSpotSetByID](#getspotsetbyid) - Get spotset
* [GetSpotSetsByID](#getspotsetsbyid) - Get spotsets
* [GetSpots](#getspots) - Get all spots
* [UpdateSpot](#updatespot) - Update existing spot
* [UpdateSpotSet](#updatespotset) - Update existing spotset

## AddSpotSet

Create spotset

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.AddSpotSet(ctx, operations.AddSpotSetRequest{
        SpotSetCreate: shared.SpotSetCreate{},
        ID: "6c645b08-b618-491b-aa0f-e1ade008e6f8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetSpotByID

Get spot

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.GetSpotByID(ctx, operations.GetSpotByIDRequest{
        ID: "c5f350d8-cdb5-4a34-9814-3010421813d5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotGet != nil {
        // handle response
    }
}
```

## GetSpotSetByID

Get spotset

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.GetSpotSetByID(ctx, operations.GetSpotSetByIDRequest{
        ID: "208ece7e-253b-4668-851c-6c6e205e16de",
        SetID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotSet != nil {
        // handle response
    }
}
```

## GetSpotSetsByID

Get spotsets

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.GetSpotSetsByID(ctx, operations.GetSpotSetsByIDRequest{
        ID: "b3fec957-8a64-4584-a73a-8418d162309f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotSet != nil {
        // handle response
    }
}
```

## GetSpots

Get all spots

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.GetSpots(ctx, operations.GetSpotsRequest{
        After: types.MustTimeFromString("2022-12-29T04:21:58.833Z"),
        AfterID: sdk.String("omnis"),
        Before: sdk.String("eos"),
        BeforeID: sdk.String("occaecati"),
        From: sdk.String("iste"),
        FromID: sdk.String("magni"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        IsOnline: sdk.Bool(true),
        Limit: sdk.Int64(81369),
        Populate: sdk.String("fuga"),
        RequestCounter: sdk.Int64(73807),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("accusamus"),
        SerialNumber: sdk.Int64(1337),
        Sort: sdk.String("voluptatibus"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(7196.2),
        Until: sdk.String("omnis"),
        UntilID: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpots200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateSpot

Update existing spot

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.UpdateSpot(ctx, operations.UpdateSpotRequest{
        SpotUpdateInput: shared.SpotUpdateInput{
            AntennaReportLocations: []shared.SpotUpdateAntennaReportLocationsInput{
                shared.SpotUpdateAntennaReportLocationsInput{
                    AntennaNumber: sdk.Int64(1),
                },
                shared.SpotUpdateAntennaReportLocationsInput{
                    AntennaNumber: sdk.Int64(1),
                },
            },
            ConfigRequest: map[string]interface{}{
                "maxime": "magnam",
                "temporibus": "quos",
                "commodi": "itaque",
            },
            GeoCoords: &shared.GeoCoordsInput{
                Lat: sdk.Float64(4156.08),
                Lng: sdk.Float64(5207.61),
            },
            ReportLocation: sdk.String("5b7d6cbd7503c445552a1664"),
            SensesRequest: map[string]interface{}{
                "modi": "nam",
                "vero": "voluptatem",
                "ipsam": "vel",
                "alias": "quasi",
            },
        },
        ID: "3f59da75-7a59-4ecf-af66-ef1caa3383c2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## UpdateSpotSet

Update existing spotset

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spots.UpdateSpotSet(ctx, operations.UpdateSpotSetRequest{
        SpotSetUpdate: shared.SpotSetUpdate{
            Delete: sdk.Bool(false),
        },
        ID: "beb47737-3c8d-472f-a4d1-db1f2c431066",
        SetID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
