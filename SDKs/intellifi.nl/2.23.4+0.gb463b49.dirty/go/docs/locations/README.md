# Locations

## Overview

The `locations` resource is an abstraction for the area around a physical location that items can be localized at.


<https://intellifi.zendesk.com/hc/en-us/articles/360007502554>
### Available Operations

* [AddLocation](#addlocation) - Create location
* [DeleteLocation](#deletelocation) - Delete location
* [GetLocationByID](#getlocationbyid) - Get location
* [GetLocations](#getlocations) - Get all locations
* [UpdateLocation](#updatelocation) - Update existing location

## AddLocation

Create location

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Locations.AddLocation(ctx, shared.LocationInput{
        Custom: sdk.String("suscipit"),
        Label: sdk.String("Foo Bar"),
        Metadata: map[string]interface{}{
            "eos": "praesentium",
            "quisquam": "veritatis",
            "ipsa": "id",
            "quidem": "neque",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteLocation

Delete location

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
    res, err := s.Locations.DeleteLocation(ctx, operations.DeleteLocationRequest{
        ID: "cdca4251-904e-4523-87e0-bc7178e4796f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetLocationByID

Get location

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
    res, err := s.Locations.GetLocationByID(ctx, operations.GetLocationByIDRequest{
        ID: "2a70c688-282a-4a48-a562-f222e9817ee1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## GetLocations

Get all locations

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
    res, err := s.Locations.GetLocations(ctx, operations.GetLocationsRequest{
        After: types.MustTimeFromString("2022-03-14T20:41:04.723Z"),
        AfterID: sdk.String("nam"),
        Before: sdk.String("vero"),
        BeforeID: sdk.String("aliquid"),
        From: sdk.String("quasi"),
        FromID: sdk.String("saepe"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Label: sdk.String("Foo Bar"),
        Limit: sdk.Int64(426306),
        Metadata: sdk.String("harum"),
        Populate: sdk.String("molestiae"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("rerum"),
        Sort: sdk.String("occaecati"),
        Text: sdk.String("minima"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(7162.44),
        Until: sdk.String("eligendi"),
        UntilID: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLocations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateLocation

Update existing location

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
    res, err := s.Locations.UpdateLocation(ctx, operations.UpdateLocationRequest{
        LocationInput: shared.LocationInput{
            Custom: sdk.String("culpa"),
            Label: sdk.String("Foo Bar"),
            Metadata: map[string]interface{}{
                "adipisci": "cumque",
                "consequuntur": "consequatur",
                "minus": "quaerat",
            },
        },
        ID: "f3789fd8-71f9-49dd-aefd-121aa6f1e674",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
