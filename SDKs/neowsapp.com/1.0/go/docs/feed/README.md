# Feed

## Overview

Operations with NearEarthObjects

### Available Operations

* [RetrieveNEOFeedToday](#retrieveneofeedtoday) - Find Near Earth Objects for today
* [RetrieveNearEarthObjectFeed](#retrievenearearthobjectfeed) - Find Near Earth Objects by date

## RetrieveNEOFeedToday

Get a list of Near Earth Objects for today

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
    res, err := s.Feed.RetrieveNEOFeedToday(ctx, operations.RetrieveNEOFeedTodayRequest{
        Detailed: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObjectList != nil {
        // handle response
    }
}
```

## RetrieveNearEarthObjectFeed

Get a list of Near Earth Objects within a date range, The max range in one query is 7 days

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
    res, err := s.Feed.RetrieveNearEarthObjectFeed(ctx, operations.RetrieveNearEarthObjectFeedRequest{
        Detailed: sdk.Bool(false),
        EndDate: sdk.String("corrupti"),
        StartDate: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NearEarthObjectList != nil {
        // handle response
    }
}
```
