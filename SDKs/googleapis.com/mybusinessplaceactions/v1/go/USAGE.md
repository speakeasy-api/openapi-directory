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
    
    req := operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest{
        PathParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams{
            Parent: "aut",
        },
        QueryParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dignissimos",
            Alt: "proto",
            Callback: "commodi",
            Fields: "rerum",
            Key: "voluptas",
            OauthToken: "quasi",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "sed",
            UploadProtocol: "et",
        },
        Request: &shared.PlaceActionLinkInput{
            IsPreferred: true,
            Name: "aut",
            PlaceActionType: "DINING_RESERVATION",
            URI: "modi",
        },
    }
    
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceActionLink != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->