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
            Count: 8717895732742165505,
            EndDate: "2006-05-01",
            FacetFilters: "culpa",
            SearchTerms: "expedita",
            SortKeys: "updated,,desc",
            Source: "NSIDC",
            Spatial: "expedita",
            StartDate: "1978-05-28",
            StartIndex: 8274930044578894929,
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