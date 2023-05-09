# Filter

## Overview

Methods to filter the available evidence.

### Available Operations

* [GetAssociationFilter](#getassociationfilter) - Filter available associations
* [GetEvidenceFilter](#getevidencefilter) - Filter available evidence
* [PostAssociationFilter](#postassociationfilter) - Batch query available associations
* [PostEvidenceFilter](#postevidencefilter) - Batch filter available evidence

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
    res, err := s.Filter.GetAssociationFilter(ctx, operations.GetAssociationFilterRequest{
        Datasource: sdk.String("suscipit"),
        Datastructure: sdk.String("molestiae"),
        Datatype: sdk.String("minus"),
        Direct: sdk.Bool(false),
        Disease: sdk.String("placeat"),
        Facets: sdk.Bool(false),
        Fields: sdk.String("voluptatum"),
        Format: sdk.String("iusto"),
        From: sdk.Float64(5680.45),
        Pathway: sdk.String("nisi"),
        ScorevalueMax: sdk.Float32(9255.97),
        ScorevalueMin: sdk.Float32(8360.79),
        ScorevalueTypes: sdk.String("ab"),
        Search: sdk.String("quis"),
        Size: sdk.Float64(871.29),
        Sort: sdk.String("deserunt"),
        Target: sdk.String("perferendis"),
        TargetClass: sdk.String("ipsam"),
        TherapeuticArea: sdk.String("repellendus"),
        Uniprotkw: sdk.String("sapiente"),
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
    res, err := s.Filter.GetEvidenceFilter(ctx, operations.GetEvidenceFilterRequest{
        DataSource: sdk.String("quo"),
        Datastructure: sdk.String("odit"),
        Datatype: sdk.String("at"),
        Disease: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Format: sdk.String("molestiae"),
        From: sdk.Float64(7991.59),
        Pathway: sdk.String("quod"),
        ScorevalueMax: sdk.Float32(4614.79),
        ScorevalueMin: sdk.Float32(5204.78),
        Size: sdk.Float64(7805.29),
        Sort: sdk.String("dolorum"),
        Target: sdk.String("dicta"),
        Uniprotkw: sdk.String("nam"),
    })
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
    res, err := s.Filter.PostAssociationFilter(ctx, "{"target":["target1", "target2"]}
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
    res, err := s.Filter.PostEvidenceFilter(ctx, "{"target":["ENSG00000094755", "ENSG00000167207"], "disease":["EFO_0003767"]}
")
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
