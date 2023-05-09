# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hubapi.com/crm/v3/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cards.DeleteCrmV3ExtensionsCardsAppIDCardIDArchive(ctx, operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest{
        AppID: 548814,
        CardID: "provident",
    }, operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Cards](docs/cards/README.md)

* [DeleteCrmV3ExtensionsCardsAppIDCardIDArchive](docs/cards/README.md#deletecrmv3extensionscardsappidcardidarchive) - Delete a card
* [GetCrmV3ExtensionsCardsAppIDCardIDGetByID](docs/cards/README.md#getcrmv3extensionscardsappidcardidgetbyid) - Get a card.
* [GetCrmV3ExtensionsCardsAppIDGetAll](docs/cards/README.md#getcrmv3extensionscardsappidgetall) - Get all cards
* [PatchCrmV3ExtensionsCardsAppIDCardIDUpdate](docs/cards/README.md#patchcrmv3extensionscardsappidcardidupdate) - Update a card
* [PostCrmV3ExtensionsCardsAppIDCreate](docs/cards/README.md#postcrmv3extensionscardsappidcreate) - Create a new card

### [SampleResponse](docs/sampleresponse/README.md)

* [GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse](docs/sampleresponse/README.md#getcrmv3extensionscardssampleresponsegetcardssampleresponse) - Get sample card detail response
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
