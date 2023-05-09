# Individual

## Overview

Individual humans (including patients), or organisms

### Available Operations

* [GetIndividual](#getindividual) - Returns list of matches
* [GetPedigree](#getpedigree) - Returns list of matches

## GetIndividual

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
    res, err := s.Individual.GetIndividual(ctx, operations.GetIndividualRequest{
        ID: "2d025292-70b8-4d57-a2dd-895b8bcf24db",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetPedigree

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
    res, err := s.Individual.GetPedigree(ctx, operations.GetPedigreeRequest{
        ID: "95969335-2f74-4533-994d-78de3b6e9389",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```
