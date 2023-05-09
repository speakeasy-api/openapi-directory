# Conversation

## Overview

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

### Available Operations

* [GetConversations](#getconversations) - List Conversations

## GetConversations

Please note that not all data is available in the list endpoint. Once 
you've identified the conversation you need to work with, use the 
[GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Conversation.GetConversations(ctx, operations.GetConversationsRequest{
        Cursor: sdk.String("corrupti"),
        DateEnd: sdk.String("illum"),
        DateStart: sdk.String("vel"),
        Order: shared.OrderEnumDesc.ToPointer(),
        PageSize: sdk.Int64(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConversations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
