# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/groundhog-day.com/1.2.1/go
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
    res, err := s.Groundhogs.Groundhog(ctx, operations.GroundhogRequest{
        Slug: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Groundhog200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Groundhogs](docs/groundhogs/README.md)

* [Groundhog](docs/groundhogs/README.md#groundhog) - Get a groundhog by slug
* [Groundhogs](docs/groundhogs/README.md#groundhogs) - Get all groundhogs

### [Info](docs/info/README.md)

* [Root](docs/info/README.md#root) - Root
* [Spec](docs/info/README.md#spec) - Get JSON schema

### [Predictions](docs/predictions/README.md)

* [Predictions](docs/predictions/README.md#predictions) - Get predictions for a given year
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
