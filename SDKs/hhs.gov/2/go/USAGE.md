<!-- Start SDK Example Usage -->
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
    res, err := s.Campaigns.GetResourcesCampaignsJSON(ctx, operations.GetResourcesCampaignsJSONRequest{
        Max: sdk.Int(548814),
        Offset: sdk.Int(592845),
        Sort: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignWrapped != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->