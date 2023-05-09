# UserMediaLists

## Overview

Get media from user generated lists.

### Available Operations

* [GetResourcesUserMediaListsIDJSON](#getresourcesusermedialistsidjson) - Get UserMediaList by ID

## GetResourcesUserMediaListsIDJSON

Get a specific user media list.

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
    res, err := s.UserMediaLists.GetResourcesUserMediaListsIDJSON(ctx, operations.GetResourcesUserMediaListsIDJSONRequest{
        DisplayMethod: sdk.String("molestias"),
        ID: 566602,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```
