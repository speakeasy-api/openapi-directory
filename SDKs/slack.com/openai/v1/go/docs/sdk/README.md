# SDK

## Overview

A plugin that allows users to interact with Slack using ChatGPT

### Available Operations

* [AiAlphaSearchMessages](#aialphasearchmessages) - Search for messages matching a query

## AiAlphaSearchMessages

Search for messages matching a query

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.AiAlphaSearchMessages(ctx, shared.SearchRequest{
        Query: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AiAlphaSearchMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```
