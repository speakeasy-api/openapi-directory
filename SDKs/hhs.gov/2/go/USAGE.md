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

    req := operations.GetResourcesCampaignsJSONRequest{
        QueryParams: operations.GetResourcesCampaignsJSONQueryParams{
            Max: 548814,
            Offset: 592845,
            Sort: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.Campaigns.GetResourcesCampaignsJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignWrapped != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->