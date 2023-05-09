# SDK

## Overview

A plugin that allows the user to capture screenshots of a web page from a URL or HTML using ChatGPT.

### Available Operations

* [RenderSync](#rendersync) - Render a URL as an image or video

## RenderSync

Render a URL as an image or video

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.RenderSync(ctx, shared.RenderRequest{}, operations.RenderSyncSecurity{
        SecretKey: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RenderResponse != nil {
        // handle response
    }
}
```
