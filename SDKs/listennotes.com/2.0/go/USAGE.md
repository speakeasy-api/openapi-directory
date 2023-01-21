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
            GenreID: "sit",
            Language: "voluptas",
            Page: 6050128673802995827,
            PublisherRegion: "expedita",
            Region: "consequuntur",
            SafeMode: 2669985732393126063,
        },
        Headers: operations.GetBestPodcastsHeaders{
            XListenAPIKey: "expedita",
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