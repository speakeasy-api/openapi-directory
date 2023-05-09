# NumberGeneration

## Overview

Generate Random and interesting numbers.

### Available Operations

* [GetNumbersRandom](#getnumbersrandom) - Generate random number(s)

## GetNumbersRandom

Generate random number(s)

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
    res, err := s.NumberGeneration.GetNumbersRandom(ctx, operations.GetNumbersRandomRequest{
        Max: sdk.Int64(568045),
        Min: sdk.Int64(392785),
        Total: sdk.Int64(925597),
    }, operations.GetNumbersRandomSecurity{
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
