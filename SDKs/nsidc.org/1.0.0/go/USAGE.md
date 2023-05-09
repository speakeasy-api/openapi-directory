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