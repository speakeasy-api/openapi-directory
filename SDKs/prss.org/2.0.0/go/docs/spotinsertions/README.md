# SpotInsertions

## Overview

Spot insertions define spots to play when a cue is received.

### Available Operations

* [DeleteAPIV2SpotinsertionsID](#deleteapiv2spotinsertionsid) - Deletes the spot insertion with the given ID.
* [GetAPIV2Spotinsertions](#getapiv2spotinsertions) - Returns the spot insertions matching the query parameters.
* [GetAPIV2SpotinsertionsID](#getapiv2spotinsertionsid) - Returns the spot insertion matching the given ID.
* [PostAPIV2Spotinsertions](#postapiv2spotinsertions) - Creates a new spot insertion.

## DeleteAPIV2SpotinsertionsID

Deletes the spot insertion with the given ID.

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
    res, err := s.SpotInsertions.DeleteAPIV2SpotinsertionsID(ctx, operations.DeleteAPIV2SpotinsertionsIDRequest{
        ID: 210382,
    }, operations.DeleteAPIV2SpotinsertionsIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV2Spotinsertions

Returns the spot insertions matching the query parameters.

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
    res, err := s.SpotInsertions.GetAPIV2Spotinsertions(ctx, operations.GetAPIV2SpotinsertionsRequest{
        OrderByID: operations.GetAPIV2SpotinsertionsOrderByIDEnumAsc.ToPointer(),
        PageSize: sdk.Int(128926),
        PageStart: sdk.Int(750686),
    }, operations.GetAPIV2SpotinsertionsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotInsertions != nil {
        // handle response
    }
}
```

## GetAPIV2SpotinsertionsID

Returns the spot insertion matching the given ID.

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
    res, err := s.SpotInsertions.GetAPIV2SpotinsertionsID(ctx, operations.GetAPIV2SpotinsertionsIDRequest{
        ID: 315428,
    }, operations.GetAPIV2SpotinsertionsIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotInsertion != nil {
        // handle response
    }
}
```

## PostAPIV2Spotinsertions

Creates a new spot insertion.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SpotInsertions.PostAPIV2Spotinsertions(ctx, shared.SpotInsertionInput{
        BroadcastServiceID: 607831,
        Cue: "S:000_SPOT",
        Duration: 363711,
        EndDate: types.MustDateFromString("2020-01-31"),
        ProgramID: 325047,
        Spots: []int64{
            38425,
            438601,
            634274,
        },
        StartDate: types.MustDateFromString("2020-01-31"),
    }, operations.PostAPIV2SpotinsertionsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotInsertion != nil {
        // handle response
    }
}
```
