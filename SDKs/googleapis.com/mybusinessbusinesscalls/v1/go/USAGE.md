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
    
    req := operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest{
        PathParams: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams{
            Parent: "ut",
        },
        QueryParams: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "atque",
            Alt: "proto",
            Callback: "in",
            Fields: "et",
            Filter: "dolore",
            Key: "quia",
            OauthToken: "laboriosam",
            PageSize: 7111439703266160038,
            PageToken: "delectus",
            PrettyPrint: true,
            QuotaUser: "quas",
            UploadType: "quidem",
            UploadProtocol: "eum",
        },
    }
    
    res, err := s.Locations.MybusinessbusinesscallsLocationsBusinesscallsinsightsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBusinessCallsInsightsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->