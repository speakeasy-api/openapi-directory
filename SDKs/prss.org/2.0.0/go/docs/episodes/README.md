# Episodes

## Overview

An episode is a specific instance of a program that will air on a specific date and time.

### Available Operations

* [GetAPIV2Episodes](#getapiv2episodes) - Gets episodes matching the given criteria.
* [GetAPIV2EpisodesID](#getapiv2episodesid) - Returns the episode matching the given ID.

## GetAPIV2Episodes

Gets episodes matching the given criteria.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Episodes.GetAPIV2Episodes(ctx, operations.GetAPIV2EpisodesRequest{
        BeginAirDateAfter: types.MustTimeFromString("2022-03-03T02:15:00.468Z"),
        EndAirDateBefore: types.MustTimeFromString("2020-08-31T22:02:25.322Z"),
        ID: sdk.Int64(140350),
        OrderByID: operations.GetAPIV2EpisodesOrderByIDEnumDesc.ToPointer(),
        PageSize: sdk.Int(870088),
        PageStart: sdk.Int(978619),
        ProgramID: 473608,
    }, operations.GetAPIV2EpisodesSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Episodes != nil {
        // handle response
    }
}
```

## GetAPIV2EpisodesID

Returns the episode matching the given ID.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Episodes.GetAPIV2EpisodesID(ctx, operations.GetAPIV2EpisodesIDRequest{
        ID: 799159,
    }, operations.GetAPIV2EpisodesIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Episode != nil {
        // handle response
    }
}
```
