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
            Count: 5416590452329985500,
            EndDate: "2013-07-03",
            FacetFilters: "sunt",
            SearchTerms: "et",
            SortKeys: "spatial_area,,asc",
            Source: "ADE",
            Spatial: "blanditiis",
            StartDate: "1973-03-20",
            StartIndex: 1131641809401352413,
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