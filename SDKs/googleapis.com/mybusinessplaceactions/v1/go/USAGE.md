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
            Parent: "sit",
        },
        QueryParams: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.PlaceActionLinkInput{
            IsPreferred: false,
            Name: "debitis",
            PlaceActionType: "PLACE_ACTION_TYPE_UNSPECIFIED",
            URI: "et",
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