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