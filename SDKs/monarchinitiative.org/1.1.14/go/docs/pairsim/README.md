# PairSim

## Overview

pairwise similarity between two entities

### Available Operations

* [GetPairSimJaccardResource](#getpairsimjaccardresource) - Get pairwise similarity

## GetPairSimJaccardResource

Get pairwise similarity

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
    res, err := s.PairSim.GetPairSimJaccardResource(ctx, operations.GetPairSimJaccardResourceRequest{
        Id1: "nemo",
        Id2: "est",
        ObjectCategory: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
