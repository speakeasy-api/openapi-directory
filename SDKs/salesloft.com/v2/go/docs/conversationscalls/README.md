# ConversationsCalls

## Overview

Conversations Calls

### Available Operations

* [PostV2ConversationsCalls](#postv2conversationscalls) - Create Conversations Call

## PostV2ConversationsCalls

Enqueue a Conversations Call for processing

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
    res, err := s.ConversationsCalls.PostV2ConversationsCalls(ctx, operations.PostV2ConversationsCallsRequestBody{
        CallCreatedAt: sdk.String("corrupti"),
        Direction: sdk.String("at"),
        Duration: 6216.93,
        From: "blanditiis",
        Recording: map[string]interface{}{
            "repudiandae": "atque",
            "atque": "sunt",
        },
        To: "recusandae",
        UserGUID: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
