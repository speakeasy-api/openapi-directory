# Spin

### Available Operations

* [GetSpins](#getspins) - Returns spins optionally filtered by {start} and/or {end} datetimes
* [GetSpinsID](#getspinsid) - Get a Spin by id
* [PostSpins](#postspins) - Log a Spin

## GetSpins

Get Spins optionally filtered by a datetime range. Only past Spins will be returned.


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
    res, err := s.Spin.GetSpins(ctx, operations.GetSpinsRequest{
        Count: sdk.Int64(902349),
        End: types.MustTimeFromString("2022-10-20T12:36:28.767Z"),
        Expand: []string{
            "reiciendis",
        },
        Fields: []string{
            "mollitia",
            "laborum",
            "dolores",
        },
        Page: sdk.Int64(210382),
        PlaylistID: sdk.Int64(358152),
        ShowID: sdk.Int64(128926),
        Start: types.MustTimeFromString("2022-01-20T14:32:34.011Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpins200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpinsID

Get a Spin by id

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
    res, err := s.Spin.GetSpinsID(ctx, operations.GetSpinsIDRequest{
        Expand: []string{
            "nemo",
            "minima",
            "excepturi",
        },
        Fields: []string{
            "iure",
        },
        ID: 634274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spin != nil {
        // handle response
    }
}
```

## PostSpins

An endpoint for automation systems to log spins into the spin table.

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
    res, err := s.Spin.PostSpins(ctx, operations.PostSpinsRequestBody{
        Artist: "doloribus",
        Composer: sdk.String("sapiente"),
        Duration: sdk.Int64(102044),
        Genre: sdk.String("mollitia"),
        Isrc: sdk.String("dolorem"),
        Label: sdk.String("culpa"),
        Live: sdk.Bool(false),
        Release: sdk.String("consequuntur"),
        Song: "repellat",
        Start: types.MustTimeFromString("2021-11-02T05:58:55.429Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Spin != nil {
        // handle response
    }
}
```
