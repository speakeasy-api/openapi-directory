# BaseConversion

## Overview

Convert from one base to another. This API is free (rate limited).

### Available Operations

* [GetNumbersBase](#getnumbersbase) - Convert a given number from one base to another base
* [GetNumbersBaseBinary](#getnumbersbasebinary) - Convert a given number to binary
* [GetNumbersBaseHex](#getnumbersbasehex) - Convert a given number to hexadecimal
* [GetNumbersBaseOctal](#getnumbersbaseoctal) - Convert a given number to octal

## GetNumbersBase

Convert a given number from one base to another base

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
    res, err := s.BaseConversion.GetNumbersBase(ctx, operations.GetNumbersBaseRequest{
        From: sdk.Int64(844266),
        Number: 602763,
        To: 857946,
    }, operations.GetNumbersBaseSecurity{
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

## GetNumbersBaseBinary

Convert a given number to binary

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
    res, err := s.BaseConversion.GetNumbersBaseBinary(ctx, operations.GetNumbersBaseBinaryRequest{
        From: sdk.Int64(544883),
        Number: 847252,
    }, operations.GetNumbersBaseBinarySecurity{
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

## GetNumbersBaseHex

Convert a given number to hexadecimal

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
    res, err := s.BaseConversion.GetNumbersBaseHex(ctx, operations.GetNumbersBaseHexRequest{
        From: sdk.Int64(423655),
        Number: 623564,
    }, operations.GetNumbersBaseHexSecurity{
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

## GetNumbersBaseOctal

Convert a given number to octal

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
    res, err := s.BaseConversion.GetNumbersBaseOctal(ctx, operations.GetNumbersBaseOctalRequest{
        From: sdk.Int64(645894),
        Number: 384382,
    }, operations.GetNumbersBaseOctalSecurity{
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
