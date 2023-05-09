# Public

## Overview

Publicly supported stable API.

### Available Operations

* [GetAssociationByID](#getassociationbyid) - Get association by id
* [GetAssociationFilter](#getassociationfilter) - Filter available associations
* [GetDataMetrics](#getdatametrics) - Get metrics about the current data release
* [GetDataStats](#getdatastats) - Get statistics about the current data release
* [GetEvidenceByID](#getevidencebyid) - Get evidence by ID
* [GetEvidenceFilter](#getevidencefilter) - Filter available evidence
* [GetPing](#getping) - Ping service
* [GetSearch](#getsearch) - Search for a disease or a target
* [GetTherapeuticAreas](#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [GetVersion](#getversion) - Get API version
* [PostAssociationFilter](#postassociationfilter) - Batch query available associations
* [PostEvidenceByID](#postevidencebyid) - Get evidence for a list of IDs
* [PostEvidenceFilter](#postevidencefilter) - Batch filter available evidence

## GetAssociationByID

Once we integrate all evidence connecting a target to a specific disease, we
 compute an association score by the means of an harmonic sum. This *association score* provides
 an indication of how strong the evidence behind each connection is and can be
 used to rank genes in order of likelihood as drug targets.
 The association ID is constructed by using the Ensembl ID of the gene and the
 EFO ID for the disease (e.g. ENSG00000073756-EFO_0003767).
 The method returns an association object, which contains the data and summary
 on each evidence type included in the calculation of the score, as well as the score itself.


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
    res, err := s.Public.GetAssociationByID(ctx, operations.GetAssociationByIDRequest{
        ID: "b7392059-2939-46fe-a759-6eb10faaa235",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAssociationFilter

More complex queries for associations scores and objects can be done using
this method, which allows to sort in different order, restrict to a specific class
of diseases or targets, as well as filtering results by score and associated pathways.


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
    res, err := s.Public.GetAssociationFilter(ctx, operations.GetAssociationFilterRequest{
        Datasource: sdk.String("explicabo"),
        Datastructure: sdk.String("nobis"),
        Datatype: sdk.String("enim"),
        Direct: sdk.Bool(false),
        Disease: sdk.String("omnis"),
        Facets: sdk.Bool(false),
        Fields: sdk.String("nemo"),
        Format: sdk.String("minima"),
        From: sdk.Float64(5701.97),
        Pathway: sdk.String("accusantium"),
        ScorevalueMax: sdk.Float32(4386.01),
        ScorevalueMin: sdk.Float32(6342.74),
        ScorevalueTypes: sdk.String("doloribus"),
        Search: sdk.String("sapiente"),
        Size: sdk.Float64(1020.44),
        Sort: sdk.String("mollitia"),
        Target: sdk.String("dolorem"),
        TargetClass: sdk.String("culpa"),
        TherapeuticArea: sdk.String("consequuntur"),
        Uniprotkw: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDataMetrics

Returns the metrics about associations and evidences, divided by datasource, genes and so on.


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
    res, err := s.Public.GetDataMetrics(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDataStats

Returns the number of associations and evidences, divided by datasource.


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
    res, err := s.Public.GetDataStats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEvidenceByID

We call **evidence** a unit of data that support a connection between a target and a disease.
The Open Targets Platform integrates multiple types of evidence including genetic associations,
somatic mutations, RNA expression and target-disease associations mined from the literature.
This method allows you to retrieve a single evidence item or a list of pieces of evidence by using their
targetvalidation.org ID.

Evidence IDs are unique within each data release (e.g. `8ed3d7568a8c6cac9c95cfb869bac762` for release 1.2).
You can obtain a list of evidence and their IDs from other API calls such as [/public/evidence/filter](#!/public/get_public_evidence_filter).

**Please note** that a specific evidence ID may change between data releases. We can not guarantee that a specific evidence ID will refer to the same piece of evidence connecting a target and its diseases.


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
    res, err := s.Public.GetEvidenceByID(ctx, operations.GetEvidenceByIDRequest{
        ID: "a9467739-251a-4a52-83f5-ad019da1ffe7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEvidenceFilter

The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
Filters can be used to restrict the results by source and type of data,
or limit results to targets which are part of a particular pathway.
Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
**Note** that multiple genes and diseases can be specified in the same request.


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
    res, err := s.Public.GetEvidenceFilter(ctx, operations.GetEvidenceFilterRequest{
        DataSource: sdk.String("praesentium"),
        Datastructure: sdk.String("voluptatibus"),
        Datatype: sdk.String("ipsa"),
        Disease: sdk.String("omnis"),
        Fields: sdk.String("voluptate"),
        Format: sdk.String("cum"),
        From: sdk.Float64(199.87),
        Pathway: sdk.String("doloremque"),
        ScorevalueMax: sdk.Float32(4417.11),
        ScorevalueMin: sdk.Float32(2828.07),
        Size: sdk.Float64(9795.87),
        Sort: sdk.String("dicta"),
        Target: sdk.String("corporis"),
        Uniprotkw: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPing

Check if the API is up


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
    res, err := s.Public.GetPing(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearch

This method allows you to look for gene or diseases of interest using a free text search,
replicating the functionality of the search box on our homepage. It should be used to identify
the best match for a disease or target of interest, rather than gathering a specific set of evidence.


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
    res, err := s.Public.GetSearch(ctx, operations.GetSearchRequest{
        Filter: sdk.String("iusto"),
        From: sdk.String("dicta"),
        Q: "harum",
        Size: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTherapeuticAreas

Returns the list of therapeutic areas for the current data release


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
    res, err := s.Public.GetTherapeuticAreas(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVersion

Returns current API version.


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
    res, err := s.Public.GetVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAssociationFilter

Complex queries and filters for association objects can also be submitted using a JSON
object and the equivalent POST method.


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
    res, err := s.Public.PostAssociationFilter(ctx, "{"target":["target1", "target2"]}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostEvidenceByID

This is the POST version of [/public/evidence](#!/public/get_public_evidence).
It allows to query for a list of evidence strings encoded in a `json` object to be passed in the body.


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
    res, err := s.Public.PostEvidenceByID(ctx, "{"id":["id1", "id2"]}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostEvidenceFilter

POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.


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
    res, err := s.Public.PostEvidenceFilter(ctx, "{"target":["ENSG00000094755", "ENSG00000167207"], "disease":["EFO_0003767"]}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
