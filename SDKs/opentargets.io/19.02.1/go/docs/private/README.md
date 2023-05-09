# Private

## Overview

Unstable API methods. Subject to change without prior notice. Use at your own risk.

### Available Operations

* [GetAPIDocs](#getapidocs) - Browse API documentation
* [GetAPISwaggerUI](#getapiswaggerui) - Browse interactive API documentation
* [GetAutocomplete](#getautocomplete) - Get `autocomplete` objects.
* [GetDiseaseByID](#getdiseasebyid) - Find information about a disease
* [GetDrugByID](#getdrugbyid) - Get drug by ID
* [GetECObyID](#getecobyid) - Get evidence code by ID
* [GetQuickSearch](#getquicksearch) - Search most relevant results
* [GetRelationByEFOID](#getrelationbyefoid) - Find related entities by disease
* [GetRelationByENSGID](#getrelationbyensgid) - Find related entities by target
* [GetSwagger](#getswagger) - Get OpenAPI schema
* [GetTargetByENSGID](#gettargetbyensgid) - Find information about a target
* [GetTargetExpressionByENSGID](#gettargetexpressionbyensgid) - Query expression levels
* [PostBestHitSearch](#postbesthitsearch) - Find the best hit
* [PostDiseaseByID](#postdiseasebyid) - Find information about a list of diseases
* [PostEnrichmentTarget](#postenrichmenttarget) - Enrichment analysis
* [PostRelation](#postrelation) - Find related entities
* [PostTargetByENSGID](#posttargetbyensgid) - Find information about a list of targets
* [PostTargetExpressionByENSGID](#posttargetexpressionbyensgid) - Batch query expression levels

## GetAPIDocs

Access api docs as served by Redoc

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
    res, err := s.Private.GetAPIDocs(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPISwaggerUI

Interactive API docs using swagger-ui

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
    res, err := s.Private.GetAPISwaggerUI(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAutocomplete

Search for the closest term to autocomplete in the search box.


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
    res, err := s.Private.GetAutocomplete(ctx, operations.GetAutocompleteRequest{
        Q: "officia",
        Size: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDiseaseByID

Get `disease` objects.


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
    res, err := s.Private.GetDiseaseByID(ctx, operations.GetDiseaseByIDRequest{
        Disease: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDrugByID

Get `drug` objects.


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
    res, err := s.Private.GetDrugByID(ctx, operations.GetDrugByIDRequest{
        DRUGIDPathParameter: "deleniti",
        DrugIDQueryParameter: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetECObyID

Get `ECO` objects.


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
    res, err := s.Private.GetECObyID(ctx, operations.GetECObyIDRequest{
        EcoID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQuickSearch

Get `search-result` objects. Enables search bar functionality.


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
    res, err := s.Private.GetQuickSearch(ctx, operations.GetQuickSearchRequest{
        Q: "totam",
        Size: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRelationByEFOID

Get `relation` objects starting from diseases.


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
    res, err := s.Private.GetRelationByEFOID(ctx, operations.GetRelationByEFOIDRequest{
        Disease: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRelationByENSGID

Get `relation` objects starting from diseases.


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
    res, err := s.Private.GetRelationByENSGID(ctx, operations.GetRelationByENSGIDRequest{
        Target: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSwagger

Get swagger.yaml specs for the API

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
    res, err := s.Private.GetSwagger(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTargetByENSGID

Get `target` objects.


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
    res, err := s.Private.GetTargetByENSGID(ctx, operations.GetTargetByENSGIDRequest{
        Target: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTargetExpressionByENSGID

Get `gene-expression` objects.


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
    res, err := s.Private.GetTargetExpressionByENSGID(ctx, operations.GetTargetExpressionByENSGIDRequest{
        Gene: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostBestHitSearch

Fire the search method for multiple strings


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
    res, err := s.Private.PostBestHitSearch(ctx, "impedit")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostDiseaseByID

Get `disease` objects.


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
    res, err := s.Private.PostDiseaseByID(ctx, "{"disease":["disease1", "disease2"],
"facets" = "true"}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostEnrichmentTarget

Returns an enrichment analysis for a list of targets passed in the body


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
    res, err := s.Private.PostEnrichmentTarget(ctx, "{"target" : ["ENSG00000001", "ENSG00000002"],
 "pvalue" : 0.001,
 "size" : 20}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRelation

Get `relation` objects.


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
    res, err := s.Private.PostRelation(ctx, "{"subject":["gene1", "gene2"]}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTargetByENSGID

Get `target` objects. Used for the target profile page.


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
    res, err := s.Private.PostTargetByENSGID(ctx, "{"target":["target1", "target2"],
"facets" = "true"}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTargetExpressionByENSGID

Get `gene-expression` objects.


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
    res, err := s.Private.PostTargetExpressionByENSGID(ctx, "{"gene":["gene1", "gene2"]}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
