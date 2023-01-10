<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FacetsRequest{
        QueryParams: operations.FacetsQueryParams{
            Count: 7648245904330072828,
            EndDate: "2019-06-29",
            FacetFilters: "eos",
            SearchTerms: "facilis",
            SortKeys: "updated,,desc",
            Source: "NSIDC",
            Spatial: "voluptatem",
            StartDate: "2018-12-24",
            StartIndex: 5945020423769330383,
        },
    }
    
    res, err := s.SwaggerDocs.Facets(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Facets200ApplicationNsidcfacetsPlusXMLString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->