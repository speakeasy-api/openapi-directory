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
            GenreID: "corrupti",
            Language: "provident",
            Page: 715190,
            PublisherRegion: "quibusdam",
            Region: "unde",
            SafeMode: "1",
            Sort: "recent_published_first",
        },
        Headers: operations.GetBestPodcastsHeaders{
            XListenAPIKey: "illum",
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