# Ibanapi

## Overview

API Endpoints of IBANAPI

### Available Operations

* [GetBalance](#getbalance) - Get Account Balance
* [ValidateIBAN](#validateiban) - Validate IBAN
* [ValidateIBANBasic](#validateibanbasic) - Validate IBAN Basic

## GetBalance

Returns the account balance and expiry

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
    res, err := s.Ibanapi.GetBalance(ctx, operations.GetBalanceSecurity{
        APIKeySecurity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BalanceResponse != nil {
        // handle response
    }
}
```

## ValidateIBAN

Returns the validation results

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
    res, err := s.Ibanapi.ValidateIBAN(ctx, operations.ValidateIBANRequest{
        Iban: "corrupti",
    }, operations.ValidateIBANSecurity{
        APIKeySecurity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IBANResult != nil {
        // handle response
    }
}
```

## ValidateIBANBasic

Returns the basic validation results

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
    res, err := s.Ibanapi.ValidateIBANBasic(ctx, operations.ValidateIBANBasicRequest{
        Iban: "provident",
    }, operations.ValidateIBANBasicSecurity{
        APIKeySecurity: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IBANResultBasic != nil {
        // handle response
    }
}
```
