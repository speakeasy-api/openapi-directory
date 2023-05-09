# Segments

## Overview

Segments include the audio content and related information such as the in-cue and out-cue.

### Available Operations

* [DeleteAPIV2SegmentsID](#deleteapiv2segmentsid) - Deletes the segment with the given ID.
* [GetAPIV2Segments](#getapiv2segments) - Returns the segments matching the query parameters.
* [GetAPIV2SegmentsID](#getapiv2segmentsid) - Returns the segment matching the given ID.
* [GetAPIV2SegmentsIDContent](#getapiv2segmentsidcontent) - UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
* [PostAPIV2Segments](#postapiv2segments) - Creates a new segment.

## DeleteAPIV2SegmentsID

Deletes the segment with the given ID.

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
    res, err := s.Segments.DeleteAPIV2SegmentsID(ctx, operations.DeleteAPIV2SegmentsIDRequest{
        ID: 449950,
    }, operations.DeleteAPIV2SegmentsIDSecurity{
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

## GetAPIV2Segments

Returns the segments matching the query parameters.

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
    res, err := s.Segments.GetAPIV2Segments(ctx, operations.GetAPIV2SegmentsRequest{
        EpisodeID: 359508,
        OrderByID: operations.GetAPIV2SegmentsOrderByIDEnumDesc.ToPointer(),
        PageSize: sdk.Int(437032),
        PageStart: sdk.Int(902349),
        SegmentNumber: sdk.Int(697631),
    }, operations.GetAPIV2SegmentsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Segments != nil {
        // handle response
    }
}
```

## GetAPIV2SegmentsID

Returns the segment matching the given ID.

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
    res, err := s.Segments.GetAPIV2SegmentsID(ctx, operations.GetAPIV2SegmentsIDRequest{
        ID: 99280,
    }, operations.GetAPIV2SegmentsIDSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Segment != nil {
        // handle response
    }
}
```

## GetAPIV2SegmentsIDContent

UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.

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
    res, err := s.Segments.GetAPIV2SegmentsIDContent(ctx, operations.GetAPIV2SegmentsIDContentRequest{
        ID: 60225,
    }, operations.GetAPIV2SegmentsIDContentSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2SegmentsIDContent200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## PostAPIV2Segments

Creates a new segment.

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
    res, err := s.Segments.PostAPIV2Segments(ctx, operations.PostAPIV2SegmentsRequestBody{
        CdDriveURI: "reiciendis",
        EpisodeID: 666767,
        InCue: sdk.String("mollitia"),
        OutCue: sdk.String("laborum"),
        SegmentNumber: 170909,
    }, operations.PostAPIV2SegmentsSecurity{
        CdOauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Segment != nil {
        // handle response
    }
}
```
