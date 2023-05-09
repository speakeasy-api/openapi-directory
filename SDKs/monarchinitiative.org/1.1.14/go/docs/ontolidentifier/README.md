# OntolIdentifier

## Overview

Retrieve IDs for labels

### Available Operations

* [GetOntolIdentifierResource](#getontolidentifierresource) - Fetches a map from CURIEs/IDs to labels
* [PostOntolIdentifierResource](#postontolidentifierresource) - Fetches a map from CURIEs/IDs to labels

## GetOntolIdentifierResource

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
    res, err := s.OntolIdentifier.GetOntolIdentifierResource(ctx, operations.GetOntolIdentifierResourceRequest{
        Label: []string{
            "cum",
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

## PostOntolIdentifierResource

Takes 'label' list argument either as a querystring argument or as a key
in the POST body when content-type is application/json.

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
    res, err := s.OntolIdentifier.PostOntolIdentifierResource(ctx, operations.PostOntolIdentifierResourceRequest{
        Label: []string{
            "dolores",
            "enim",
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
