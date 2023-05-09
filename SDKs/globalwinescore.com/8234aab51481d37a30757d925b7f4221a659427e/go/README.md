# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/globalwinescore.com/8234aab51481d37a30757d925b7f4221a659427e/go
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
            TokenAuthentication: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GlobalWineScore.GetGlobalwinescoresLatest(ctx, operations.GetGlobalwinescoresLatestRequest{
        Authorization: sdk.String("corrupti"),
        Color: operations.GetGlobalwinescoresLatestColorEnumWhite.ToPointer(),
        IsPrimeurs: sdk.Bool(false),
        Limit: sdk.Int64(715190),
        Lwin: sdk.String("quibusdam"),
        Lwin11: sdk.String("unde"),
        Offset: sdk.Int64(857946),
        Ordering: operations.GetGlobalwinescoresLatestOrderingEnumScore.ToPointer(),
        Vintage: sdk.String("illum"),
        WineID: []int64{
            623564,
            645894,
        },
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


### [GlobalWineScore](docs/globalwinescore/README.md)

* [GetGlobalwinescoresLatest](docs/globalwinescore/README.md#getglobalwinescoreslatest) - List all latest GWS
* [ListHistoricalGWS](docs/globalwinescore/README.md#listhistoricalgws) - List all historical GWS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
