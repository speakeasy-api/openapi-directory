<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksCreate(ctx, operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlaceActionLinkInput: &shared.PlaceActionLinkInput{
            IsPreferred: sdk.Bool(false),
            Name: sdk.String("Kelvin Sporer"),
            PlaceActionType: shared.PlaceActionLinkPlaceActionTypeEnumFoodOrdering.ToPointer(),
            URI: sdk.String("https://impressive-ox.name"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("delectus"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceActionLink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->