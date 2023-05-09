# NumberFacts

## Overview

Get random interesting fact about a given number.

### Available Operations

* [GetNumbersFact](#getnumbersfact) - Get a random fact about a number

## GetNumbersFact

Get a random fact about a number

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
    res, err := s.NumberFacts.GetNumbersFact(ctx, operations.GetNumbersFactRequest{
        Number: 479977,
    }, operations.GetNumbersFactSecurity{
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
