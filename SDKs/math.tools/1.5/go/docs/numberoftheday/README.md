# NumberOfTheDay

## Overview

Number of the day. This API is free (rate limited).

### Available Operations

* [GetNumbersNod](#getnumbersnod) - Get the number of the day for current day

## GetNumbersNod

Get the number of the day for current day

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
    res, err := s.NumberOfTheDay.GetNumbersNod(ctx, operations.GetNumbersNodSecurity{
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
