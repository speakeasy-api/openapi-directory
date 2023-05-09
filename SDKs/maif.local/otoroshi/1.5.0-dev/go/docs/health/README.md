# Health

## Overview

Everything about Otoroshi health status

### Available Operations

* [Health](#health) - Return current Otoroshi health

## Health

Import the full state of Otoroshi as a file

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
    res, err := s.Health.Health(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OtoroshiHealth != nil {
        // handle response
    }
}
```
