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
            Parent: "alias",
        },
        QueryParams: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "ratione",
            Alt: "media",
            Callback: "non",
            Fields: "corrupti",
            Filter: "rerum",
            Key: "assumenda",
            OauthToken: "veritatis",
            PageSize: 464811253189919483,
            PageToken: "recusandae",
            PrettyPrint: true,
            QuotaUser: "odit",
            UploadType: "voluptatum",
            UploadProtocol: "neque",
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