# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nytimes.com/books_api/3.0.0/go
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
    res, err := s.GETListsBestSellersHistoryJSON(ctx, operations.GETListsBestSellersHistoryJSONRequest{
        AgeGroup: sdk.String("corrupti"),
        Author: sdk.String("provident"),
        Contributor: sdk.String("distinctio"),
        Isbn: sdk.String("quibusdam"),
        Price: sdk.String("unde"),
        Publisher: sdk.String("nulla"),
        Title: sdk.String("Ms."),
    }, operations.GETListsBestSellersHistoryJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETListsBestSellersHistoryJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GETListsBestSellersHistoryJSON](docs/sdk/README.md#getlistsbestsellershistoryjson) - Best Seller History List
* [GETListsDateListJSON](docs/sdk/README.md#getlistsdatelistjson) - Best Seller List by Date
* [GETListsFormat](docs/sdk/README.md#getlistsformat) - Best Seller List
* [GETListsNamesFormat](docs/sdk/README.md#getlistsnamesformat) - Best Seller List Names
* [GETListsOverviewFormat](docs/sdk/README.md#getlistsoverviewformat) - Best Seller List Overview
* [GETReviewsFormat](docs/sdk/README.md#getreviewsformat) - Reviews
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
