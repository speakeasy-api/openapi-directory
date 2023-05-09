# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nytimes.com/geo_api/1.0.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetQueryJSON(ctx, operations.GetQueryJSONRequest{
        DateRange: sdk.String("corrupti"),
        Elevation: sdk.Int64(592845),
        Facets: operations.GetQueryJSONFacetsEnumOne.ToPointer(),
        Filter: sdk.String("quibusdam"),
        Latitude: sdk.String("unde"),
        Limit: sdk.Int64(857946),
        Longitude: sdk.String("corrupti"),
        Name: sdk.String("Ben Mueller"),
        Offset: sdk.Int64(437587),
        Query: sdk.String("magnam"),
        Sort: sdk.String("debitis"),
        Sw: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Events](docs/events/README.md)

* [GetQueryJSON](docs/events/README.md#getqueryjson) - Geographic API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
