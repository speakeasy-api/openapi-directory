# Segments

## Overview

Endpoints for reading user and account segments

### Available Operations

* [GetAccountSegments](#getaccountsegments) - Get account segments
* [GetUserSegments](#getusersegments) - Get user segments

## GetAccountSegments

Endpoint to list account segments.

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
    res, err := s.Segments.GetAccountSegments(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountSegments200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUserSegments

Endpoint to list user segments.

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
    res, err := s.Segments.GetUserSegments(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUserSegments200ApplicationJSONObject != nil {
        // handle response
    }
}
```
