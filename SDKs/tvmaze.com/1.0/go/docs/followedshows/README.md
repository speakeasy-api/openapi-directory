# FollowedShows

### Available Operations

* [DeleteUserFollowsShowsShowID](#deleteuserfollowsshowsshowid) - Unfollow a show
* [GetUserFollowsShows](#getuserfollowsshows) - List the followed shows
* [GetUserFollowsShowsShowID](#getuserfollowsshowsshowid) - Check if a show is followed
* [PutUserFollowsShowsShowID](#putuserfollowsshowsshowid) - Follow a show

## DeleteUserFollowsShowsShowID

Unfollow a show

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
    res, err := s.FollowedShows.DeleteUserFollowsShowsShowID(ctx, operations.DeleteUserFollowsShowsShowIDRequest{
        ShowID: 437587,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserFollowsShows

List the followed shows

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
    res, err := s.FollowedShows.GetUserFollowsShows(ctx, operations.GetUserFollowsShowsRequest{
        Embed: operations.GetUserFollowsShowsEmbedEnumShow.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShowFollows != nil {
        // handle response
    }
}
```

## GetUserFollowsShowsShowID

Check if a show is followed

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
    res, err := s.FollowedShows.GetUserFollowsShowsShowID(ctx, operations.GetUserFollowsShowsShowIDRequest{
        ShowID: 297534,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShowFollow != nil {
        // handle response
    }
}
```

## PutUserFollowsShowsShowID

Follow a show

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
    res, err := s.FollowedShows.PutUserFollowsShowsShowID(ctx, operations.PutUserFollowsShowsShowIDRequest{
        ShowID: 891773,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShowFollow != nil {
        // handle response
    }
}
```
