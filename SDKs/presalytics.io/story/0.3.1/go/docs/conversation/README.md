# Conversation

### Available Operations

* [StoryIDMessagesGet](#storyidmessagesget) - Conversation: List Conversation Messages
* [StoryIDMessagesPost](#storyidmessagespost) - Conversation: Send a Message

## StoryIDMessagesGet

Get a list of messages that have been send in this story

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
    res, err := s.Conversation.StoryIDMessagesGet(ctx, operations.StoryIDMessagesGetRequest{
        ID: "2c595590-7aff-41a3-a2fa-9467739251aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Messages != nil {
        // handle response
    }
}
```

## StoryIDMessagesPost

Add a message to the Story's conversation

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
    res, err := s.Conversation.StoryIDMessagesPost(ctx, operations.StoryIDMessagesPostRequest{
        RequestBody: "enim",
        ID: "2c3f5ad0-19da-41ff-a78f-097b0074f154",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
