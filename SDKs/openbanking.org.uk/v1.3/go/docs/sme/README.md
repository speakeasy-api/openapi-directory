# Sme

## Overview

Endpoint for getting Unsecured SME Loan data

### Available Operations

* [GetUnsecuredSmeLoans](#getunsecuredsmeloans) - Gets a list of all `Unsercured SME Lending` objects.
* [HeadUnsecuredSmeLoans](#headunsecuredsmeloans) - Gets header information on the current set of `Unsercured SME Lending` data

## GetUnsecuredSmeLoans

Gets a list of all `Unsercured SME Lending` objects.

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
    res, err := s.Sme.GetUnsecuredSmeLoans(ctx, operations.GetUnsecuredSmeLoansRequest{
        IfModifiedSince: sdk.String("voluptatum"),
        IfNoneMatch: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
}
```

## HeadUnsecuredSmeLoans

Gets header information on the current set of `Unsercured SME Lending` data

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
    res, err := s.Sme.HeadUnsecuredSmeLoans(ctx, operations.HeadUnsecuredSmeLoansRequest{
        IfModifiedSince: sdk.String("excepturi"),
        IfNoneMatch: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
