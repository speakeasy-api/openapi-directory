# Genres

### Available Operations

* [GenresList](#genreslist) - Get a list of video game genres.
* [GenresRead](#genresread) - Get details of the genre.

## GenresList

Get a list of video game genres.

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
    res, err := s.Genres.GenresList(ctx, operations.GenresListRequest{
        Ordering: sdk.String("expedita"),
        Page: sdk.Int64(469249),
        PageSize: sdk.Int64(998848),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenresList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GenresRead

Get details of the genre.

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
    res, err := s.Genres.GenresRead(ctx, operations.GenresReadRequest{
        ID: 841140,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenreSingle != nil {
        // handle response
    }
}
```
