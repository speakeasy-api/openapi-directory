# GenomeFeatures

## Overview

Operations to retrieve sequence features

### Available Operations

* [GetFeaturesWithinResource](#getfeatureswithinresource) - Returns list of matches

## GetFeaturesWithinResource

Returns list of matches

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
    res, err := s.GenomeFeatures.GetFeaturesWithinResource(ctx, operations.GetFeaturesWithinResourceRequest{
        Begin: "molestiae",
        Build: "optio",
        End: "saepe",
        Reference: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SequenceFeatures != nil {
        // handle response
    }
}
```
