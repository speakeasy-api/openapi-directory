# Mart

## Overview

Perform bulk operations

### Available Operations

* [GetMartCaseAssociationsResource](#getmartcaseassociationsresource) - Bulk download of case associations
* [GetMartDiseaseAssociationsResource](#getmartdiseaseassociationsresource) - Bulk download of disease associations
* [GetMartGeneAssociationsResource](#getmartgeneassociationsresource) - Bulk download of gene associations
* [GetMartOrthologAssociationsResource](#getmartorthologassociationsresource) - Bulk download of orthologs
* [GetMartParalogAssociationsResource](#getmartparalogassociationsresource) - Bulk download of paralogs

## GetMartCaseAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

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
    res, err := s.Mart.GetMartCaseAssociationsResource(ctx, operations.GetMartCaseAssociationsResourceRequest{
        ObjectCategory: "voluptatibus",
        Slim: []string{
            "dolorum",
            "soluta",
        },
        Taxon: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMartDiseaseAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

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
    res, err := s.Mart.GetMartDiseaseAssociationsResource(ctx, operations.GetMartDiseaseAssociationsResourceRequest{
        ObjectCategory: "in",
        Slim: []string{
            "commodi",
            "commodi",
            "fugit",
            "ullam",
        },
        Taxon: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMartGeneAssociationsResource

NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.

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
    res, err := s.Mart.GetMartGeneAssociationsResource(ctx, operations.GetMartGeneAssociationsResourceRequest{
        ObjectCategory: "doloremque",
        Slim: []string{
            "qui",
            "praesentium",
            "adipisci",
        },
        Taxon: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMartOrthologAssociationsResource

Bulk download of orthologs

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
    res, err := s.Mart.GetMartOrthologAssociationsResource(ctx, operations.GetMartOrthologAssociationsResourceRequest{
        Taxon1: "qui",
        Taxon2: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMartParalogAssociationsResource

Bulk download of paralogs

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
    res, err := s.Mart.GetMartParalogAssociationsResource(ctx, operations.GetMartParalogAssociationsResourceRequest{
        Taxon1: "eligendi",
        Taxon2: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
