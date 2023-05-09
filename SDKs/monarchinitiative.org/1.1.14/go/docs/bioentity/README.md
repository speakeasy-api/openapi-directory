# Bioentity

## Overview

Retrieval of domain entities plus associations

### Available Operations

* [GetAnatomyGeneAssociations](#getanatomygeneassociations) - Returns genes associated with a given anatomy
* [~~GetAnatomyGeneByTaxonAssociations~~](#getanatomygenebytaxonassociations) - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon :warning: **Deprecated**
* [GetCaseDiseaseAssociations](#getcasediseaseassociations) - Returns diseases associated with a case
* [GetCaseGenotypeAssociations](#getcasegenotypeassociations) - Returns genotypes associated with a case
* [GetCaseModelAssociations](#getcasemodelassociations) - Returns models associated with a case
* [GetCasePhenotypeAssociations](#getcasephenotypeassociations) - Returns phenotypes associated with a case
* [GetCaseVariantAssociations](#getcasevariantassociations) - Returns variants associated with a case
* [GetDiseaseCaseAssociations](#getdiseasecaseassociations) - Returns cases associated with a disease
* [GetDiseaseGeneAssociations](#getdiseasegeneassociations) - Returns genes associated with a disease
* [GetDiseaseGenotypeAssociations](#getdiseasegenotypeassociations) - Returns genotypes associated with a disease
* [GetDiseaseModelAssociations](#getdiseasemodelassociations) - Returns associations to models of the disease
* [~~GetDiseaseModelTaxonAssociations~~](#getdiseasemodeltaxonassociations) - Returns associations to models of the disease constrained by taxon :warning: **Deprecated**
* [GetDiseasePathwayAssociations](#getdiseasepathwayassociations) - Returns pathways associated with a disease
* [GetDiseasePhenotypeAssociations](#getdiseasephenotypeassociations) - Returns phenotypes associated with disease
* [GetDiseasePublicationAssociations](#getdiseasepublicationassociations) - Returns publications associated with a disease
* [GetDiseaseSubstanceAssociations](#getdiseasesubstanceassociations) - Returns substances associated with a disease
* [GetDiseaseVariantAssociations](#getdiseasevariantassociations) - Returns variants associated with a disease
* [GetFunctionAssociations](#getfunctionassociations) - Returns annotations associated to a function term
* [GetFunctionGeneAssociations](#getfunctiongeneassociations) - Returns genes associated to a GO term
* [GetFunctionPublicationAssociations](#getfunctionpublicationassociations) - Returns publications associated to a GO term
* [GetFunctionTaxonAssociations](#getfunctiontaxonassociations) - Returns taxons associated to a GO term
* [GetGeneAnatomyAssociations](#getgeneanatomyassociations) - Returns anatomical entities associated with a gene
* [GetGeneCaseAssociations](#getgenecaseassociations) - Returns cases associated with a gene
* [GetGeneDiseaseAssociations](#getgenediseaseassociations) - Returns diseases associated with gene
* [GetGeneExpressionAssociations](#getgeneexpressionassociations) - Returns expression events for a gene
* [GetGeneFunctionAssociations](#getgenefunctionassociations) - Returns function associations for a gene
* [GetGeneGenotypeAssociations](#getgenegenotypeassociations) - Returns genotypes associated with a gene
* [GetGeneHomologAssociations](#getgenehomologassociations) - Returns homologs for a gene
* [GetGeneInteractions](#getgeneinteractions) - Returns interactions for a gene
* [GetGeneModelAssociations](#getgenemodelassociations) - Returns models associated with a gene
* [GetGeneOrthologDiseaseAssociations](#getgeneorthologdiseaseassociations) - Return diseases associated with orthologs of a gene
* [GetGeneOrthologPhenotypeAssociations](#getgeneorthologphenotypeassociations) - Return phenotypes associated with orthologs for a gene
* [GetGenePathwayAssociations](#getgenepathwayassociations) - Returns pathways associated with gene
* [GetGenePhenotypeAssociations](#getgenephenotypeassociations) - Returns phenotypes associated with gene
* [GetGenePublicationAssociations](#getgenepublicationassociations) - Returns publications associated with a gene
* [GetGeneVariantAssociations](#getgenevariantassociations) - Returns variants associated with a gene
* [GetGenericAssociations](#getgenericassociations) - Returns associations for an entity regardless of the type
* [GetGenericObject](#getgenericobject) - Returns basic info on object of any type
* [GetGenericObjectByType](#getgenericobjectbytype) - Return basic info on an object for a given type
* [GetGenotypeCaseAssociations](#getgenotypecaseassociations) - Returns cases associated with a genotype
* [GetGenotypeDiseaseAssociations](#getgenotypediseaseassociations) - Returns diseases associated with a genotype
* [GetGenotypeGeneAssociations](#getgenotypegeneassociations) - Returns genes associated with a genotype
* [GetGenotypeGenotypeAssociations](#getgenotypegenotypeassociations) - Returns genotypes-genotype associations
* [GetGenotypeModelAssociations](#getgenotypemodelassociations) - Returns models associated with a genotype
* [GetGenotypePhenotypeAssociations](#getgenotypephenotypeassociations) - Returns phenotypes associated with a genotype
* [GetGenotypePublicationAssociations](#getgenotypepublicationassociations) - Returns publications associated with a genotype
* [GetGenotypeVariantAssociations](#getgenotypevariantassociations) - Returns genotypes-variant associations
* [~~GetGotermGeneAssociations~~](#getgotermgeneassociations) - Returns associations to GO terms for a gene :warning: **Deprecated**
* [GetModelCaseAssociations](#getmodelcaseassociations) - Returns cases associated with a model
* [GetModelDiseaseAssociations](#getmodeldiseaseassociations) - Returns diseases associated with a model
* [GetModelGeneAssociations](#getmodelgeneassociations) - Returns genes associated with a model
* [GetModelGenotypeAssociations](#getmodelgenotypeassociations) - Returns genotypes associated with a model
* [GetModelPhenotypeAssociations](#getmodelphenotypeassociations) - Returns phenotypes associated with a model
* [GetModelPublicationAssociations](#getmodelpublicationassociations) - Returns publications associated with a model
* [GetModelVariantAssociations](#getmodelvariantassociations) - Returns variants associated with a model
* [GetPathwayDiseaseAssociations](#getpathwaydiseaseassociations) - Returns diseases associated with a pathway
* [GetPathwayGeneAssociations](#getpathwaygeneassociations) - Returns genes associated with a pathway
* [GetPathwayPhenotypeAssociations](#getpathwayphenotypeassociations) - Returns phenotypes associated with a pathway
* [GetPhenotypeAnatomyAssociations](#getphenotypeanatomyassociations) - Returns anatomical entities associated with a phenotype
* [GetPhenotypeCaseAssociations](#getphenotypecaseassociations) - Returns cases associated with a phenotype
* [GetPhenotypeDiseaseAssociations](#getphenotypediseaseassociations) - Returns diseases associated with a phenotype
* [GetPhenotypeGeneAssociations](#getphenotypegeneassociations) - Returns genes associated with a phenotype
* [~~GetPhenotypeGeneByTaxonAssociations~~](#getphenotypegenebytaxonassociations) - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon :warning: **Deprecated**
* [GetPhenotypeGenotypeAssociations](#getphenotypegenotypeassociations) - Returns genotypes associated with a phenotype
* [GetPhenotypePathwayAssociations](#getphenotypepathwayassociations) - Returns pathways associated with a phenotype
* [GetPhenotypePublicationAssociations](#getphenotypepublicationassociations) - Returns publications associated with a phenotype
* [GetPhenotypeVariantAssociations](#getphenotypevariantassociations) - Returns variants associated with a phenotype
* [GetPublicationDiseaseAssociations](#getpublicationdiseaseassociations) - Returns diseases associated with a publication
* [GetPublicationGeneAssociations](#getpublicationgeneassociations) - Returns genes associated with a publication
* [GetPublicationGenotypeAssociations](#getpublicationgenotypeassociations) - Returns genotypes associated with a publication
* [GetPublicationModelAssociations](#getpublicationmodelassociations) - Returns models associated with a publication
* [GetPublicationPhenotypeAssociations](#getpublicationphenotypeassociations) - Returns phenotypes associated with a publication
* [GetPublicationVariantAssociations](#getpublicationvariantassociations) - Returns variants associated with a publication
* [GetSubstanceParticipantInAssociations](#getsubstanceparticipantinassociations) - Returns associations between an activity and process and the specified substance
* [GetSubstanceRoleAssociations](#getsubstanceroleassociations) - Returns associations between given drug and roles
* [GetSubstanceTreatsAssociations](#getsubstancetreatsassociations) - Returns substances associated with a disease
* [GetVariantCaseAssociations](#getvariantcaseassociations) - Returns cases associated with a variant
* [GetVariantDiseaseAssociations](#getvariantdiseaseassociations) - Returns diseases associated with a variant
* [GetVariantGeneAssociations](#getvariantgeneassociations) - Returns genes associated with a variant
* [GetVariantGenotypeAssociations](#getvariantgenotypeassociations) - Returns genotypes associated with a variant
* [GetVariantModelAssociations](#getvariantmodelassociations) - Returns models associated with a variant
* [GetVariantPhenotypeAssociations](#getvariantphenotypeassociations) - Returns phenotypes associated with a variant
* [GetVariantPublicationAssociations](#getvariantpublicationassociations) - Returns publications associated with a variant

## GetAnatomyGeneAssociations

Returns genes associated with a given anatomy

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
    res, err := s.Bioentity.GetAnatomyGeneAssociations(ctx, operations.GetAnatomyGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("laboriosam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "saepe",
            "fuga",
            "in",
            "corporis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "96eb10fa-aa23-452c-9955-907aff1a3a2f",
        Q: sdk.String("mollitia"),
        Relation: sdk.String("occaecati"),
        Rows: sdk.Int64(253291),
        Slim: []string{
            "quam",
            "molestiae",
        },
        Sort: sdk.String("velit"),
        Start: sdk.Int64(623510),
        Taxon: []string{
            "quis",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## ~~GetAnatomyGeneByTaxonAssociations~~

For example, + NCBITaxon:10090 (mouse)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Bioentity.GetAnatomyGeneByTaxonAssociations(ctx, operations.GetAnatomyGeneByTaxonAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("vitae"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "animi",
            "enim",
            "odit",
        },
        FetchObjects: sdk.Bool(false),
        ID: "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547",
        Q: sdk.String("dicta"),
        Relation: sdk.String("harum"),
        Rows: sdk.Int64(317983),
        Slim: []string{
            "commodi",
            "repudiandae",
            "quae",
            "ipsum",
        },
        Sort: sdk.String("quidem"),
        Start: sdk.Int64(565189),
        Taxid: "excepturi",
        Taxon: []string{
            "modi",
            "praesentium",
            "rem",
            "voluptates",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCaseDiseaseAssociations

Returns diseases associated with a case

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
    res, err := s.Bioentity.GetCaseDiseaseAssociations(ctx, operations.GetCaseDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("quasi"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "sint",
            "veritatis",
            "itaque",
            "incidunt",
        },
        FetchObjects: sdk.Bool(false),
        ID: "50ad2abd-4426-4980-ad50-2a94bb4f63c9",
        Rows: sdk.Int64(396098),
        Slim: []string{
            "necessitatibus",
            "sint",
            "officia",
        },
        Start: sdk.Int64(223081),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetCaseGenotypeAssociations

Returns genotypes associated with a case

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
    res, err := s.Bioentity.GetCaseGenotypeAssociations(ctx, operations.GetCaseGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("debitis"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "dolorum",
            "in",
            "in",
            "illum",
        },
        FetchObjects: sdk.Bool(false),
        ID: "fb14cd66-ae39-45ef-b9ba-88f3a6699707",
        Rows: sdk.Int64(301575),
        Slim: []string{
            "id",
            "labore",
            "labore",
        },
        Start: sdk.Int64(383462),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetCaseModelAssociations

Returns models associated with a case

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
    res, err := s.Bioentity.GetCaseModelAssociations(ctx, operations.GetCaseModelAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("natus"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "eum",
            "vero",
            "aspernatur",
        },
        FetchObjects: sdk.Bool(false),
        ID: "14195989-0afa-4563-a251-6fe4c8b711e5",
        Rows: sdk.Int64(714242),
        Slim: []string{
            "repellat",
            "quibusdam",
        },
        Start: sdk.Int64(149448),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetCasePhenotypeAssociations

Returns phenotypes associated with a case

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
    res, err := s.Bioentity.GetCasePhenotypeAssociations(ctx, operations.GetCasePhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("saepe"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "accusantium",
            "consequuntur",
            "praesentium",
            "natus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb",
        Rows: sdk.Int64(171629),
        Slim: []string{
            "totam",
            "dignissimos",
        },
        Start: sdk.Int64(54338),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetCaseVariantAssociations

Returns variants associated with a case

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
    res, err := s.Bioentity.GetCaseVariantAssociations(ctx, operations.GetCaseVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("quis"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "eos",
        },
        FetchObjects: sdk.Bool(false),
        ID: "02c73d5f-e9b9-40c2-8909-b3fe49a8d9cb",
        Rows: sdk.Int64(964490),
        Slim: []string{
            "quos",
            "aliquid",
        },
        Start: sdk.Int64(212390),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseaseCaseAssociations

Returns cases associated with a disease

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
    res, err := s.Bioentity.GetDiseaseCaseAssociations(ctx, operations.GetDiseaseCaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("dolorem"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "qui",
        },
        FetchObjects: sdk.Bool(false),
        ID: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
        Rows: sdk.Int64(536579),
        Slim: []string{
            "necessitatibus",
            "distinctio",
            "asperiores",
        },
        Start: sdk.Int64(469497),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseaseGeneAssociations

Returns genes associated with a disease

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
    res, err := s.Bioentity.GetDiseaseGeneAssociations(ctx, operations.GetDiseaseGeneAssociationsRequest{
        AssociationType: operations.GetDiseaseGeneAssociationsAssociationTypeEnumCausal.ToPointer(),
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("voluptate"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "saepe",
            "eius",
            "aspernatur",
        },
        FetchObjects: sdk.Bool(false),
        ID: "03ce5e6a-95d8-4a0d-846c-e2af7a73cf3b",
        Q: sdk.String("accusamus"),
        Relation: sdk.String("numquam"),
        Rows: sdk.Int64(313692),
        Slim: []string{
            "sapiente",
        },
        Sort: sdk.String("totam"),
        Start: sdk.Int64(471752),
        Taxon: []string{
            "expedita",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseaseGenotypeAssociations

Returns genotypes associated with a disease

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
    res, err := s.Bioentity.GetDiseaseGenotypeAssociations(ctx, operations.GetDiseaseGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("neque"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "vel",
        },
        FetchObjects: sdk.Bool(false),
        ID: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
        Q: sdk.String("hic"),
        Relation: sdk.String("voluptatem"),
        Rows: sdk.Int64(765326),
        Slim: []string{
            "nobis",
            "et",
            "saepe",
        },
        Sort: sdk.String("ipsum"),
        Start: sdk.Int64(83422),
        Taxon: []string{
            "quos",
            "tempore",
            "cupiditate",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseaseModelAssociations

In the association object returned, the subject will be the disease, and the object will be the model.
The model may be a gene or genetic element.

If the query disease is a general class, the association subject may be to a specific disease.

In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.

In other cases, the association will be *indirect*, for
example, chaining over orthology. In these cases the chain
will be reflected in the *evidence graph*

* TODO: provide hook into owlsim for dynamic computation of models by similarity

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
    res, err := s.Bioentity.GetDiseaseModelAssociations(ctx, operations.GetDiseaseModelAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("aperiam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "dolorem",
            "dolore",
            "labore",
            "adipisci",
        },
        FetchObjects: sdk.Bool(false),
        ID: "a1108e0a-dcf4-4b92-9879-fce953f73ef7",
        Q: sdk.String("hic"),
        Relation: sdk.String("distinctio"),
        Rows: sdk.Int64(799203),
        Slim: []string{
            "similique",
            "facilis",
        },
        Sort: sdk.String("vero"),
        Start: sdk.Int64(498140),
        Taxon: []string{
            "quibusdam",
            "illum",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## ~~GetDiseaseModelTaxonAssociations~~

See /disease/<id>/models route for full details

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Bioentity.GetDiseaseModelTaxonAssociations(ctx, operations.GetDiseaseModelTaxonAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("sequi"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "impedit",
            "aut",
            "voluptatibus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
        Rows: sdk.Int64(788873),
        Slim: []string{
            "ea",
            "impedit",
            "corporis",
            "veniam",
        },
        Start: sdk.Int64(399499),
        Taxon: "inventore",
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseasePathwayAssociations

Returns pathways associated with a disease

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
    res, err := s.Bioentity.GetDiseasePathwayAssociations(ctx, operations.GetDiseasePathwayAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("magnam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quo",
            "consectetur",
        },
        FetchObjects: sdk.Bool(false),
        ID: "e250fb00-8c42-4e14-9aac-366c8dd6b144",
        Q: sdk.String("explicabo"),
        Relation: sdk.String("provident"),
        Rows: sdk.Int64(55374),
        Slim: []string{
            "magnam",
            "odio",
        },
        Sort: sdk.String("eius"),
        Start: sdk.Int64(458515),
        Taxon: []string{
            "rem",
            "fuga",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseasePhenotypeAssociations

Returns phenotypes associated with disease

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
    res, err := s.Bioentity.GetDiseasePhenotypeAssociations(ctx, operations.GetDiseasePhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("reprehenderit"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "fugiat",
            "ut",
            "eum",
        },
        FetchObjects: sdk.Bool(false),
        ID: "6d28c10a-b3cd-4ca4-a519-04e523c7e0bc",
        Q: sdk.String("dignissimos"),
        Relation: sdk.String("inventore"),
        Rows: sdk.Int64(469498),
        Slim: []string{
            "accusamus",
            "aliquam",
            "odio",
        },
        Sort: sdk.String("occaecati"),
        Start: sdk.Int64(414567),
        Taxon: []string{
            "dolores",
            "deserunt",
            "molestiae",
            "accusantium",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.D2PAssociationResults != nil {
        // handle response
    }
}
```

## GetDiseasePublicationAssociations

Returns publications associated with a disease

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
    res, err := s.Bioentity.GetDiseasePublicationAssociations(ctx, operations.GetDiseasePublicationAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("porro"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quas",
            "praesentium",
        },
        FetchObjects: sdk.Bool(false),
        ID: "282aa482-562f-4222-a981-7ee17cbe61e6",
        Q: sdk.String("harum"),
        Relation: sdk.String("molestiae"),
        Rows: sdk.Int64(699622),
        Slim: []string{
            "minima",
            "distinctio",
            "eligendi",
        },
        Sort: sdk.String("sit"),
        Start: sdk.Int64(636061),
        Taxon: []string{
            "adipisci",
            "cumque",
            "consequuntur",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetDiseaseSubstanceAssociations

e.g. drugs or small molecules used to treat

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
    res, err := s.Bioentity.GetDiseaseSubstanceAssociations(ctx, operations.GetDiseaseSubstanceAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("consequatur"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quaerat",
            "sapiente",
            "consectetur",
            "esse",
        },
        FetchObjects: sdk.Bool(false),
        ID: "89fd871f-99dd-42ef-9121-aa6f1e674bdb",
        Rows: sdk.Int64(33304),
        Slim: []string{
            "sapiente",
            "dicta",
        },
        Start: sdk.Int64(355369),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDiseaseVariantAssociations

Returns variants associated with a disease

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
    res, err := s.Bioentity.GetDiseaseVariantAssociations(ctx, operations.GetDiseaseVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("reprehenderit"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "nisi",
            "aut",
        },
        FetchObjects: sdk.Bool(false),
        ID: "82d68ea1-9f1d-4170-9133-9d08086a1840",
        Q: sdk.String("dolor"),
        Relation: sdk.String("occaecati"),
        Rows: sdk.Int64(253191),
        Slim: []string{
            "explicabo",
            "voluptas",
            "aut",
            "dignissimos",
        },
        Sort: sdk.String("dicta"),
        Start: sdk.Int64(981640),
        Taxon: []string{
            "velit",
            "voluptatibus",
            "voluptas",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetFunctionAssociations

Returns annotations associated to a function term

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
    res, err := s.Bioentity.GetFunctionAssociations(ctx, operations.GetFunctionAssociationsRequest{
        Evidence: []string{
            "aperiam",
            "ea",
            "quaerat",
            "consequuntur",
        },
        ID: "dac7af51-5cc4-413a-a63a-ae8d67864dbb",
        Rows: sdk.Int64(414857),
        Start: sdk.Int64(447144),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFunctionGeneAssociations

Returns genes associated to a GO term

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
    res, err := s.Bioentity.GetFunctionGeneAssociations(ctx, operations.GetFunctionGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("corporis"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "assumenda",
            "nemo",
            "recusandae",
            "aliquid",
        },
        FetchObjects: sdk.Bool(false),
        ID: "0b375ed4-f6fb-4ee4-9f33-317fe35b60eb",
        Q: sdk.String("vitae"),
        Relation: sdk.String("accusamus"),
        RelationshipType: operations.GetFunctionGeneAssociationsRelationshipTypeEnumInvolvedInRegulationOf.ToPointer(),
        Rows: sdk.Int64(272437),
        Slim: []string{
            "voluptas",
        },
        Sort: sdk.String("voluptas"),
        Start: sdk.Int64(374296),
        Taxon: []string{
            "nobis",
            "dolorum",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetFunctionPublicationAssociations

Returns publications associated to a GO term

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
    res, err := s.Bioentity.GetFunctionPublicationAssociations(ctx, operations.GetFunctionPublicationAssociationsRequest{
        Evidence: []string{
            "minus",
        },
        ID: "28744ed5-3b88-4f3a-8d8f-5c0b2f2fb7b1",
        Rows: sdk.Int64(611749),
        Start: sdk.Int64(292794),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFunctionTaxonAssociations

Returns taxons associated to a GO term

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
    res, err := s.Bioentity.GetFunctionTaxonAssociations(ctx, operations.GetFunctionTaxonAssociationsRequest{
        Evidence: []string{
            "sed",
            "in",
            "commodi",
        },
        ID: "b26916fe-1f08-4f42-94e3-698f447f603e",
        Rows: sdk.Int64(505866),
        Start: sdk.Int64(708609),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGeneAnatomyAssociations

Returns anatomical entities associated with a gene

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
    res, err := s.Bioentity.GetGeneAnatomyAssociations(ctx, operations.GetGeneAnatomyAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("quaerat"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "ipsam",
            "debitis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "80ca55ef-d20e-4457-a185-8b6a89fbe3a5",
        Q: sdk.String("officia"),
        Relation: sdk.String("dolorum"),
        Rows: sdk.Int64(548361),
        Slim: []string{
            "tempora",
            "atque",
            "fugit",
            "ut",
        },
        Sort: sdk.String("fugiat"),
        Start: sdk.Int64(30235),
        Taxon: []string{
            "expedita",
            "magnam",
            "consequatur",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneCaseAssociations

Returns cases associated with a gene

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
    res, err := s.Bioentity.GetGeneCaseAssociations(ctx, operations.GetGeneCaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("esse"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "sit",
            "voluptatum",
        },
        FetchObjects: sdk.Bool(false),
        ID: "8e518620-65e9-404f-bb11-94b8abf603a7",
        Rows: sdk.Int64(600392),
        Slim: []string{
            "provident",
            "repellendus",
            "delectus",
            "voluptates",
        },
        Start: sdk.Int64(16871),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneDiseaseAssociations

Returns diseases associated with gene

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
    res, err := s.Bioentity.GetGeneDiseaseAssociations(ctx, operations.GetGeneDiseaseAssociationsRequest{
        AssociationType: operations.GetGeneDiseaseAssociationsAssociationTypeEnumBoth.ToPointer(),
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("quidem"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "facere",
            "fuga",
        },
        FetchObjects: sdk.Bool(false),
        ID: "8a50ce18-7f86-4bc1-b3d6-89eee9526f8d",
        Q: sdk.String("error"),
        Relation: sdk.String("blanditiis"),
        Rows: sdk.Int64(379356),
        Slim: []string{
            "atque",
            "atque",
            "sunt",
            "recusandae",
        },
        Sort: sdk.String("dolorum"),
        Start: sdk.Int64(829898),
        Taxon: []string{
            "reiciendis",
            "doloremque",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneExpressionAssociations

Returns expression events for a gene

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
    res, err := s.Bioentity.GetGeneExpressionAssociations(ctx, operations.GetGeneExpressionAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("repudiandae"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "accusantium",
        },
        FetchObjects: sdk.Bool(false),
        ID: "12563f94-e29e-4973-a922-a57a15be3e06",
        Q: sdk.String("ipsa"),
        Relation: sdk.String("totam"),
        Rows: sdk.Int64(61078),
        Slim: []string{
            "eveniet",
            "qui",
        },
        Sort: sdk.String("cum"),
        Start: sdk.Int64(434761),
        Taxon: []string{
            "ratione",
            "laborum",
            "distinctio",
            "voluptatum",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneFunctionAssociations

IMPLEMENTATION DETAILS
----------------------

Note: currently this is implemented as a query to the GO/AmiGO solr instance.
This directly supports IDs such as:

 - ZFIN e.g. ZFIN:ZDB-GENE-050417-357

Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
the standard for biolink is MGI:nnnn, so you should use this (will be transparently
mapped to legacy ID)

Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
mapped behind the scenes for querying.

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
    res, err := s.Bioentity.GetGeneFunctionAssociations(ctx, operations.GetGeneFunctionAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("rem"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "ad",
            "repellat",
        },
        FetchObjects: sdk.Bool(false),
        ID: "0597a60f-f2a5-44a3-9e94-764a3e865e79",
        Rows: sdk.Int64(337477),
        Slim: []string{
            "reiciendis",
            "provident",
        },
        Start: sdk.Int64(133439),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneGenotypeAssociations

Returns genotypes associated with a gene

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
    res, err := s.Bioentity.GetGeneGenotypeAssociations(ctx, operations.GetGeneGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("ullam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "animi",
        },
        FetchObjects: sdk.Bool(false),
        ID: "5a9da660-ff57-4bfa-ad4f-9efc1b4512c1",
        Q: sdk.String("perferendis"),
        Relation: sdk.String("velit"),
        Rows: sdk.Int64(137251),
        Slim: []string{
            "eius",
            "rem",
        },
        Sort: sdk.String("at"),
        Start: sdk.Int64(773084),
        Taxon: []string{
            "sapiente",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneHomologAssociations

Returns homologs for a gene

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
    res, err := s.Bioentity.GetGeneHomologAssociations(ctx, operations.GetGeneHomologAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("eum"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "minima",
        },
        FetchObjects: sdk.Bool(false),
        HomologyType: operations.GetGeneHomologAssociationsHomologyTypeEnumP.ToPointer(),
        ID: "99ebfd0e-9fe6-4c63-aca3-aed011799631",
        Rows: sdk.Int64(169025),
        Slim: []string{
            "nulla",
            "necessitatibus",
            "ipsa",
            "tempora",
        },
        Start: sdk.Int64(470621),
        Taxon: []string{
            "dicta",
            "iusto",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneInteractions

Returns interactions for a gene

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
    res, err := s.Bioentity.GetGeneInteractions(ctx, operations.GetGeneInteractionsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("esse"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "maiores",
            "reiciendis",
            "vel",
        },
        FetchObjects: sdk.Bool(false),
        ID: "1d017476-360a-415d-b6a6-60659a1adeaa",
        Q: sdk.String("libero"),
        Relation: sdk.String("ad"),
        Rows: sdk.Int64(536923),
        Slim: []string{
            "vitae",
            "repellendus",
        },
        Sort: sdk.String("ex"),
        Start: sdk.Int64(775803),
        Taxon: []string{
            "ut",
            "ad",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneModelAssociations

Returns models associated with a gene

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
    res, err := s.Bioentity.GetGeneModelAssociations(ctx, operations.GetGeneModelAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("expedita"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "molestias",
        },
        FetchObjects: sdk.Bool(false),
        ID: "b61891ba-a0fe-41ad-a008-e6f8c5f350d8",
        Q: sdk.String("impedit"),
        Relation: sdk.String("quibusdam"),
        Rows: sdk.Int64(720528),
        Slim: []string{
            "culpa",
            "dolor",
        },
        Sort: sdk.String("aliquam"),
        Start: sdk.Int64(80532),
        Taxon: []string{
            "veritatis",
            "tempora",
            "dolor",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneOrthologDiseaseAssociations

Return diseases associated with orthologs of a gene

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
    res, err := s.Bioentity.GetGeneOrthologDiseaseAssociations(ctx, operations.GetGeneOrthologDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("consequatur"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "sit",
        },
        FetchObjects: sdk.Bool(false),
        ID: "421813d5-208e-4ce7-a253-b668451c6c6e",
        Q: sdk.String("consequuntur"),
        Relation: sdk.String("voluptatem"),
        Rows: sdk.Int64(350207),
        Slim: []string{
            "quasi",
            "nisi",
            "at",
            "vero",
        },
        Sort: sdk.String("est"),
        Start: sdk.Int64(690785),
        Taxon: []string{
            "doloribus",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneOrthologPhenotypeAssociations

Return phenotypes associated with orthologs for a gene

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
    res, err := s.Bioentity.GetGeneOrthologPhenotypeAssociations(ctx, operations.GetGeneOrthologPhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("repudiandae"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "occaecati",
            "nemo",
            "voluptate",
            "blanditiis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "a6458427-3a84-418d-9623-09fb0929921a",
        Q: sdk.String("accusamus"),
        Relation: sdk.String("voluptatibus"),
        Rows: sdk.Int64(719620),
        Slim: []string{
            "delectus",
            "minima",
            "praesentium",
        },
        Sort: sdk.String("maxime"),
        Start: sdk.Int64(300403),
        Taxon: []string{
            "quos",
            "commodi",
            "itaque",
            "commodi",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenePathwayAssociations

Returns pathways associated with gene

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
    res, err := s.Bioentity.GetGenePathwayAssociations(ctx, operations.GetGenePathwayAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("totam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "modi",
            "nam",
            "vero",
            "voluptatem",
        },
        FetchObjects: sdk.Bool(false),
        ID: "56013f59-da75-47a5-9ecf-ef66ef1caa33",
        Q: sdk.String("atque"),
        Relation: sdk.String("ipsum"),
        Rows: sdk.Int64(773035),
        Slim: []string{
            "soluta",
        },
        Sort: sdk.String("repudiandae"),
        Start: sdk.Int64(721430),
        Taxon: []string{
            "iusto",
            "voluptate",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenePhenotypeAssociations

Returns phenotypes associated with gene

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
    res, err := s.Bioentity.GetGenePhenotypeAssociations(ctx, operations.GetGenePhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("sequi"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "neque",
            "quo",
        },
        FetchObjects: sdk.Bool(false),
        ID: "8d72f64d-1db1-4f2c-8310-661e96349e1c",
        Q: sdk.String("voluptatibus"),
        Relation: sdk.String("iste"),
        Rows: sdk.Int64(932562),
        Slim: []string{
            "nisi",
        },
        Sort: sdk.String("itaque"),
        Start: sdk.Int64(242178),
        Taxon: []string{
            "non",
            "dolor",
            "iusto",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenePublicationAssociations

Returns publications associated with a gene

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
    res, err := s.Bioentity.GetGenePublicationAssociations(ctx, operations.GetGenePublicationAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("sit"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "consequatur",
        },
        FetchObjects: sdk.Bool(false),
        ID: "ae6b6bc9-b8f7-459e-ac55-a9741d311352",
        Q: sdk.String("iste"),
        Relation: sdk.String("ex"),
        Rows: sdk.Int64(367626),
        Slim: []string{
            "libero",
            "rem",
            "dolorum",
        },
        Sort: sdk.String("odio"),
        Start: sdk.Int64(144691),
        Taxon: []string{
            "magni",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGeneVariantAssociations

Returns variants associated with a gene

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
    res, err := s.Bioentity.GetGeneVariantAssociations(ctx, operations.GetGeneVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("vel"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quae",
        },
        FetchObjects: sdk.Bool(false),
        ID: "435e139d-bc22-459b-9abd-a8c070e1084c",
        Q: sdk.String("distinctio"),
        Relation: sdk.String("voluptatem"),
        Rows: sdk.Int64(418109),
        Slim: []string{
            "dolores",
            "assumenda",
        },
        Sort: sdk.String("beatae"),
        Start: sdk.Int64(668606),
        Taxon: []string{
            "corrupti",
            "molestiae",
            "provident",
            "accusamus",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenericAssociations

Returns associations for an entity regardless of the type

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
    res, err := s.Bioentity.GetGenericAssociations(ctx, operations.GetGenericAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("necessitatibus"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "sint",
            "ea",
            "autem",
        },
        FetchObjects: sdk.Bool(false),
        ID: "5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5",
        Q: sdk.String("beatae"),
        Relation: sdk.String("unde"),
        Rows: sdk.Int64(476946),
        Slim: []string{
            "cupiditate",
            "fugit",
            "numquam",
            "numquam",
        },
        Sort: sdk.String("nesciunt"),
        Start: sdk.Int64(873557),
        Taxon: []string{
            "dignissimos",
            "optio",
            "necessitatibus",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenericObject

Returns basic info on object of any type

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
    res, err := s.Bioentity.GetGenericObject(ctx, operations.GetGenericObjectRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("corporis"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "expedita",
        },
        FetchObjects: sdk.Bool(false),
        ID: "895c537c-6454-4efb-8b34-896c3ca5acfb",
        Rows: sdk.Int64(878601),
        Slim: []string{
            "repellat",
        },
        Start: sdk.Int64(865946),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BioObject != nil {
        // handle response
    }
}
```

## GetGenericObjectByType

Return basic info on an object for a given type

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
    res, err := s.Bioentity.GetGenericObjectByType(ctx, operations.GetGenericObjectByTypeRequest{
        Direct: sdk.Bool(false),
        DistinctCounts: sdk.Bool(false),
        Evidence: sdk.String("nemo"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "aperiam",
            "odio",
        },
        FetchObjects: sdk.Bool(false),
        GetAssociationCounts: sdk.Bool(false),
        ID: "57792917-7dea-4c64-aecb-573409e3eb1e",
        Rows: sdk.Int64(334474),
        Slim: []string{
            "dolores",
            "nam",
            "dicta",
        },
        Start: sdk.Int64(164488),
        Type: operations.GetGenericObjectByTypeTypeEnumModel,
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGenotypeCaseAssociations

Returns cases associated with a genotype

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
    res, err := s.Bioentity.GetGenotypeCaseAssociations(ctx, operations.GetGenotypeCaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("nobis"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "ducimus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "f116db99-545f-4c95-ba88-970e189dbb30",
        Rows: sdk.Int64(963976),
        Slim: []string{
            "cum",
            "ipsum",
            "adipisci",
            "saepe",
        },
        Start: sdk.Int64(644420),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypeDiseaseAssociations

Returns diseases associated with a genotype

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
    res, err := s.Bioentity.GetGenotypeDiseaseAssociations(ctx, operations.GetGenotypeDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("doloremque"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "veniam",
            "libero",
        },
        FetchObjects: sdk.Bool(false),
        ID: "197cd44e-2f52-4d82-9351-3bb6f48b656b",
        Q: sdk.String("minus"),
        Relation: sdk.String("facere"),
        Rows: sdk.Int64(706061),
        Slim: []string{
            "ad",
        },
        Sort: sdk.String("voluptatibus"),
        Start: sdk.Int64(974589),
        Taxon: []string{
            "debitis",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypeGeneAssociations

Returns genes associated with a genotype

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
    res, err := s.Bioentity.GetGenotypeGeneAssociations(ctx, operations.GetGenotypeGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("labore"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "eos",
            "reprehenderit",
            "nostrum",
        },
        FetchObjects: sdk.Bool(false),
        ID: "37a8cd9e-7319-4c17-bd52-5f77b114eeb5",
        Q: sdk.String("eos"),
        Relation: sdk.String("reiciendis"),
        Rows: sdk.Int64(939161),
        Slim: []string{
            "praesentium",
            "nemo",
        },
        Sort: sdk.String("repellat"),
        Start: sdk.Int64(789770),
        Taxon: []string{
            "nihil",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypeGenotypeAssociations

Genotypes may be related to one another according to the GENO model

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
    res, err := s.Bioentity.GetGenotypeGenotypeAssociations(ctx, operations.GetGenotypeGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("deleniti"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "labore",
        },
        FetchObjects: sdk.Bool(false),
        ID: "d4c98e0c-2bb8-49eb-b5da-d636c600503d",
        Q: sdk.String("praesentium"),
        Relation: sdk.String("quidem"),
        Rows: sdk.Int64(736853),
        Slim: []string{
            "quasi",
        },
        Sort: sdk.String("dicta"),
        Start: sdk.Int64(514922),
        Taxon: []string{
            "earum",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypeModelAssociations

Returns models associated with a genotype

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
    res, err := s.Bioentity.GetGenotypeModelAssociations(ctx, operations.GetGenotypeModelAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("iusto"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "provident",
        },
        FetchObjects: sdk.Bool(false),
        ID: "ae9e057e-b809-4e28-9033-1f3981d4c700",
        Q: sdk.String("rerum"),
        Relation: sdk.String("ea"),
        Rows: sdk.Int64(46791),
        Slim: []string{
            "repellat",
            "velit",
        },
        Sort: sdk.String("porro"),
        Start: sdk.Int64(588639),
        Taxon: []string{
            "eligendi",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypePhenotypeAssociations

Returns phenotypes associated with a genotype

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
    res, err := s.Bioentity.GetGenotypePhenotypeAssociations(ctx, operations.GetGenotypePhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("dignissimos"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "soluta",
        },
        FetchObjects: sdk.Bool(false),
        ID: "9da3f2ce-da7e-423f-a257-411faf4b7544",
        Q: sdk.String("repudiandae"),
        Relation: sdk.String("modi"),
        Rows: sdk.Int64(450209),
        Slim: []string{
            "accusamus",
        },
        Sort: sdk.String("rem"),
        Start: sdk.Int64(44016),
        Taxon: []string{
            "deleniti",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypePublicationAssociations

Returns publications associated with a genotype

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
    res, err := s.Bioentity.GetGenotypePublicationAssociations(ctx, operations.GetGenotypePublicationAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("enim"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "similique",
            "minima",
        },
        FetchObjects: sdk.Bool(false),
        ID: "b40463a7-d575-4f14-80e7-64ad7334ec1b",
        Q: sdk.String("iusto"),
        Relation: sdk.String("quas"),
        Rows: sdk.Int64(91728),
        Slim: []string{
            "amet",
            "autem",
            "fuga",
        },
        Sort: sdk.String("alias"),
        Start: sdk.Int64(526413),
        Taxon: []string{
            "quos",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetGenotypeVariantAssociations

Returns genotypes-variant associations

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
    res, err := s.Bioentity.GetGenotypeVariantAssociations(ctx, operations.GetGenotypeVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("laudantium"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "veritatis",
            "quae",
            "eaque",
            "saepe",
        },
        FetchObjects: sdk.Bool(false),
        ID: "fada200e-f042-42eb-a164-cf9ab8366c72",
        Q: sdk.String("velit"),
        Relation: sdk.String("reiciendis"),
        Rows: sdk.Int64(997918),
        Slim: []string{
            "laborum",
            "natus",
            "accusamus",
            "doloremque",
        },
        Sort: sdk.String("nisi"),
        Start: sdk.Int64(700856),
        Taxon: []string{
            "voluptates",
            "non",
            "rem",
            "quia",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## ~~GetGotermGeneAssociations~~

Returns associations to GO terms for a gene

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Bioentity.GetGotermGeneAssociations(ctx, operations.GetGotermGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("ullam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "dicta",
            "voluptatibus",
            "eligendi",
            "quae",
        },
        FetchObjects: sdk.Bool(false),
        ID: "e115c80b-ff91-4854-8ec4-2defcce8f197",
        RelationshipType: operations.GetGotermGeneAssociationsRelationshipTypeEnumInvolvedInRegulationOf.ToPointer(),
        Rows: sdk.Int64(438256),
        Slim: []string{
            "nesciunt",
            "debitis",
        },
        Start: sdk.Int64(423588),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelCaseAssociations

Returns cases associated with a model

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
    res, err := s.Bioentity.GetModelCaseAssociations(ctx, operations.GetModelCaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("neque"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "voluptas",
            "consequuntur",
        },
        FetchObjects: sdk.Bool(false),
        ID: "a7b408f0-5e3d-448f-9af3-13a1f5fd9425",
        Rows: sdk.Int64(583193),
        Slim: []string{
            "alias",
            "quidem",
            "nesciunt",
            "commodi",
        },
        Start: sdk.Int64(956124),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelDiseaseAssociations

Returns diseases associated with a model

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
    res, err := s.Bioentity.GetModelDiseaseAssociations(ctx, operations.GetModelDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("consequuntur"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "debitis",
            "officia",
        },
        FetchObjects: sdk.Bool(false),
        ID: "944f3b75-6c11-4f6c-b7a5-126243835bbc",
        Q: sdk.String("sit"),
        Relation: sdk.String("nemo"),
        Rows: sdk.Int64(633987),
        Slim: []string{
            "amet",
        },
        Sort: sdk.String("deserunt"),
        Start: sdk.Int64(268709),
        Taxon: []string{
            "quod",
            "itaque",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelGeneAssociations

Returns genes associated with a model

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
    res, err := s.Bioentity.GetModelGeneAssociations(ctx, operations.GetModelGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("a"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "enim",
            "doloribus",
            "assumenda",
            "officiis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "10a0ce21-69e5-4100-99c6-dc5e34762799",
        Q: sdk.String("cum"),
        Relation: sdk.String("doloribus"),
        Rows: sdk.Int64(703966),
        Slim: []string{
            "itaque",
            "laboriosam",
            "unde",
        },
        Sort: sdk.String("modi"),
        Start: sdk.Int64(595198),
        Taxon: []string{
            "cum",
            "aspernatur",
            "libero",
            "nam",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelGenotypeAssociations

Returns genotypes associated with a model

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
    res, err := s.Bioentity.GetModelGenotypeAssociations(ctx, operations.GetModelGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("incidunt"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quod",
            "id",
            "saepe",
            "autem",
        },
        FetchObjects: sdk.Bool(false),
        ID: "c3d5db3a-debd-45da-aa4c-506a8aa94c02",
        Q: sdk.String("aliquid"),
        Relation: sdk.String("magnam"),
        Rows: sdk.Int64(308528),
        Slim: []string{
            "hic",
            "nostrum",
            "officiis",
            "unde",
        },
        Sort: sdk.String("nulla"),
        Start: sdk.Int64(621393),
        Taxon: []string{
            "magnam",
            "nostrum",
            "esse",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelPhenotypeAssociations

Returns phenotypes associated with a model

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
    res, err := s.Bioentity.GetModelPhenotypeAssociations(ctx, operations.GetModelPhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("corrupti"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "facere",
            "impedit",
            "quasi",
        },
        FetchObjects: sdk.Bool(false),
        ID: "ac600dec-001a-4c80-ae2e-c09ff8f0f816",
        Q: sdk.String("earum"),
        Relation: sdk.String("doloribus"),
        Rows: sdk.Int64(244569),
        Slim: []string{
            "esse",
            "in",
        },
        Sort: sdk.String("eligendi"),
        Start: sdk.Int64(94697),
        Taxon: []string{
            "vero",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelPublicationAssociations

Returns publications associated with a model

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
    res, err := s.Bioentity.GetModelPublicationAssociations(ctx, operations.GetModelPublicationAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("excepturi"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "qui",
        },
        FetchObjects: sdk.Bool(false),
        ID: "c14125b0-960a-4668-951a-472af923c594",
        Q: sdk.String("excepturi"),
        Relation: sdk.String("maiores"),
        Rows: sdk.Int64(512081),
        Slim: []string{
            "reiciendis",
        },
        Sort: sdk.String("amet"),
        Start: sdk.Int64(363845),
        Taxon: []string{
            "quisquam",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetModelVariantAssociations

Returns variants associated with a model

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
    res, err := s.Bioentity.GetModelVariantAssociations(ctx, operations.GetModelVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("tenetur"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "molestiae",
            "aliquid",
            "asperiores",
        },
        FetchObjects: sdk.Bool(false),
        ID: "fb901c6e-cbb4-4e24-bcf7-89ffafeda53e",
        Q: sdk.String("enim"),
        Relation: sdk.String("officia"),
        Rows: sdk.Int64(902979),
        Slim: []string{
            "repudiandae",
            "accusantium",
        },
        Sort: sdk.String("officia"),
        Start: sdk.Int64(770128),
        Taxon: []string{
            "blanditiis",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPathwayDiseaseAssociations

Returns diseases associated with a pathway

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
    res, err := s.Bioentity.GetPathwayDiseaseAssociations(ctx, operations.GetPathwayDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("eius"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "eos",
            "nobis",
            "natus",
            "minus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "247c8837-3a40-4e19-82f3-2e55055756f5",
        Q: sdk.String("quibusdam"),
        Relation: sdk.String("nemo"),
        Rows: sdk.Int64(382764),
        Slim: []string{
            "sit",
            "quidem",
            "repellendus",
            "perferendis",
        },
        Sort: sdk.String("id"),
        Start: sdk.Int64(958146),
        Taxon: []string{
            "possimus",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPathwayGeneAssociations

Returns genes associated with a pathway

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
    res, err := s.Bioentity.GetPathwayGeneAssociations(ctx, operations.GetPathwayGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("repellat"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "architecto",
            "adipisci",
            "pariatur",
            "harum",
        },
        FetchObjects: sdk.Bool(false),
        ID: "4f62cba3-f894-41ae-bc0b-80a6924d3b2e",
        Q: sdk.String("optio"),
        Relation: sdk.String("delectus"),
        Rows: sdk.Int64(792719),
        Slim: []string{
            "quos",
            "asperiores",
            "voluptatum",
            "iste",
        },
        Sort: sdk.String("corporis"),
        Start: sdk.Int64(37129),
        Taxon: []string{
            "aut",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPathwayPhenotypeAssociations

Returns phenotypes associated with a pathway

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
    res, err := s.Bioentity.GetPathwayPhenotypeAssociations(ctx, operations.GetPathwayPhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("doloribus"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "at",
            "possimus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "3d6fa180-4e54-4c82-b168-a363c8873e48",
        Q: sdk.String("numquam"),
        Relation: sdk.String("sequi"),
        Rows: sdk.Int64(532320),
        Slim: []string{
            "rerum",
        },
        Sort: sdk.String("veritatis"),
        Start: sdk.Int64(949280),
        Taxon: []string{
            "quidem",
            "totam",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPhenotypeAnatomyAssociations

Example IDs:

 * MP:0008521 abnormal Bowman membrane

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
    res, err := s.Bioentity.GetPhenotypeAnatomyAssociations(ctx, operations.GetPhenotypeAnatomyAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("porro"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "magni",
            "nihil",
            "voluptas",
        },
        FetchObjects: sdk.Bool(false),
        ID: "a60a04c4-95cc-4699-971b-51c1bdb1cf4b",
        Rows: sdk.Int64(548256),
        Slim: []string{
            "atque",
            "officiis",
            "cum",
        },
        Start: sdk.Int64(863330),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NamedObjects != nil {
        // handle response
    }
}
```

## GetPhenotypeCaseAssociations

Returns cases associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypeCaseAssociations(ctx, operations.GetPhenotypeCaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("sapiente"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "incidunt",
            "quod",
            "minus",
            "porro",
        },
        FetchObjects: sdk.Bool(false),
        ID: "a99bc7fc-0b2d-4ce1-8873-e42b006d6788",
        Rows: sdk.Int64(470647),
        Slim: []string{
            "rerum",
            "deserunt",
            "atque",
        },
        Start: sdk.Int64(344856),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPhenotypeDiseaseAssociations

Returns diseases associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypeDiseaseAssociations(ctx, operations.GetPhenotypeDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("atque"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "est",
        },
        FetchObjects: sdk.Bool(false),
        ID: "58208c54-fefa-49c9-9f2e-ac5565d307cf",
        Q: sdk.String("recusandae"),
        Relation: sdk.String("voluptates"),
        Rows: sdk.Int64(506250),
        Slim: []string{
            "fugit",
        },
        Sort: sdk.String("sit"),
        Start: sdk.Int64(396234),
        Taxon: []string{
            "sed",
            "deleniti",
            "sunt",
            "nesciunt",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.D2PAssociationResults != nil {
        // handle response
    }
}
```

## GetPhenotypeGeneAssociations

Returns genes associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypeGeneAssociations(ctx, operations.GetPhenotypeGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("delectus"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "aliquam",
            "deserunt",
            "modi",
        },
        FetchObjects: sdk.Bool(false),
        ID: "1c480d3f-2132-4af0-b102-d514f4cc6f18",
        Q: sdk.String("expedita"),
        Relation: sdk.String("hic"),
        Rows: sdk.Int64(569834),
        Slim: []string{
            "sed",
            "beatae",
        },
        Sort: sdk.String("similique"),
        Start: sdk.Int64(408774),
        Taxon: []string{
            "dolore",
            "tenetur",
            "dignissimos",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## ~~GetPhenotypeGeneByTaxonAssociations~~

For example, MP:0001569 + NCBITaxon:10090 (mouse)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    res, err := s.Bioentity.GetPhenotypeGeneByTaxonAssociations(ctx, operations.GetPhenotypeGeneByTaxonAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("esse"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "laudantium",
            "esse",
            "eveniet",
        },
        FetchObjects: sdk.Bool(false),
        ID: "e3e4be75-2c65-4b34-818e-3bb91c8d975e",
        Rows: sdk.Int64(44467),
        Slim: []string{
            "laudantium",
            "tempora",
            "quae",
            "omnis",
        },
        Start: sdk.Int64(848063),
        Taxid: "rem",
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPhenotypeGenotypeAssociations

Returns genotypes associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypeGenotypeAssociations(ctx, operations.GetPhenotypeGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("tenetur"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "modi",
            "earum",
            "architecto",
        },
        FetchObjects: sdk.Bool(false),
        ID: "44f3e07e-dcc4-4aa5-b3ca-bd905a972e05",
        Q: sdk.String("nisi"),
        Relation: sdk.String("molestiae"),
        Rows: sdk.Int64(154130),
        Slim: []string{
            "sed",
            "odit",
            "iusto",
        },
        Sort: sdk.String("expedita"),
        Start: sdk.Int64(176935),
        Taxon: []string{
            "nesciunt",
            "ipsa",
            "sint",
            "dolore",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPhenotypePathwayAssociations

Returns pathways associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypePathwayAssociations(ctx, operations.GetPhenotypePathwayAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("esse"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "distinctio",
        },
        FetchObjects: sdk.Bool(false),
        ID: "f7a4fa87-cf53-45a6-bae5-4ebf60c321f0",
        Q: sdk.String("sed"),
        Relation: sdk.String("amet"),
        Rows: sdk.Int64(699536),
        Slim: []string{
            "nostrum",
            "temporibus",
        },
        Sort: sdk.String("ratione"),
        Start: sdk.Int64(221824),
        Taxon: []string{
            "dignissimos",
            "reiciendis",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPhenotypePublicationAssociations

Returns publications associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypePublicationAssociations(ctx, operations.GetPhenotypePublicationAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("itaque"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "est",
        },
        FetchObjects: sdk.Bool(false),
        ID: "0cc8df79-f0a3-496d-90c3-64b7c15dfbac",
        Q: sdk.String("accusamus"),
        Relation: sdk.String("et"),
        Rows: sdk.Int64(555938),
        Slim: []string{
            "cum",
            "dicta",
            "impedit",
        },
        Sort: sdk.String("tempora"),
        Start: sdk.Int64(908249),
        Taxon: []string{
            "sed",
            "impedit",
            "quas",
            "impedit",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPhenotypeVariantAssociations

Returns variants associated with a phenotype

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
    res, err := s.Bioentity.GetPhenotypeVariantAssociations(ctx, operations.GetPhenotypeVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("vel"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "recusandae",
            "ex",
            "beatae",
            "veritatis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "feeb1c7c-bdb6-4eec-b437-8ba25317747d",
        Q: sdk.String("impedit"),
        Relation: sdk.String("cupiditate"),
        Rows: sdk.Int64(72422),
        Slim: []string{
            "laborum",
            "illum",
        },
        Sort: sdk.String("fugit"),
        Start: sdk.Int64(804879),
        Taxon: []string{
            "repellat",
            "nostrum",
            "illum",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPublicationDiseaseAssociations

Returns diseases associated with a publication

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
    res, err := s.Bioentity.GetPublicationDiseaseAssociations(ctx, operations.GetPublicationDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("quibusdam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "esse",
            "explicabo",
        },
        FetchObjects: sdk.Bool(false),
        ID: "3dc0f5ae-2f3a-46b7-8087-8756143f5a6c",
        Q: sdk.String("provident"),
        Relation: sdk.String("laudantium"),
        Rows: sdk.Int64(722392),
        Slim: []string{
            "enim",
            "ipsam",
        },
        Sort: sdk.String("minima"),
        Start: sdk.Int64(273383),
        Taxon: []string{
            "corrupti",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPublicationGeneAssociations

Returns genes associated with a publication

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
    res, err := s.Bioentity.GetPublicationGeneAssociations(ctx, operations.GetPublicationGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("doloremque"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "numquam",
            "doloremque",
            "cum",
            "nobis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "acc6cbd6-b5f3-4ec9-8930-4f926bad2553",
        Q: sdk.String("voluptatum"),
        Relation: sdk.String("quasi"),
        Rows: sdk.Int64(622566),
        Slim: []string{
            "tempora",
            "voluptate",
            "eius",
        },
        Sort: sdk.String("expedita"),
        Start: sdk.Int64(46384),
        Taxon: []string{
            "possimus",
            "fugit",
            "voluptatem",
            "repudiandae",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPublicationGenotypeAssociations

Returns genotypes associated with a publication

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
    res, err := s.Bioentity.GetPublicationGenotypeAssociations(ctx, operations.GetPublicationGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("corporis"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "eos",
            "aliquam",
        },
        FetchObjects: sdk.Bool(false),
        ID: "8fff639a-910a-4bdc-ab62-676696e1ec00",
        Q: sdk.String("qui"),
        Relation: sdk.String("consequuntur"),
        Rows: sdk.Int64(112224),
        Slim: []string{
            "sequi",
            "amet",
            "exercitationem",
        },
        Sort: sdk.String("illum"),
        Start: sdk.Int64(506532),
        Taxon: []string{
            "similique",
            "eligendi",
            "tempore",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPublicationModelAssociations

Returns models associated with a publication

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
    res, err := s.Bioentity.GetPublicationModelAssociations(ctx, operations.GetPublicationModelAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("amet"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "nobis",
            "asperiores",
            "temporibus",
            "id",
        },
        FetchObjects: sdk.Bool(false),
        ID: "8d0c549e-f030-4049-b8a6-1fa1cf20688f",
        Q: sdk.String("voluptate"),
        Relation: sdk.String("quam"),
        Rows: sdk.Int64(799830),
        Slim: []string{
            "sapiente",
        },
        Sort: sdk.String("reiciendis"),
        Start: sdk.Int64(798953),
        Taxon: []string{
            "inventore",
            "facere",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPublicationPhenotypeAssociations

Returns phenotypes associated with a publication

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
    res, err := s.Bioentity.GetPublicationPhenotypeAssociations(ctx, operations.GetPublicationPhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("maxime"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "ab",
            "ex",
            "consectetur",
        },
        FetchObjects: sdk.Bool(false),
        ID: "f2a3c80a-97ff-4334-8ddf-857a9e61876c",
        Q: sdk.String("aliquid"),
        Relation: sdk.String("mollitia"),
        Rows: sdk.Int64(695347),
        Slim: []string{
            "et",
        },
        Sort: sdk.String("nulla"),
        Start: sdk.Int64(166542),
        Taxon: []string{
            "illum",
            "a",
            "impedit",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetPublicationVariantAssociations

Returns variants associated with a publication

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
    res, err := s.Bioentity.GetPublicationVariantAssociations(ctx, operations.GetPublicationVariantAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("unde"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "facere",
            "voluptas",
        },
        FetchObjects: sdk.Bool(false),
        ID: "fecd7993-9006-46a6-92d0-00355338cec0",
        Q: sdk.String("totam"),
        Relation: sdk.String("iure"),
        Rows: sdk.Int64(982927),
        Slim: []string{
            "fugit",
            "veritatis",
            "necessitatibus",
        },
        Sort: sdk.String("iste"),
        Start: sdk.Int64(116463),
        Taxon: []string{
            "consequuntur",
            "cumque",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetSubstanceParticipantInAssociations

Examples relationships:

 * substance is a metabolite of a process
 * substance is synthesized by a process
 * substance is modified by an activity
 * substance elicits a response program/pathway
 * substance is transported by activity or pathway

For example, CHEBI:40036 (amitrole)

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
    res, err := s.Bioentity.GetSubstanceParticipantInAssociations(ctx, operations.GetSubstanceParticipantInAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("quidem"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "beatae",
        },
        FetchObjects: sdk.Bool(false),
        ID: "19167b8e-3c8d-4b03-808d-6d364ffd4559",
        Rows: sdk.Int64(3709),
        Slim: []string{
            "quibusdam",
            "dicta",
        },
        Start: sdk.Int64(154840),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetSubstanceRoleAssociations

Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)

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
    res, err := s.Bioentity.GetSubstanceRoleAssociations(ctx, operations.GetSubstanceRoleAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("commodi"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quibusdam",
        },
        FetchObjects: sdk.Bool(false),
        ID: "48e935c2-c9e8-41f3-8be3-e43202d72165",
        Rows: sdk.Int64(453198),
        Slim: []string{
            "minima",
            "sit",
        },
        Start: sdk.Int64(426527),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Associations != nil {
        // handle response
    }
}
```

## GetSubstanceTreatsAssociations

e.g. drugs or small molecules used to treat

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
    res, err := s.Bioentity.GetSubstanceTreatsAssociations(ctx, operations.GetSubstanceTreatsAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("laboriosam"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "quasi",
            "rem",
        },
        FetchObjects: sdk.Bool(false),
        ID: "70d9d21f-9ad0-430c-8ecc-11a083642906",
        Rows: sdk.Int64(512370),
        Slim: []string{
            "laudantium",
            "ullam",
            "aut",
        },
        Start: sdk.Int64(154425),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVariantCaseAssociations

Returns cases associated with a variant

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
    res, err := s.Bioentity.GetVariantCaseAssociations(ctx, operations.GetVariantCaseAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("officia"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "corporis",
            "accusamus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "7f73bc84-5e32-40a3-99f4-badf947c9a86",
        Rows: sdk.Int64(469384),
        Slim: []string{
            "optio",
            "incidunt",
            "eos",
        },
        Start: sdk.Int64(299379),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetVariantDiseaseAssociations

Returns diseases associated with a variant

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
    res, err := s.Bioentity.GetVariantDiseaseAssociations(ctx, operations.GetVariantDiseaseAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("dolores"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "eum",
            "vel",
        },
        FetchObjects: sdk.Bool(false),
        ID: "5816ddca-8ef5-41fc-b4c5-93ec12cdaad0",
        Q: sdk.String("accusamus"),
        Relation: sdk.String("placeat"),
        Rows: sdk.Int64(464878),
        Slim: []string{
            "delectus",
            "saepe",
            "facere",
        },
        Sort: sdk.String("nobis"),
        Start: sdk.Int64(869088),
        Taxon: []string{
            "aut",
            "temporibus",
            "tenetur",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetVariantGeneAssociations

Returns genes associated with a variant

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
    res, err := s.Bioentity.GetVariantGeneAssociations(ctx, operations.GetVariantGeneAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("incidunt"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "corrupti",
            "similique",
        },
        FetchObjects: sdk.Bool(false),
        ID: "47f9390c-5888-4098-bdab-f9ef3ffdd9f7",
        Q: sdk.String("voluptatibus"),
        Relation: sdk.String("aut"),
        Rows: sdk.Int64(465732),
        Slim: []string{
            "similique",
            "asperiores",
            "modi",
        },
        Sort: sdk.String("facere"),
        Start: sdk.Int64(208639),
        Taxon: []string{
            "in",
            "sed",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetVariantGenotypeAssociations

Returns genotypes associated with a variant

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
    res, err := s.Bioentity.GetVariantGenotypeAssociations(ctx, operations.GetVariantGenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("non"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "fugiat",
            "soluta",
            "ipsa",
            "reiciendis",
        },
        FetchObjects: sdk.Bool(false),
        ID: "4d281187-d568-444e-9ed8-5a9065e628bd",
        Q: sdk.String("reiciendis"),
        Relation: sdk.String("placeat"),
        Rows: sdk.Int64(175275),
        Slim: []string{
            "nesciunt",
        },
        Sort: sdk.String("quia"),
        Start: sdk.Int64(693724),
        Taxon: []string{
            "quo",
            "laudantium",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetVariantModelAssociations

Returns models associated with a variant

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
    res, err := s.Bioentity.GetVariantModelAssociations(ctx, operations.GetVariantModelAssociationsRequest{
        Direct: sdk.Bool(false),
        Evidence: sdk.String("dignissimos"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "omnis",
            "fugit",
            "dolorem",
        },
        FetchObjects: sdk.Bool(false),
        ID: "b7e13584-f7ae-412c-a891-f82ce1157172",
        Rows: sdk.Int64(209602),
        Slim: []string{
            "exercitationem",
        },
        Start: sdk.Int64(226143),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetVariantPhenotypeAssociations

Returns phenotypes associated with a variant

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
    res, err := s.Bioentity.GetVariantPhenotypeAssociations(ctx, operations.GetVariantPhenotypeAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("voluptate"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "pariatur",
            "minus",
        },
        FetchObjects: sdk.Bool(false),
        ID: "fa89df97-5e35-4668-a092-e9c3ddc5f111",
        Q: sdk.String("facere"),
        Relation: sdk.String("earum"),
        Rows: sdk.Int64(672273),
        Slim: []string{
            "voluptatem",
        },
        Sort: sdk.String("odit"),
        Start: sdk.Int64(398847),
        Taxon: []string{
            "enim",
            "numquam",
            "architecto",
            "est",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```

## GetVariantPublicationAssociations

Returns publications associated with a variant

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
    res, err := s.Bioentity.GetVariantPublicationAssociations(ctx, operations.GetVariantPublicationAssociationsRequest{
        Direct: sdk.Bool(false),
        DirectTaxon: sdk.Bool(false),
        Evidence: sdk.String("quaerat"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Facet: sdk.Bool(false),
        FacetFields: []string{
            "vitae",
            "omnis",
            "alias",
            "sapiente",
        },
        FetchObjects: sdk.Bool(false),
        ID: "eb21780b-ccc0-4dbb-9db4-84708fb4e391",
        Q: sdk.String("officiis"),
        Relation: sdk.String("eum"),
        Rows: sdk.Int64(701257),
        Slim: []string{
            "ab",
            "ad",
            "blanditiis",
            "porro",
        },
        Sort: sdk.String("labore"),
        Start: sdk.Int64(773889),
        Taxon: []string{
            "earum",
            "ullam",
        },
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
