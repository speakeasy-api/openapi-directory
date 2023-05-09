# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessplaceactions/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Locations](docs/locations/README.md)

* [MybusinessplaceactionsLocationsPlaceActionLinksCreate](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkscreate) - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* [MybusinessplaceactionsLocationsPlaceActionLinksDelete](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinksdelete) - Deletes a place action link from the specified location.
* [MybusinessplaceactionsLocationsPlaceActionLinksGet](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinksget) - Gets the specified place action link.
* [MybusinessplaceactionsLocationsPlaceActionLinksList](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkslist) - Lists the place action links for the specified location.
* [MybusinessplaceactionsLocationsPlaceActionLinksPatch](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkspatch) - Updates the specified place action link and returns it.

### [PlaceActionTypeMetadata](docs/placeactiontypemetadata/README.md)

* [MybusinessplaceactionsPlaceActionTypeMetadataList](docs/placeactiontypemetadata/README.md#mybusinessplaceactionsplaceactiontypemetadatalist) - Returns the list of available place action types for a location or country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
