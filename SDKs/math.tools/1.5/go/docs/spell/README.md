# Spell

## Overview

Spell out a number ordinal, cardinal or currency. This API is free (rate limited).

### Available Operations

* [GetNumbersCardinal](#getnumberscardinal) - Get the cardinal of the given number
* [GetNumbersCurrency](#getnumberscurrency) - Spells out the number as a currency
* [GetNumbersOrdinal](#getnumbersordinal) - Get the ordinal of the given number

## GetNumbersCardinal

Get the cardinal of the given number

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
    res, err := s.Spell.GetNumbersCardinal(ctx, operations.GetNumbersCardinalRequest{
        Language: sdk.String("maiores"),
        Number: sdk.Int64(473608),
    }, operations.GetNumbersCardinalSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersCurrency

Spells out the number as a currency

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
    res, err := s.Spell.GetNumbersCurrency(ctx, operations.GetNumbersCurrencyRequest{
        Language: sdk.String("quod"),
        Number: sdk.Int64(800911),
    }, operations.GetNumbersCurrencySecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNumbersOrdinal

Get the ordinal of the given number

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
    res, err := s.Spell.GetNumbersOrdinal(ctx, operations.GetNumbersOrdinalRequest{
        Number: sdk.Int64(461479),
    }, operations.GetNumbersOrdinalSecurity{
        XMathtoolsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
