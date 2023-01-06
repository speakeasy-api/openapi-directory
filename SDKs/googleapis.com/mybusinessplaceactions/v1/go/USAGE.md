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
            Parent: "architecto",
        },
        QueryParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "non",
            Alt: "media",
            Callback: "consequatur",
            Fields: "eligendi",
            Key: "vitae",
            OauthToken: "pariatur",
            PrettyPrint: true,
            QuotaUser: "eius",
            UploadType: "laborum",
            UploadProtocol: "temporibus",
        },
        Request: &shared.PlaceActionLinkInput{
            IsPreferred: false,
            Name: "laborum",
            PlaceActionType: "PLACE_ACTION_TYPE_UNSPECIFIED",
            URI: "fugit",
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