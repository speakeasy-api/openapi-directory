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
            Max: 5231058739915060904,
            Offset: 7105271836128858469,
            Sort: "eius",
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