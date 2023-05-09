# TaggedShows

### Available Operations

* [DeleteUserTagsTagID](#deleteusertagstagid) - Delete a specific tag
* [DeleteUserTagsTagIDShowsShowID](#deleteusertagstagidshowsshowid) - Untag a show
* [GetUserTags](#getusertags) - List all tags
* [GetUserTagsTagIDShows](#getusertagstagidshows) - List all shows under this tag
* [PatchUserTagsTagID](#patchusertagstagid) - Update a specific tag
* [PostUserTags](#postusertags) - Create a new tag
* [PutUserTagsTagIDShowsShowID](#putusertagstagidshowsshowid) - Tag a show

## DeleteUserTagsTagID

Delete a specific tag

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.DeleteUserTagsTagID(ctx, operations.DeleteUserTagsTagIDRequest{
        TagID: 902599,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUserTagsTagIDShowsShowID

Untag a show

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.DeleteUserTagsTagIDShowsShowID(ctx, operations.DeleteUserTagsTagIDShowsShowIDRequest{
        ShowID: 681820,
        TagID: 449950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserTags

List all tags

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.GetUserTags(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## GetUserTagsTagIDShows

List all shows under this tag

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.GetUserTagsTagIDShows(ctx, operations.GetUserTagsTagIDShowsRequest{
        Embed: operations.GetUserTagsTagIDShowsEmbedEnumShow.ToPointer(),
        TagID: 359508,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagInstances != nil {
        // handle response
    }
}
```

## PatchUserTagsTagID

Update a specific tag

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.PatchUserTagsTagID(ctx, operations.PatchUserTagsTagIDRequest{
        TagInput: &shared.TagInput{
            Name: sdk.String("Brad Turcotte Jr."),
        },
        TagID: 969810,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## PostUserTags

Create a new tag

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.PostUserTags(ctx, shared.TagInput{
        Name: sdk.String("Shaun Osinski"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## PutUserTagsTagIDShowsShowID

Tag a show

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TaggedShows.PutUserTagsTagIDShowsShowID(ctx, operations.PutUserTagsTagIDShowsShowIDRequest{
        ShowID: 358152,
        TagID: 128926,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagInstance != nil {
        // handle response
    }
}
```
