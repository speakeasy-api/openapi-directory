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

    req := operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest{
        PathParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.PlaceActionLinkInput{
            IsPreferred: false,
            Name: "suscipit",
            PlaceActionType: "DINING_RESERVATION",
            URI: "http://unique-baboon.org",
        },
    }

    ctx := context.Background()
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceActionLink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->