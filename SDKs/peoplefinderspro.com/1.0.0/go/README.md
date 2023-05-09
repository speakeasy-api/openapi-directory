# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/peoplefinderspro.com/1.0.0/go
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
    res, err := s.Search(ctx, operations.SearchRequest{
        RequestBody: &operations.SearchRequestBody{
            Address: &operations.SearchRequestBodyAddress{
                AddressLine1: sdk.String("corrupti"),
                AddressLine2: sdk.String("provident"),
            },
            Age: sdk.Float64(7151.9),
            Dob: sdk.String("quibusdam"),
            Email: sdk.String("Ryan.Little62@yahoo.com"),
            FirstName: sdk.String("Luna"),
            LastName: sdk.String("Hoppe"),
            MiddleName: sdk.String("iure"),
            PhoneNumber: sdk.String("magnam"),
        },
        GalaxyApName: sdk.String("debitis"),
        GalaxyApPassword: sdk.String("ipsa"),
        GalaxySearchType: sdk.String("delectus"),
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

### [SDK](docs/sdk/README.md)

* [Search](docs/sdk/README.md#search) - Search
* [PostAddressAutocomplete](docs/sdk/README.md#postaddressautocomplete) - Search
* [PostContactEnrich](docs/sdk/README.md#postcontactenrich) - Search
* [PostEmailEnrich](docs/sdk/README.md#postemailenrich) - Search
* [PostPhoneEnrich](docs/sdk/README.md#postphoneenrich) - Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
