# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/placekit.co/1.0.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reverse(ctx, operations.ReverseRequestBody{
        Coordinates: sdk.String("48.873662, 2.295063"),
        Countries: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        CountryByIP: sdk.Bool(false),
        Language: operations.ReverseRequestBodyLanguageEnumFr.ToPointer(),
        MaxResults: sdk.Int64(602763),
        Types: []shared.TypesEnum{
            shared.TypesEnumStreet,
            shared.TypesEnumMinusTownhall,
            shared.TypesEnumCountry,
            shared.TypesEnumMinusStreet,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Results != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [Reverse](docs/sdk/README.md#reverse) - Reverse geocoding
* [Search](docs/sdk/README.md#search) - Search for addresses
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
