# Tags

## Overview

tags


### Available Operations

* [CreateTag](#createtag) - Create a New Tag
* [DeleteTag](#deletetag) - Delete Tag
* [ListTags](#listtags) - Get Tags
* [RenameTag](#renametag) - Update Tag Name

## CreateTag

Create a new Tag for customizing how you track your shipments

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.CreateTag(ctx, operations.CreateTagRequest{
        TagName: "Fragile",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTagResponseBody != nil {
        // handle response
    }
}
```

## DeleteTag

Delete a tag that is no longer needed

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.DeleteTag(ctx, operations.DeleteTagRequest{
        TagName: "Fragile",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```

## ListTags

Get a list of all tags associated with an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.ListTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsResponseBody != nil {
        // handle response
    }
}
```

## RenameTag

Change a tag name while still keeping the relevant shipments attached to it

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.RenameTag(ctx, operations.RenameTagRequest{
        NewTagName: "Fragile",
        TagName: "Fragile",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponseBody != nil {
        // handle response
    }
}
```
