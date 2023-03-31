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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FacetsRequest{
        Count: 548814,
        EndDate: "2021-07-27",
        FacetFilters: "quibusdam",
        SearchTerms: "unde",
        SortKeys: "updated,,desc",
        Source: "ADE",
        Spatial: "illum",
        StartDate: "2022-05-18",
        StartIndex: 645894,
    }

    ctx := context.Background()
    res, err := s.SwaggerDocs.Facets(ctx, req)
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


### SwaggerDocs

* `Facets` - View the facet information corresponding to a search
* `ID` - Suggest search terms based on a partial query
* `OpenSearch` - Search documents using the OpenSearch 1.1 Specification
* `OpensearchDescription` - Describes the web interface of NSIDC's data search engine
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
