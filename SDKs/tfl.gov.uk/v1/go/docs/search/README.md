# Search

### Available Operations

* [SearchBusSchedules](#searchbusschedules) - Searches the bus schedules folder on S3 for a given bus number.
* [SearchGet](#searchget) - Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.
* [SearchMetaCategories](#searchmetacategories) - Gets the available search categories.
* [SearchMetaSearchProviders](#searchmetasearchproviders) - Gets the available searchProvider names.
* [SearchMetaSorts](#searchmetasorts) - Gets the available sorting options.

## SearchBusSchedules

Searches the bus schedules folder on S3 for a given bus number.

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
    res, err := s.Search.SearchBusSchedules(ctx, operations.SearchBusSchedulesRequest{
        Query: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesSearchResponse != nil {
        // handle response
    }
}
```

## SearchGet

Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
            of 100. To return subsequent pages, use the paginated overload.

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
    res, err := s.Search.SearchGet(ctx, operations.SearchGetRequest{
        Query: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesSearchResponse != nil {
        // handle response
    }
}
```

## SearchMetaCategories

Gets the available search categories.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchMetaCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchMetaCategories200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## SearchMetaSearchProviders

Gets the available searchProvider names.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchMetaSearchProviders(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchMetaSearchProviders200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## SearchMetaSorts

Gets the available sorting options.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.SearchMetaSorts(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchMetaSorts200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
