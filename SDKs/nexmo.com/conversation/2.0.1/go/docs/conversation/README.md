# Conversation

## Overview

A conversation is a shared core component that Vonage APIs rely on. Conversations happen over multiple mediums and and can have associated Users through Memberships.

### Available Operations

* [CreateConversation](#createconversation) - Create a conversation
* [DeleteConversation](#deleteconversation) - Delete a conversation
* [~~ListConversations~~](#listconversations) - List conversations :warning: **Deprecated**
* [RecordConversation](#recordconversation) - Record a conversation
* [ReplaceConversation](#replaceconversation) - Update a conversation
* [RetrieveConversation](#retrieveconversation) - Retrieve a conversation

## CreateConversation

Create a conversation

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.CreateConversation(ctx, operations.CreateConversationRequestBody{
        DisplayName: sdk.String("Customer Chat"),
        ImageURL: sdk.String("https://example.com/image.png"),
        Name: sdk.String("customer_chat"),
        Properties: &shared.ConversationProperties{
            TTL: sdk.Float64(60),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConversation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteConversation

Delete a conversation

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.DeleteConversation(ctx, operations.DeleteConversationRequest{
        ConversationID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConversation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ~~ListConversations~~

This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).

List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.ListConversations(ctx, operations.ListConversationsRequest{
        DateEnd: sdk.String("2018-01-01 12:00:00"),
        DateStart: sdk.String("2018-01-01 10:00:00"),
        Order: shared.OrderEnumAscUpper.ToPointer(),
        PageSize: sdk.Float64(50),
        RecordIndex: sdk.Float64(7151.9),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RecordConversation

Record a conversation

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.RecordConversation(ctx, operations.RecordConversationRequest{
        RequestBody: &operations.RecordConversationRequestBody{
            Action: shared.ActionEnumStart,
            EventMethod: sdk.String("POST"),
            EventURL: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            Format: shared.FormatEnumMp3.ToPointer(),
            Split: sdk.String("conversation"),
        },
        ConversationID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ReplaceConversation

Update a conversation

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.ReplaceConversation(ctx, operations.ReplaceConversationRequest{
        RequestBody: &operations.ReplaceConversationRequestBody{
            DisplayName: sdk.String("Customer Chat"),
            ImageURL: sdk.String("https://example.com/image.png"),
            Name: sdk.String("customer_chat"),
            Properties: &shared.ConversationProperties{
                TTL: sdk.Float64(60),
            },
        },
        ConversationID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplaceConversation200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RetrieveConversation

Retrieve a conversation

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Conversation.RetrieveConversation(ctx, operations.RetrieveConversationRequest{
        ConversationID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveConversation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
