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
            Parent: "unde",
        },
        QueryParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.PlaceActionLinkInput{
            IsPreferred: false,
            Name: "eum",
            PlaceActionType: "DINING_RESERVATION",
            URI: "http://sim.com",
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