# Bca

## Overview

Endpoint for getting Business Current Account data

### Available Operations

* [GetBusinessCurrentAccounts](#getbusinesscurrentaccounts) - Gets a list of all `Branch Current Account` objects.
* [HeadBusinessCurrentAccounts](#headbusinesscurrentaccounts) - Gets header information on the current set of `Business Current Account` data

## GetBusinessCurrentAccounts

Gets a list of all `Branch Current Account` objects.

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
    res, err := s.Bca.GetBusinessCurrentAccounts(ctx, operations.GetBusinessCurrentAccountsRequest{
        IfModifiedSince: sdk.String("corrupti"),
        IfNoneMatch: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```

## HeadBusinessCurrentAccounts

Gets header information on the current set of `Business Current Account` data

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
    res, err := s.Bca.HeadBusinessCurrentAccounts(ctx, operations.HeadBusinessCurrentAccountsRequest{
        IfModifiedSince: sdk.String("vel"),
        IfNoneMatch: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
