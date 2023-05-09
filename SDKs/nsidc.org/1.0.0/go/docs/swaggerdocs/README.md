# SwaggerDocs

## Overview

Dataset search

### Available Operations

* [Facets](#facets) - View the facet information corresponding to a search
* [ID](#id) - Suggest search terms based on a partial query
* [OpenSearch](#opensearch) - Search documents using the OpenSearch 1.1 Specification
* [OpensearchDescription](#opensearchdescription) - Describes the web interface of NSIDC's data search engine

## Facets

In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.

### Example Usage

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
        Count: sdk.Int64(384382),
        EndDate: types.MustDateFromString("2022-09-14"),
        FacetFilters: sdk.String("debitis"),
        SearchTerms: sdk.String("ipsa"),
        SortKeys: operations.FacetsSortKeysEnumUpdatedDesc.ToPointer(),
        Source: operations.FacetsSourceEnumNsidc.ToPointer(),
        Spatial: sdk.String("suscipit"),
        StartDate: types.MustDateFromString("2022-03-18"),
        StartIndex: sdk.Int64(812169),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Facets200ApplicationNsidcfacetsPlusXMLString != nil {
        // handle response
    }
}
```

## ID

In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SwaggerDocs.ID(ctx, operations.IDRequest{
        Q: "voluptatum",
        Source: operations.IDSourceEnumNsidc,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ID200ApplicationXSuggestionsPlusJSONString != nil {
        // handle response
    }
}
```

## OpenSearch

This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.

### Example Usage

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
    res, err := s.SwaggerDocs.OpenSearch(ctx, operations.OpenSearchRequest{
        Count: sdk.Int64(568045),
        EndDate: types.MustDateFromString("2022-01-28"),
        FacetFilters: sdk.String("temporibus"),
        SearchTerms: sdk.String("ab"),
        SortKeys: operations.OpenSearchSortKeysEnumSpatialAreaDesc.ToPointer(),
        Source: operations.OpenSearchSourceEnumNsidc.ToPointer(),
        Spatial: sdk.String("deserunt"),
        StartDate: types.MustDateFromString("2022-08-19"),
        StartIndex: sdk.Int64(832620),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenSearch200ApplicationAtomPlusXMLString != nil {
        // handle response
    }
}
```

## OpensearchDescription

Describes the web interface of NSIDC's data search engine

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SwaggerDocs.OpensearchDescription(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpensearchDescription200ApplicationOpensearchdescriptionPlusXMLString != nil {
        // handle response
    }
}
```
