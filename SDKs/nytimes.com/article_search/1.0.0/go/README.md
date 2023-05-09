# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nytimes.com/article_search/1.0.0/go
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
    res, err := s.Stories.GetArticlesearchJSON(ctx, operations.GetArticlesearchJSONRequest{
        BeginDate: sdk.String("corrupti"),
        EndDate: sdk.String("provident"),
        FacetField: sdk.String("distinctio"),
        FacetFilter: sdk.Bool(false),
        Fl: sdk.String("quibusdam"),
        Fq: sdk.String("unde"),
        Hl: sdk.Bool(false),
        Page: sdk.Int64(857946),
        Q: sdk.String("corrupti"),
        Sort: operations.GetArticlesearchJSONSortEnumOldest.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesearchJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Stories](docs/stories/README.md)

* [GetArticlesearchJSON](docs/stories/README.md#getarticlesearchjson) - Article Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
