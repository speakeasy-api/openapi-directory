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
            Name: "sit",
        },
        QueryParams: operations.MybusinesslodgingLocationsGetLodgingQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            ReadMask: "nihil",
            UploadType: "rerum",
            UploadProtocol: "dicta",
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