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

    req := operations.MybusinesslodgingLocationsGetLodgingRequest{
        PathParams: operations.MybusinesslodgingLocationsGetLodgingPathParams{
            Name: "unde",
        },
        QueryParams: operations.MybusinesslodgingLocationsGetLodgingQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            ReadMask: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.Locations.MybusinesslodgingLocationsGetLodging(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Lodging != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->