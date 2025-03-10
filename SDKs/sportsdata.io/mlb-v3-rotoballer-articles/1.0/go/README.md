# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/sportsdata.io/mlb-v3-rotoballer-articles/1.0/go
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
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.RotoballerArticles(ctx, operations.RotoballerArticlesRequest{
        Format: operations.RotoballerArticlesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Articles != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [RotoballerArticles](docs/sdk/README.md#rotoballerarticles) - RotoBaller Articles
* [RotoballerArticlesByDate](docs/sdk/README.md#rotoballerarticlesbydate) - RotoBaller Articles By Date
* [RotoballerArticlesByPlayer](docs/sdk/README.md#rotoballerarticlesbyplayer) - RotoBaller Articles By Player
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
