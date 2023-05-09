<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DirectoryAPI.GetBestPodcasts(ctx, operations.GetBestPodcastsRequest{
        XListenAPIKey: "corrupti",
        GenreID: sdk.String("provident"),
        Language: sdk.String("distinctio"),
        Page: sdk.Int64(844266),
        PublisherRegion: sdk.String("unde"),
        Region: sdk.String("nulla"),
        SafeMode: shared.SafeModeParamEnumOne.ToPointer(),
        Sort: operations.GetBestPodcastsSortEnumListenScore.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BestPodcastsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->