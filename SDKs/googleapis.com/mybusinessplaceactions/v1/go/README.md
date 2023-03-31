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
        DollarXgafv: "2",
        PlaceActionLinkInput: &shared.PlaceActionLinkInput{
            IsPreferred: false,
            Name: "provident",
            PlaceActionType: "FOOD_DELIVERY",
            URI: "https://outstanding-strait.name",
        },
        AccessToken: "illum",
        Alt: "media",
        Callback: "error",
        Fields: "deserunt",
        Key: "suscipit",
        OauthToken: "iure",
        Parent: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Locations

* `MybusinessplaceactionsLocationsPlaceActionLinksCreate` - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* `MybusinessplaceactionsLocationsPlaceActionLinksDelete` - Deletes a place action link from the specified location.
* `MybusinessplaceactionsLocationsPlaceActionLinksGet` - Gets the specified place action link.
* `MybusinessplaceactionsLocationsPlaceActionLinksList` - Lists the place action links for the specified location.
* `MybusinessplaceactionsLocationsPlaceActionLinksPatch` - Updates the specified place action link and returns it.

### PlaceActionTypeMetadata

* `MybusinessplaceactionsPlaceActionTypeMetadataList` - Returns the list of available place action types for a location or country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
