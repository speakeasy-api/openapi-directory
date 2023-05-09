# Sessions

### Available Operations

* [SessionIDDelete](#sessioniddelete) - Sessions: Delete by Id
* [SessionIDGet](#sessionidget) - Sessions: Get
* [StoryIDSessionPost](#storyidsessionpost) - Sessions: Create a Session
* [StoryIDSessionsGet](#storyidsessionsget) - Sessions: List Story Sessions

## SessionIDDelete

Remove a session and dependant data.

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
    res, err := s.Sessions.SessionIDDelete(ctx, operations.SessionIDDeleteRequest{
        SessionID: "d5f0d30c-5fbb-4258-b053-202c73d5fe9b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SessionIDGet

Get session metadata

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
    res, err := s.Sessions.SessionIDGet(ctx, operations.SessionIDGetRequest{
        IncludeRelationships: sdk.Bool(false),
        SessionID: "90c28909-b3fe-449a-8d9c-bf48633323f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Session != nil {
        // handle response
    }
}
```

## StoryIDSessionPost

Create a new session

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
    res, err := s.Sessions.StoryIDSessionPost(ctx, operations.StoryIDSessionPostRequest{
        CreateSessionRequest: shared.CreateSessionRequest{
            CollaboratorUserID: sdk.String("b77f3a41-0067-44eb-b692-80d1ba77a89e"),
            Host: sdk.String("distinctio"),
        },
        ID: "f737ae42-03ce-45e6-a95d-8a0d446ce2af",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Session != nil {
        // handle response
    }
}
```

## StoryIDSessionsGet

Get a list of sessions asscoaited with this story

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
    res, err := s.Sessions.StoryIDSessionsGet(ctx, operations.StoryIDSessionsGetRequest{
        ID: "7a73cf3b-e453-4f87-8b32-6b5a73429cdb",
        IncludeRelationships: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sessions != nil {
        // handle response
    }
}
```
