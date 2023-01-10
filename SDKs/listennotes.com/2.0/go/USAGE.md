<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetBestPodcastsRequest{
        QueryParams: operations.GetBestPodcastsQueryParams{
            GenreID: "corporis",
            Language: "et",
            Page: 9142852366173964212,
            PublisherRegion: "nobis",
            Region: "reiciendis",
            SafeMode: 8219548017842294811,
        },
        Headers: operations.GetBestPodcastsHeaders{
            XListenAPIKey: "aut",
        },
    }
    
    res, err := s.DirectoryAPI.GetBestPodcasts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BestPodcastsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->