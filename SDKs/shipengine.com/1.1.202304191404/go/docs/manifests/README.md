# Manifests

## Overview

manifests


### Available Operations

* [CreateManifest](#createmanifest) - Create Manifest
* [GetManifestByID](#getmanifestbyid) - Get Manifest By Id
* [GetManifestRequestByID](#getmanifestrequestbyid) - Get Manifest Request By Id
* [ListManifests](#listmanifests) - List Manifests

## CreateManifest

Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Manifests.CreateManifest(ctx, shared.CreateManifestRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateManifestResponseBody != nil {
        // handle response
    }
}
```

## GetManifestByID

Get Manifest By Id

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Manifests.GetManifestByID(ctx, operations.GetManifestByIDRequest{
        ManifestID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetManifestByIDResponseBody != nil {
        // handle response
    }
}
```

## GetManifestRequestByID

Get Manifest Request By Id

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Manifests.GetManifestRequestByID(ctx, operations.GetManifestRequestByIDRequest{
        ManifestRequestID: "se-28529731",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateManifestResponseBody != nil {
        // handle response
    }
}
```

## ListManifests

Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Manifests.ListManifests(ctx, operations.ListManifestsRequest{
        CarrierID: sdk.String("se-28529731"),
        CreatedAtEnd: types.MustTimeFromString("2022-09-06T17:20:08.756Z"),
        CreatedAtStart: types.MustTimeFromString("2022-05-02T09:29:06.042Z"),
        LabelIds: []string{
            "se-28529731",
            "se-28529731",
            "se-28529731",
            "se-28529731",
        },
        Page: sdk.Int(131797),
        PageSize: sdk.Int(647174),
        ShipDateEnd: types.MustTimeFromString("2021-04-26T18:54:54.344Z"),
        ShipDateStart: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
        WarehouseID: sdk.String("se-28529731"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManifestsResponseBody != nil {
        // handle response
    }
}
```
