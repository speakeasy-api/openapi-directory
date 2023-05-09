# VotedShows

### Available Operations

* [DeleteUserVotesShowsShowID](#deleteuservotesshowsshowid) - Remove a show vote
* [GetUserVotesShows](#getuservotesshows) - List the shows voted for
* [GetUserVotesShowsShowID](#getuservotesshowsshowid) - Check if a show is voted for
* [PutUserVotesShowsShowID](#putuservotesshowsshowid) - Vote for a show

## DeleteUserVotesShowsShowID

Remove a show vote

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
    res, err := s.VotedShows.DeleteUserVotesShowsShowID(ctx, operations.DeleteUserVotesShowsShowIDRequest{
        ShowID: 325047,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserVotesShows

List the shows voted for

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
    res, err := s.VotedShows.GetUserVotesShows(ctx, operations.GetUserVotesShowsRequest{
        Embed: operations.GetUserVotesShowsEmbedEnumShow.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShowVotes != nil {
        // handle response
    }
}
```

## GetUserVotesShowsShowID

Check if a show is voted for

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
    res, err := s.VotedShows.GetUserVotesShowsShowID(ctx, operations.GetUserVotesShowsShowIDRequest{
        ShowID: 570197,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShowVote != nil {
        // handle response
    }
}
```

## PutUserVotesShowsShowID

Set `voted_at` to `NULL` or leave it out to use the current time.

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
    res, err := s.VotedShows.PutUserVotesShowsShowID(ctx, operations.PutUserVotesShowsShowIDRequest{
        ShowVoteInput: &shared.ShowVoteInput{
            Vote: sdk.Int64(38425),
        },
        ShowID: 438601,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShowVote != nil {
        // handle response
    }
}
```
