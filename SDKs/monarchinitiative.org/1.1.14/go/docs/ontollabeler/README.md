# OntolLabeler

## Overview

Assign labels to IDs

### Available Operations

* [GetOntolLabelerResource](#getontollabelerresource) - Fetches a map from CURIEs/IDs to labels

## GetOntolLabelerResource

Fetches a map from CURIEs/IDs to labels

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
    res, err := s.OntolLabeler.GetOntolLabelerResource(ctx, operations.GetOntolLabelerResourceRequest{
        ID: []string{
            "libero",
            "omnis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
