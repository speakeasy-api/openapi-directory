# Presences

## Overview

The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).
Presences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.


<https://intellifi.zendesk.com/hc/en-us/articles/360008309313>
### Available Operations

* [GetPresenceByID](#getpresencebyid) - Get presence
* [GetPresences](#getpresences) - Get all presences

## GetPresenceByID

Get presence

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
    res, err := s.Presences.GetPresenceByID(ctx, operations.GetPresenceByIDRequest{
        ID: "bdb04f15-7560-482d-a8ea-19f1d1705133",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Presence != nil {
        // handle response
    }
}
```

## GetPresences

Get all presences

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Presences.GetPresences(ctx, operations.GetPresencesRequest{
        After: types.MustTimeFromString("2021-04-28T03:43:57.732Z"),
        AfterID: sdk.String("accusantium"),
        Before: sdk.String("rem"),
        BeforeID: sdk.String("aut"),
        From: sdk.String("laudantium"),
        FromID: sdk.String("eum"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Item: sdk.String("5b7d6cbd7503c445552a1664"),
        Limit: sdk.Int64(649832),
        Location: sdk.String("5b7d6cbd7503c445552a1664"),
        Populate: sdk.String("ab"),
        Proximity: shared.ProximityEnumImmediate.ToPointer(),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("corrupti"),
        Sort: sdk.String("non"),
        Technology: shared.TechnologyEnumRfid.ToPointer(),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(324.65),
        Until: sdk.String("dolor"),
        UntilID: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPresences200ApplicationJSONObject != nil {
        // handle response
    }
}
```
