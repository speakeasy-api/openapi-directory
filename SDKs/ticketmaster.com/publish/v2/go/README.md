# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ticketmaster.com/publish/v2/go
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
    res, err := s.PatchAttraction(ctx, operations.PatchAttractionRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: sdk.String("provident"),
                    Op: shared.ChangeOpEnumCopy,
                    Path: "quibusdam",
                    Value: map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                },
                shared.Change{
                    From: sdk.String("suscipit"),
                    Op: shared.ChangeOpEnumReplace,
                    Path: "magnam",
                    Value: map[string]interface{}{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                },
                shared.Change{
                    From: sdk.String("iusto"),
                    Op: shared.ChangeOpEnumMove,
                    Path: "nisi",
                    Value: map[string]interface{}{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                },
            },
            RelatedEntityID: "sapiente",
            RelatedEntityType: shared.AugmentationDataRelatedEntityTypeEnumVenue,
            Score: sdk.Float32(1403.5),
            Source: "at",
            VersionNumber: 870088,
        },
        TMPSCorrelationID: "maiores",
        ID: "7cc78ca1-ba92-48fc-8167-42cb73920592",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [PatchAttraction](docs/sdk/README.md#patchattraction) - Publish a patch on an attraction
* [PatchEvent](docs/sdk/README.md#patchevent) - Publish a patch on an event
* [PatchVenue](docs/sdk/README.md#patchvenue) - Publish a patch on a venue
* [PublishAttraction](docs/sdk/README.md#publishattraction) - Publish an attractions
* [PublishAttractionVideos](docs/sdk/README.md#publishattractionvideos) - Publish a video on an attraction
* [PublishEntitlements](docs/sdk/README.md#publishentitlements) - Publish entitlements on an entity
* [PublishEvent](docs/sdk/README.md#publishevent) - Publish an event
* [PublishEventVideos](docs/sdk/README.md#publisheventvideos) - Publish a video on an event
* [PublishExtension](docs/sdk/README.md#publishextension) - Publish extension on an entity
* [PublishVenue](docs/sdk/README.md#publishvenue) - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
