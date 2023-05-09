# Stats

## Overview

Stats on Near Earth Object data sets

### Available Operations

* [RetrieveCurrentNeoStatistics](#retrievecurrentneostatistics) - Get the Near Earth Object data set totals

## RetrieveCurrentNeoStatistics

retrieveCurrentNeoStatistics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Stats.RetrieveCurrentNeoStatistics(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Statistics != nil {
        // handle response
    }
}
```
