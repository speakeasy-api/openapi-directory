# Atm

## Overview

Endpoint for getting ATM data

### Available Operations

* [GetAtms](#getatms) - Gets a list of all `ATM` objects.
* [HeadAtms](#headatms) - Gets header information on the current set of `ATM` data

## GetAtms

Gets a list of all `ATM` objects.

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
    res, err := s.Atm.GetAtms(ctx, operations.GetAtmsRequest{
        IfModifiedSince: sdk.String("distinctio"),
        IfNoneMatch: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```

## HeadAtms

Gets header information on the current set of `ATM` data

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
    res, err := s.Atm.HeadAtms(ctx, operations.HeadAtmsRequest{
        IfModifiedSince: sdk.String("unde"),
        IfNoneMatch: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
