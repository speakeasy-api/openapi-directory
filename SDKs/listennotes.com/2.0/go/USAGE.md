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
            GenreID: "deleniti",
            Language: "ea",
            Page: 3673804603196576783,
            PublisherRegion: "repellendus",
            Region: "est",
            SafeMode: 6073608601783819944,
        },
        Headers: operations.GetBestPodcastsHeaders{
            XListenAPIKey: "nesciunt",
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