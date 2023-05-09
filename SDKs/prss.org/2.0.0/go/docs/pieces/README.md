# Pieces

## Overview

Pieces define specific story or song level metadata within an episode and segment. For example, an 18 minute audio segment may be composed of multiple 2 or 3 minute pieces.

### Available Operations

* [DeleteAPIV2PiecesID](#deleteapiv2piecesid) - Deletes the piece with the given ID.
* [GetAPIV2Pieces](#getapiv2pieces) - Returns the pieces matching the query parameters.
* [GetAPIV2PiecesID](#getapiv2piecesid) - Returns the piece matching the given ID.
* [PostAPIV2Pieces](#postapiv2pieces) - Create a new piece.

## DeleteAPIV2PiecesID

Deletes the piece with the given ID.

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
    res, err := s.Pieces.DeleteAPIV2PiecesID(ctx, operations.DeleteAPIV2PiecesIDRequest{
        ID: 521848,
    }, operations.DeleteAPIV2PiecesIDSecurity{
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

## GetAPIV2Pieces

Returns the pieces matching the query parameters.

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
    res, err := s.Pieces.GetAPIV2Pieces(ctx, operations.GetAPIV2PiecesRequest{
        EpisodeID: 105907,
    }, operations.GetAPIV2PiecesSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pieces != nil {
        // handle response
    }
}
```

## GetAPIV2PiecesID

Returns the piece matching the given ID.

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
    res, err := s.Pieces.GetAPIV2PiecesID(ctx, operations.GetAPIV2PiecesIDRequest{
        ID: 414662,
    }, operations.GetAPIV2PiecesIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Piece != nil {
        // handle response
    }
}
```

## PostAPIV2Pieces

Create a new piece.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Pieces.PostAPIV2Pieces(ctx, shared.PieceInput{
        Contributor: sdk.String("molestiae"),
        Description: sdk.String("modi"),
        EpisodeID: 186332,
        FullDescription: sdk.String("impedit"),
        ImageCdDriveURI: sdk.String("cum"),
        ImageFileName: sdk.String("esse"),
        ImageFileSize: sdk.Int64(216550),
        ImageOriginalFileName: sdk.String("excepturi"),
        RelativeEndTime: 135218,
        RelativeStartTime: 18789,
        SegmentNumber: sdk.Int(324141),
        Title: "Miss",
    }, operations.PostAPIV2PiecesSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Piece != nil {
        // handle response
    }
}
```
