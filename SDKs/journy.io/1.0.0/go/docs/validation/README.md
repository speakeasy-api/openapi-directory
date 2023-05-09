# Validation

## Overview

Endpoints for validating API keys.

### Available Operations

* [GetValidity](#getvalidity) - Validate API key

## GetValidity

Endpoint used to test the validity and some basic information about a specific API Key.

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
    res, err := s.Validation.GetValidity(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetValidity200ApplicationJSONObject != nil {
        // handle response
    }
}
```
