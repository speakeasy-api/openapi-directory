# Events

### Available Operations

* [StoryIDEventsGet](#storyideventsget) - Events: List Events
* [StoryIDEventsPost](#storyideventspost) - Events: Manage Events

## StoryIDEventsGet

Get a list of Events available to users of this story

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
    res, err := s.Events.StoryIDEventsGet(ctx, operations.StoryIDEventsGetRequest{
        ID: "71b5e6e1-3b99-4d48-8e1e-91e450ad2abd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## StoryIDEventsPost

Add a message to the Story's conversation

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
    res, err := s.Events.StoryIDEventsPost(ctx, operations.StoryIDEventsPostRequest{
        ID: "44269802-d502-4a94-bb4f-63c969e9a3ef",
        ManageEvent: shared.ManageEvent{
            Action: shared.ManageEventActionEnumChange.ToPointer(),
            ActionParams: map[string]interface{}{
                "in": "illum",
                "maiores": "rerum",
            },
            Name: sdk.String("Valerie Runolfsson"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoryIDEventsPost200ApplicationJSONObject != nil {
        // handle response
    }
}
```
