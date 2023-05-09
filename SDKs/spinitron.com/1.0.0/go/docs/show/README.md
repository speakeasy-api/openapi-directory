# Show

### Available Operations

* [GetShows](#getshows) - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* [GetShowsID](#getshowsid) - Get a Show by id

## GetShows

**Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
Thus scheduled shows have occurences that, for example, may be displayed in a calendar.

In the response, `items` is an array of objects representing occurences of scheduled shows.

You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
included in the reponse.

`itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
{start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
is included.

If the request omits the {start} parameter, the server sets its value to the current time so that the filter
range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
otherwise it is *unbounded*.

For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
difference between objects in `items` representing a given show will be the `start` field value.

For an unbounded request, `items` includes *only one* occurence per show, specifically, the
next occurrence after {start} of all shows occuring after {start}.

Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
of shows expanded into occurrences by thir shedules and repetitions.

Objects in `items` are ordered first by `datetime` and then by `id`.


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
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Show.GetShows(ctx, operations.GetShowsRequest{
        Count: sdk.Int64(456150),
        End: types.MustTimeFromString("2022-06-07T12:31:06.574Z"),
        Expand: []string{
            "perferendis",
        },
        Fields: []string{
            "natus",
            "sed",
        },
        Page: sdk.Int64(612096),
        Start: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetShows200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetShowsID

The response object represents the next occurence of the show specified by {id}.

Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.


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
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Show.GetShowsID(ctx, operations.GetShowsIDRequest{
        Expand: []string{
            "hic",
            "saepe",
        },
        Fields: []string{
            "in",
            "corporis",
            "iste",
        },
        ID: 437032,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Show != nil {
        // handle response
    }
}
```
