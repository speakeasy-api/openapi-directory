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
            Max: 8717895732742165505,
            Offset: 2259404117704393152,
            Sort: "culpa",
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