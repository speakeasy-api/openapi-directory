# NumberSystemsConversion

## Overview

Convert from one number system to another.

### Available Operations

* [GetNumbersNumeralChinese](#getnumbersnumeralchinese) - Convert base 10 representation of a given number to chinese numeral.
* [GetNumbersNumeralEgyptian](#getnumbersnumeralegyptian) - Convert base 10 representation of a given number to egyptian numeral.
* [GetNumbersNumeralRoman](#getnumbersnumeralroman) - Convert base 10 representation of a given number to roman numeral.

## GetNumbersNumeralChinese

Convert base 10 representation of a given number to chinese numeral.

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
    res, err := s.NumberSystemsConversion.GetNumbersNumeralChinese(ctx, operations.GetNumbersNumeralChineseRequest{
        Number: sdk.Int64(836079),
    }, operations.GetNumbersNumeralChineseSecurity{
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

## GetNumbersNumeralEgyptian

Convert base 10 representation of a given number to egyptian numeral.

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
    res, err := s.NumberSystemsConversion.GetNumbersNumeralEgyptian(ctx, operations.GetNumbersNumeralEgyptianRequest{
        Number: sdk.Int64(71036),
    }, operations.GetNumbersNumeralEgyptianSecurity{
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

## GetNumbersNumeralRoman

Convert base 10 representation of a given number to roman numeral.

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
    res, err := s.NumberSystemsConversion.GetNumbersNumeralRoman(ctx, operations.GetNumbersNumeralRomanRequest{
        Number: sdk.Int64(337396),
    }, operations.GetNumbersNumeralRomanSecurity{
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
