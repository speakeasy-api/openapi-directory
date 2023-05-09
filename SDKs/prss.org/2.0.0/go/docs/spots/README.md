# Spots

## Overview

A spot is an audio file that is to be inserted into streams using cues.

### Available Operations

* [DeleteAPIV2SpotsID](#deleteapiv2spotsid) - Deletes the spot with the given ID.
* [GetAPIV2Spots](#getapiv2spots) - Returns the spots matching the query parameters.
* [GetAPIV2SpotsID](#getapiv2spotsid) - Returns the spot matching the given ID.
* [PostAPIV2Spots](#postapiv2spots) - Creates a new spot.

## DeleteAPIV2SpotsID

Deletes the spot with the given ID.

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
    res, err := s.Spots.DeleteAPIV2SpotsID(ctx, operations.DeleteAPIV2SpotsIDRequest{
        ID: 988374,
    }, operations.DeleteAPIV2SpotsIDSecurity{
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

## GetAPIV2Spots

Returns the spots matching the query parameters.

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
    res, err := s.Spots.GetAPIV2Spots(ctx, operations.GetAPIV2SpotsRequest{
        OrderByID: operations.GetAPIV2SpotsOrderByIDEnumDesc.ToPointer(),
        PageSize: sdk.Int(102044),
        PageStart: sdk.Int(652790),
    }, operations.GetAPIV2SpotsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spots != nil {
        // handle response
    }
}
```

## GetAPIV2SpotsID

Returns the spot matching the given ID.

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
    res, err := s.Spots.GetAPIV2SpotsID(ctx, operations.GetAPIV2SpotsIDRequest{
        ID: 208876,
    }, operations.GetAPIV2SpotsIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spot != nil {
        // handle response
    }
}
```

## PostAPIV2Spots

Creates a new spot.

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
    res, err := s.Spots.PostAPIV2Spots(ctx, operations.PostAPIV2SpotsRequestBody{
        CdDriveURI: "culpa",
        Name: "Jaime O'Hara",
        Notes: "commodi",
    }, operations.PostAPIV2SpotsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spot != nil {
        // handle response
    }
}
```
