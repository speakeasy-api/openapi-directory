# SDK

## Overview

The Media API can be used to query, download and delete media items such as audio files for use with other Nexmo APIs.

### Available Operations

* [DeleteAMediaItem](#deleteamediaitem) - Delete a media item
* [ListAndSearchMediaItems](#listandsearchmediaitems) - List and search media items
* [RetrieveAMediaItem](#retrieveamediaitem) - Retrieve a media item
* [UpdateAMediaItem](#updateamediaitem) - Update a media item

## DeleteAMediaItem

Delete a previously created media item by ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteAMediaItem(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListAndSearchMediaItems

Retrieve information about multiple media items with the ability to search and paginate.

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
    res, err := s.SDK.ListAndSearchMediaItems(ctx, operations.ListAndSearchMediaItemsRequest{
        EndTime: sdk.String("2020-01-01T14:00:00.000Z"),
        Order: operations.ListAndSearchMediaItemsOrderEnumAscending.ToPointer(),
        PageIndex: sdk.Int64(1),
        PageSize: sdk.Int64(50),
        StartTime: sdk.String("2020-01-01T14:00:00.000Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAndSearchMediaItems200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RetrieveAMediaItem

Retrieve information about a single media item

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.RetrieveAMediaItem(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## UpdateAMediaItem

Update a previously created media item by ID.

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
    res, err := s.SDK.UpdateAMediaItem(ctx, operations.UpdateAMediaItemRequestBody{
        Description: sdk.String("This is a very important recording. Do not delete."),
        MaxDownloadsAllowed: sdk.Int64(100),
        MetadataPrimary: sdk.String("foo,bar"),
        MetadataSecondary: sdk.String("123"),
        MimeType: sdk.String("audio/vnd.wave"),
        Public: sdk.Bool(true),
        Title: sdk.String("Very important recording"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
