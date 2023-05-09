# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nsidc.org/1.0.0/go
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
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SwaggerDocs.Facets(ctx, operations.FacetsRequest{
        Count: sdk.Int64(548814),
        EndDate: types.MustDateFromString("2021-07-27"),
        FacetFilters: sdk.String("quibusdam"),
        SearchTerms: sdk.String("unde"),
        SortKeys: operations.FacetsSortKeysEnumUpdatedDesc.ToPointer(),
        Source: operations.FacetsSourceEnumAde.ToPointer(),
        Spatial: sdk.String("illum"),
        StartDate: types.MustDateFromString("2022-05-18"),
        StartIndex: sdk.Int64(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Facets200ApplicationNsidcfacetsPlusXMLString != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [SwaggerDocs](docs/swaggerdocs/README.md)

* [Facets](docs/swaggerdocs/README.md#facets) - View the facet information corresponding to a search
* [ID](docs/swaggerdocs/README.md#id) - Suggest search terms based on a partial query
* [OpenSearch](docs/swaggerdocs/README.md#opensearch) - Search documents using the OpenSearch 1.1 Specification
* [OpensearchDescription](docs/swaggerdocs/README.md#opensearchdescription) - Describes the web interface of NSIDC's data search engine
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
