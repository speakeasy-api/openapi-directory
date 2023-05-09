# Schemas

### Available Operations

* [StoryOutlineSchema](#storyoutlineschema) - Story Outline Schema

## StoryOutlineSchema

Json Schema for validating Story Outline objects

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
    res, err := s.Schemas.StoryOutlineSchema(ctx, operations.StoryOutlineSchemaRequest{
        SchemaVersion: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
