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
            Parent: "sit",
        },
        QueryParams: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Filter: "expedita",
            Key: "voluptas",
            OauthToken: "fugit",
            PageSize: 1543572285742637646,
            PageToken: "nihil",
            PrettyPrint: true,
            QuotaUser: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
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