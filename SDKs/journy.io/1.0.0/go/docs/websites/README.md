# Websites

## Overview

Endpoints for managing websites.

### Available Operations

* [GetTrackingSnippet](#gettrackingsnippet) - Get snippet for a website

## GetTrackingSnippet

Endpoint used to get a snippet for a website.

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
    res, err := s.Websites.GetTrackingSnippet(ctx, operations.GetTrackingSnippetRequest{
        Domain: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTrackingSnippet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
