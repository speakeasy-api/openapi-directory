# Scrobbling

### Available Operations

* [GetScrobbleShowsShowID](#getscrobbleshowsshowid) - List watched and acquired episodes for a show
* [PostScrobbleEpisodes](#postscrobbleepisodes) - Mark episodes as acquired or watched based on their IDs
* [PostScrobbleShows](#postscrobbleshows) - Mark episodes within a show as acquired or watched based on their attributes
* [PutScrobbleEpisodesEpisodeID](#putscrobbleepisodesepisodeid) - Mark an episode as acquired or watched based on its ID

## GetScrobbleShowsShowID

This endpoint can be used by all users, even without premium

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
    res, err := s.Scrobbling.GetScrobbleShowsShowID(ctx, operations.GetScrobbleShowsShowIDRequest{
        Embed: operations.GetScrobbleShowsShowIDEmbedEnumEpisode.ToPointer(),
        ShowID: 368241,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkedEpisodes != nil {
        // handle response
    }
}
```

## PostScrobbleEpisodes

This endpoint can be used by all users, even without premium

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
    res, err := s.Scrobbling.PostScrobbleEpisodes(ctx, []PostScrobbleEpisodesRequestBody{
        operations.PostScrobbleEpisodesRequestBody{
            EpisodeID: sdk.Int64(957156),
            MarkedAt: sdk.Int64(778157),
            Type: sdk.String("odit"),
        },
        operations.PostScrobbleEpisodesRequestBody{
            EpisodeID: sdk.Int64(870013),
            MarkedAt: sdk.Int64(870088),
            Type: sdk.String("maiores"),
        },
        operations.PostScrobbleEpisodesRequestBody{
            EpisodeID: sdk.Int64(473608),
            MarkedAt: sdk.Int64(799159),
            Type: sdk.String("quod"),
        },
        operations.PostScrobbleEpisodesRequestBody{
            EpisodeID: sdk.Int64(461479),
            MarkedAt: sdk.Int64(520478),
            Type: sdk.String("porro"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkResponse != nil {
        // handle response
    }
}
```

## PostScrobbleShows

To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.

This endpoint can be used by all users, even without premium.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Scrobbling.PostScrobbleShows(ctx, operations.PostScrobbleShowsRequest{
        RequestBody: []PostScrobbleShowsRequestBody{
            operations.PostScrobbleShowsRequestBody{
                Airdate: types.MustDateFromString("2022-04-12"),
                Episode: sdk.Int64(639921),
                MarkedAt: sdk.Int64(582020),
                Season: sdk.Int64(143353),
                Type: sdk.String("deleniti"),
            },
            operations.PostScrobbleShowsRequestBody{
                Airdate: types.MustDateFromString("2020-09-22"),
                Episode: sdk.Int64(521848),
                MarkedAt: sdk.Int64(105907),
                Season: sdk.Int64(414662),
                Type: sdk.String("molestiae"),
            },
            operations.PostScrobbleShowsRequestBody{
                Airdate: types.MustDateFromString("2022-10-24"),
                Episode: sdk.Int64(774234),
                MarkedAt: sdk.Int64(736918),
                Season: sdk.Int64(456150),
                Type: sdk.String("ipsum"),
            },
        },
        ImdbID: sdk.Int64(568434),
        ThetvdbID: sdk.Int64(135218),
        TvmazeID: sdk.Int64(18789),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkResponse != nil {
        // handle response
    }
}
```

## PutScrobbleEpisodesEpisodeID

This endpoint can be used by all users, even without premium

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
    res, err := s.Scrobbling.PutScrobbleEpisodesEpisodeID(ctx, operations.PutScrobbleEpisodesEpisodeIDRequest{
        MarkedEpisodeInput: &shared.MarkedEpisodeInput{
            Embedded: &shared.MarkedEpisodeEmbedded{
                Episode: map[string]interface{}{
                    "natus": "sed",
                    "iste": "dolor",
                },
            },
            MarkedAt: sdk.Int64(616934),
            Type: sdk.String("laboriosam"),
        },
        EpisodeID: 943749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MarkedEpisode != nil {
        // handle response
    }
}
```
