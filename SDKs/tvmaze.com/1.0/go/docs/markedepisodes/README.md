# MarkedEpisodes

### Available Operations

* [DeleteUserEpisodesEpisodeID](#deleteuserepisodesepisodeid) - Unmark an episode
* [GetUserEpisodes](#getuserepisodes) - List the marked episodes
* [GetUserEpisodesEpisodeID](#getuserepisodesepisodeid) - Check if an episode is marked
* [PutUserEpisodesEpisodeID](#putuserepisodesepisodeid) - Mark an episode

## DeleteUserEpisodesEpisodeID

Unmark an episode

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
    res, err := s.MarkedEpisodes.DeleteUserEpisodesEpisodeID(ctx, operations.DeleteUserEpisodesEpisodeIDRequest{
        EpisodeID: 383441,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserEpisodes

List the marked episodes

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
    res, err := s.MarkedEpisodes.GetUserEpisodes(ctx, operations.GetUserEpisodesRequest{
        ShowID: sdk.Int64(477665),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkedEpisodes != nil {
        // handle response
    }
}
```

## GetUserEpisodesEpisodeID

Check if an episode is marked

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
    res, err := s.MarkedEpisodes.GetUserEpisodesEpisodeID(ctx, operations.GetUserEpisodesEpisodeIDRequest{
        EpisodeID: 791725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkedEpisode != nil {
        // handle response
    }
}
```

## PutUserEpisodesEpisodeID

Set `marked_at` to `NULL` or leave it out to use the current time.

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
    res, err := s.MarkedEpisodes.PutUserEpisodesEpisodeID(ctx, operations.PutUserEpisodesEpisodeIDRequest{
        MarkedEpisodeInput: &shared.MarkedEpisodeInput{
            Embedded: &shared.MarkedEpisodeEmbedded{
                Episode: map[string]interface{}{
                    "voluptatum": "iusto",
                    "excepturi": "nisi",
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
            },
            MarkedAt: sdk.Int64(87129),
            Type: sdk.String("deserunt"),
        },
        EpisodeID: 20218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkedEpisode != nil {
        // handle response
    }
}
```
