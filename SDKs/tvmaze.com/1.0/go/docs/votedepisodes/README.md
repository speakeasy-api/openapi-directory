# VotedEpisodes

### Available Operations

* [DeleteUserVotesEpisodesEpisodeID](#deleteuservotesepisodesepisodeid) - Remove an episode vote
* [GetUserVotesEpisodes](#getuservotesepisodes) - List the episodes voted for
* [GetUserVotesEpisodesEpisodeID](#getuservotesepisodesepisodeid) - Check if an episode is voted for
* [PutUserVotesEpisodesEpisodeID](#putuservotesepisodesepisodeid) - Vote for an episode

## DeleteUserVotesEpisodesEpisodeID

Remove an episode vote

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
    res, err := s.VotedEpisodes.DeleteUserVotesEpisodesEpisodeID(ctx, operations.DeleteUserVotesEpisodesEpisodeIDRequest{
        EpisodeID: 750686,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserVotesEpisodes

List the episodes voted for

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
    res, err := s.VotedEpisodes.GetUserVotesEpisodes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.EpisodeVotes != nil {
        // handle response
    }
}
```

## GetUserVotesEpisodesEpisodeID

Check if an episode is voted for

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
    res, err := s.VotedEpisodes.GetUserVotesEpisodesEpisodeID(ctx, operations.GetUserVotesEpisodesEpisodeIDRequest{
        EpisodeID: 315428,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EpisodeVote != nil {
        // handle response
    }
}
```

## PutUserVotesEpisodesEpisodeID

Vote for an episode

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
    res, err := s.VotedEpisodes.PutUserVotesEpisodesEpisodeID(ctx, operations.PutUserVotesEpisodesEpisodeIDRequest{
        EpisodeVoteInput: &shared.EpisodeVoteInput{
            Vote: sdk.Int64(607831),
        },
        EpisodeID: 363711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EpisodeVote != nil {
        // handle response
    }
}
```
