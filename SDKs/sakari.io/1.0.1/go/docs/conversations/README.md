# Conversations

## Overview

Conversations group your message history with each contact into one thread

### Available Operations

* [ConversationsClose](#conversationsclose) - Closes a conversation
* [ConversationsFetch](#conversationsfetch) - Fetch conversation by ID
* [ConversationsFetchAll](#conversationsfetchall) - Fetch conversations

## ConversationsClose

Closes a conversation

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
    res, err := s.Conversations.ConversationsClose(ctx, operations.ConversationsCloseRequest{
        AccountID: "sapiente",
        ConversationID: "architecto",
    }, operations.ConversationsCloseSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationResponse != nil {
        // handle response
    }
}
```

## ConversationsFetch

Fetch conversation by ID

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
    res, err := s.Conversations.ConversationsFetch(ctx, operations.ConversationsFetchRequest{
        AccountID: "mollitia",
        ConversationID: "dolorem",
    }, operations.ConversationsFetchSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationResponse != nil {
        // handle response
    }
}
```

## ConversationsFetchAll

Fetch conversations

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
    res, err := s.Conversations.ConversationsFetchAll(ctx, operations.ConversationsFetchAllRequest{
        AccountID: "culpa",
        Limit: sdk.Int64(161309),
        Offset: sdk.Int64(995300),
    }, operations.ConversationsFetchAllSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsResponse != nil {
        // handle response
    }
}
```
