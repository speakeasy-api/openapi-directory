# Tags

### Available Operations

* [TagsList](#tagslist) - Get a list of tags.
* [TagsRead](#tagsread) - Get details of the tag.

## TagsList

Get a list of tags.

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
    res, err := s.Tags.TagsList(ctx, operations.TagsListRequest{
        Page: sdk.Int64(569101),
        PageSize: sdk.Int64(139972),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TagsRead

Get details of the tag.

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
    res, err := s.Tags.TagsRead(ctx, operations.TagsReadRequest{
        ID: 407183,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagSingle != nil {
        // handle response
    }
}
```
