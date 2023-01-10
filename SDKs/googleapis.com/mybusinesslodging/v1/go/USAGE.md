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
            Name: "non",
        },
        QueryParams: operations.MybusinesslodgingLocationsGetLodgingQueryParams{
            DollarXgafv: "1",
            AccessToken: "corrupti",
            Alt: "proto",
            Callback: "et",
            Fields: "atque",
            Key: "sed",
            OauthToken: "maiores",
            PrettyPrint: true,
            QuotaUser: "eos",
            ReadMask: "animi",
            UploadType: "iste",
            UploadProtocol: "reprehenderit",
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