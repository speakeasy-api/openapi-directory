# Pca

## Overview

Endpoint for getting Personal Current Account data

### Available Operations

* [GetPersonalCurrentAccounts](#getpersonalcurrentaccounts) - Gets a list of all `Personal Current Account` objects.
* [HeadPersonalCurrentAccounts](#headpersonalcurrentaccounts) - Gets header information on the current set of `Personal Current Account` data

## GetPersonalCurrentAccounts

Gets a list of all `Personal Current Account` objects.

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
    res, err := s.Pca.GetPersonalCurrentAccounts(ctx, operations.GetPersonalCurrentAccountsRequest{
        IfModifiedSince: sdk.String("suscipit"),
        IfNoneMatch: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```

## HeadPersonalCurrentAccounts

Gets header information on the current set of `Personal Current Account` data

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
    res, err := s.Pca.HeadPersonalCurrentAccounts(ctx, operations.HeadPersonalCurrentAccountsRequest{
        IfModifiedSince: sdk.String("minus"),
        IfNoneMatch: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
