# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/open511/1.0.0/go
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
    res, err := s.Resources.GetAreas(ctx, operations.GetAreasRequest{
        Format: operations.GetAreasFormatEnumXML.ToPointer(),
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


### [Resources](docs/resources/README.md)

* [GetAreas](docs/resources/README.md#getareas) - Lists the geographical areas (e.g. districts) that can be used to filter events.
* [GetEvents](docs/resources/README.md#getevents) - Lists road events
* [GetJurisdiction](docs/resources/README.md#getjurisdiction) - Lists the jurisdictions publishing data through this Open511 API implementation
* [GetJurisdictiongeography](docs/resources/README.md#getjurisdictiongeography) - Provides the geographical boundaries for all the jurisdictions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
