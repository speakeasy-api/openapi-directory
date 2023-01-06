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
    
    req := operations.MybusinesslodgingLocationsGetLodgingRequest{
        PathParams: operations.MybusinesslodgingLocationsGetLodgingPathParams{
            Name: "et",
        },
        QueryParams: operations.MybusinesslodgingLocationsGetLodgingQueryParams{
            DollarXgafv: "2",
            AccessToken: "ex",
            Alt: "json",
            Callback: "corporis",
            Fields: "ea",
            Key: "voluptate",
            OauthToken: "dolor",
            PrettyPrint: false,
            QuotaUser: "non",
            ReadMask: "nostrum",
            UploadType: "laboriosam",
            UploadProtocol: "exercitationem",
        },
    }
    
    res, err := s.Locations.MybusinesslodgingLocationsGetLodging(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Lodging != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->