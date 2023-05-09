# Hackathons

## Overview

Operations about hackathons

### Available Operations

* [GETHackathonsIDFormat](#gethackathonsidformat) - Return the detail of a given hackathon
* [GETHackathonsComingFormat](#gethackathonscomingformat) - Return a list of coming hackathons

## GETHackathonsIDFormat

Return the detail of a given hackathon

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
    res, err := s.Hackathons.GETHackathonsIDFormat(ctx, operations.GETHackathonsIDFormatRequest{
        ID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETHackathonsComingFormat

Return a list of coming hackathons

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
    res, err := s.Hackathons.GETHackathonsComingFormat(ctx, operations.GETHackathonsComingFormatRequest{
        Page: sdk.Int(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
