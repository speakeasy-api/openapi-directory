<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetBestPodcastsRequest{
        QueryParams: operations.GetBestPodcastsQueryParams{
            GenreID: "unde",
            Language: "deserunt",
            Page: 715190,
            PublisherRegion: "nulla",
            Region: "id",
            SafeMode: "1",
            Sort: "recent_published_first",
        },
        Headers: operations.GetBestPodcastsHeaders{
            XListenAPIKey: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetBestPodcasts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BestPodcastsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->