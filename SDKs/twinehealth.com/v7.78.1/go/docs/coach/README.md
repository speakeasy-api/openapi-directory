# Coach

## Overview

A coach is a person that supports a patient

### Available Operations

* [FetchCoach](#fetchcoach) - Get a coach
* [FetchCoaches](#fetchcoaches) - List coaches

## FetchCoach

Get a coach record by id.

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
    res, err := s.Coach.FetchCoach(ctx, operations.FetchCoachRequest{
        ID: "aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCoachResponse != nil {
        // handle response
    }
}
```

## FetchCoaches

Get a list of coaches matching the specified filters.

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
    res, err := s.Coach.FetchCoaches(ctx, operations.FetchCoachesRequest{
        FilterGroups: sdk.String("inventore"),
        FilterOrganization: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCoachesResponse != nil {
        // handle response
    }
}
```
