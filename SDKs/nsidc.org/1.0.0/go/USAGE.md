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
        QueryParams: operations.FacetsQueryParams{
            Count: 548814,
            EndDate: "2022-08-25",
            FacetFilters: "porro",
            SearchTerms: "nulla",
            SortKeys: "temporal_duration,,asc",
            Source: "ADE",
            Spatial: "perspiciatis",
            StartDate: "2022-05-24",
            StartIndex: 423655,
        },
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