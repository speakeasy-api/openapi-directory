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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.PatchAttractionRequest{
        AugmentationData: shared.AugmentationData{
            Changes: []shared.Change{
                shared.Change{
                    From: "provident",
                    Op: "copy",
                    Path: "quibusdam",
                    Value: map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                },
                shared.Change{
                    From: "suscipit",
                    Op: "replace",
                    Path: "magnam",
                    Value: map[string]interface{}{
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                },
                shared.Change{
                    From: "iusto",
                    Op: "move",
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
            RelatedEntityType: "venue",
            Score: 1403.5,
            Source: "at",
            VersionNumber: 870088,
        },
        TMPSCorrelationID: "maiores",
        ID: "molestiae",
    }

    ctx := context.Background()
    res, err := s.PatchAttraction(ctx, req)
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

### SDK SDK

* `PatchAttraction` - Publish a patch on an attraction
* `PatchEvent` - Publish a patch on an event
* `PatchVenue` - Publish a patch on a venue
* `PublishAttraction` - Publish an attractions
* `PublishAttractionVideos` - Publish a video on an attraction
* `PublishEntitlements` - Publish entitlements on an entity
* `PublishEvent` - Publish an event
* `PublishEventVideos` - Publish a video on an event
* `PublishExtension` - Publish extension on an entity
* `PublishVenue` - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
