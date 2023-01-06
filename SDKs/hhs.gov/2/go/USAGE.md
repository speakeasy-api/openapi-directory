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
    
    req := operations.GetResourcesCampaignsJSONRequest{
        QueryParams: operations.GetResourcesCampaignsJSONQueryParams{
            Max: 7859331431641313360,
            Offset: 5277894250208196585,
            Sort: "ipsam",
        },
    }
    
    res, err := s.Campaigns.GetResourcesCampaignsJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CampaignWrapped != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->