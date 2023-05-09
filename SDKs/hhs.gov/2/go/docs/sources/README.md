# Sources

## Overview

Information about tags

### Available Operations

* [GetResourcesSourcesJSON](#getresourcessourcesjson) - Get Sources
* [GetResourcesSourcesIDJSON](#getresourcessourcesidjson) - Get Source by ID
* [GetResourcesSourcesIDSyndicateFormat](#getresourcessourcesidsyndicateformat) - Get MediaItems for Source

## GetResourcesSourcesJSON

Source Listings

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
    res, err := s.Sources.GetResourcesSourcesJSON(ctx, operations.GetResourcesSourcesJSONRequest{
        Max: sdk.Int(368725),
        Offset: sdk.Int(662527),
        Sort: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesSourcesIDJSON

Information about a specific source.

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
    res, err := s.Sources.GetResourcesSourcesIDJSON(ctx, operations.GetResourcesSourcesIDJSONRequest{
        ID: 13571,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesSourcesIDSyndicateFormat

MediaItem

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
    res, err := s.Sources.GetResourcesSourcesIDSyndicateFormat(ctx, operations.GetResourcesSourcesIDSyndicateFormatRequest{
        DisplayMethod: sdk.String("quasi"),
        Format: "error",
        ID: 837945,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```
