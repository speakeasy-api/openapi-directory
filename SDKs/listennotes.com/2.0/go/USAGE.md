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
        XListenAPIKey: "corrupti",
        GenreID: "provident",
        Language: "distinctio",
        Page: 844266,
        PublisherRegion: "unde",
        Region: "nulla",
        SafeMode: "1",
        Sort: "listen_score",
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