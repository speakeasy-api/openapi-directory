# Search

## Overview

Methods to search for target or diseases.

### Available Operations

* [GetSearch](#getsearch) - Search for a disease or a target

## GetSearch

This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.


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
    res, err := s.Search.GetSearch(ctx, operations.GetSearchRequest{
        Filter: sdk.String("maiores"),
        From: sdk.String("rerum"),
        Q: "dicta",
        Size: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
