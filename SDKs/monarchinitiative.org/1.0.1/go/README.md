# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
    
    req := operations.GetAssociationBySubjectAndAssocTypeRequest{
        PathParams: operations.GetAssociationBySubjectAndAssocTypePathParams{
            AssociationType: "temporibus",
        },
        QueryParams: operations.GetAssociationBySubjectAndAssocTypeQueryParams{
            Evidence: "est",
            ExcludeAutomaticAssertions: true,
            Object: "quisquam",
            Rows: 1089025540522894394,
            Start: 7427260158299952114,
            Subject: "et",
            UnselectEvidence: true,
            UseCompactAssociations: false,
        },
    }
    
    res, err := s.Association.GetAssociationBySubjectAndAssocType(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### association

* `GetAssociationBySubjectAndAssocType` - Returns list of matching associations of a given type
* `GetAssociationBySubjectAndObjectCategorySearch` - Returns list of matching associations between a given subject and object category
* `GetAssociationBySubjectCategorySearch` - Returns list of matching associations for a given subject category
* `GetAssociationObject` - Returns the association with a given identifier
* `GetAssociationsBetween` - Returns associations connecting two entities
* `GetAssociationsFrom` - Returns list of matching associations starting from a given subject (source)
* `GetAssociationsTo` - Returns list of matching associations pointing to a given object (target)

### bioentity

* `GetAnatomyGeneAssociations` - Returns genes associated with a given anatomy
* `GetAnatomyGeneByTaxonAssociations` - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
* `GetCaseDiseaseAssociations` - Returns diseases associated with a case
* `GetCaseGenotypeAssociations` - Returns genotypes associated with a case
* `GetCaseModelAssociations` - Returns models associated with a case
* `GetCasePhenotypeAssociations` - Returns phenotypes associated with a case
* `GetCaseVariantAssociations` - Returns variants associated with a case
* `GetDiseaseCaseAssociations` - Returns cases associated with a disease
* `GetDiseaseGeneAssociations` - Returns genes associated with a disease
* `GetDiseaseGenotypeAssociations` - Returns genotypes associated with a disease
* `GetDiseaseModelAssociations` - Returns associations to models of the disease
* `GetDiseaseModelTaxonAssociations` - Returns associations to models of the disease constrained by taxon
* `GetDiseasePathwayAssociations` - Returns pathways associated with a disease
* `GetDiseasePhenotypeAssociations` - Returns phenotypes associated with disease
* `GetDiseasePublicationAssociations` - Returns publications associated with a disease
* `GetDiseaseSubstanceAssociations` - Returns substances associated with a disease
* `GetDiseaseVariantAssociations` - Returns variants associated with a disease
* `GetFunctionAssociations` - Returns annotations associated to a function term
* `GetFunctionGeneAssociations` - Returns genes associated to a GO term
* `GetFunctionPublicationAssociations` - Returns publications associated to a GO term
* `GetFunctionTaxonAssociations` - Returns taxons associated to a GO term
* `GetGeneAnatomyAssociations` - Returns anatomical entities associated with a gene
* `GetGeneCaseAssociations` - Returns cases associated with a gene
* `GetGeneDiseaseAssociations` - Returns diseases associated with gene
* `GetGeneExpressionAssociations` - Returns expression events for a gene
* `GetGeneFunctionAssociations` - Returns function associations for a gene
* `GetGeneGenotypeAssociations` - Returns genotypes associated with a gene
* `GetGeneHomologAssociations` - Returns homologs for a gene
* `GetGeneInteractions` - Returns interactions for a gene
* `GetGeneModelAssociations` - Returns models associated with a gene
* `GetGeneOrthologDiseaseAssociations` - Return diseases associated with orthologs of a gene
* `GetGeneOrthologPhenotypeAssociations` - Return phenotypes associated with orthologs for a gene
* `GetGenePathwayAssociations` - Returns pathways associated with gene
* `GetGenePhenotypeAssociations` - Returns phenotypes associated with gene
* `GetGenePublicationAssociations` - Returns publications associated with a gene
* `GetGeneVariantAssociations` - Returns variants associated with a gene
* `GetGenericAssociations` - Returns associations for an entity regardless of the type
* `GetGenericObject` - Returns basic info on object of any type
* `GetGenericObjectByType` - Return basic info on an object for a given type
* `GetGenotypeCaseAssociations` - Returns cases associated with a genotype
* `GetGenotypeDiseaseAssociations` - Returns diseases associated with a genotype
* `GetGenotypeGeneAssociations` - Returns genes associated with a genotype
* `GetGenotypeGenotypeAssociations` - Returns genotypes-genotype associations
* `GetGenotypeModelAssociations` - Returns models associated with a genotype
* `GetGenotypePhenotypeAssociations` - Returns phenotypes associated with a genotype
* `GetGenotypePublicationAssociations` - Returns publications associated with a genotype
* `GetGenotypeVariantAssociations` - Returns genotypes-variant associations
* `GetGotermGeneAssociations` - Returns associations to GO terms for a gene
* `GetModelCaseAssociations` - Returns cases associated with a model
* `GetModelDiseaseAssociations` - Returns diseases associated with a model
* `GetModelGeneAssociations` - Returns genes associated with a model
* `GetModelGenotypeAssociations` - Returns genotypes associated with a model
* `GetModelPhenotypeAssociations` - Returns phenotypes associated with a model
* `GetModelPublicationAssociations` - Returns publications associated with a model
* `GetModelVariantAssociations` - Returns variants associated with a model
* `GetPathwayDiseaseAssociations` - Returns diseases associated with a pathway
* `GetPathwayGeneAssociations` - Returns genes associated with a pathway
* `GetPathwayPhenotypeAssociations` - Returns phenotypes associated with a pathway
* `GetPhenotypeAnatomyAssociations` - Returns anatomical entities associated with a phenotype
* `GetPhenotypeCaseAssociations` - Returns cases associated with a phenotype
* `GetPhenotypeDiseaseAssociations` - Returns diseases associated with a phenotype
* `GetPhenotypeGeneAssociations` - Returns genes associated with a phenotype
* `GetPhenotypeGeneByTaxonAssociations` - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
* `GetPhenotypeGenotypeAssociations` - Returns genotypes associated with a phenotype
* `GetPhenotypePathwayAssociations` - Returns pathways associated with a phenotype
* `GetPhenotypePublicationAssociations` - Returns publications associated with a phenotype
* `GetPhenotypeVariantAssociations` - Returns variants associated with a phenotype
* `GetPublicationDiseaseAssociations` - Returns diseases associated with a publication
* `GetPublicationGeneAssociations` - Returns genes associated with a publication
* `GetPublicationGenotypeAssociations` - Returns genotypes associated with a publication
* `GetPublicationModelAssociations` - Returns models associated with a publication
* `GetPublicationPhenotypeAssociations` - Returns phenotypes associated with a publication
* `GetPublicationVariantAssociations` - Returns variants associated with a publication
* `GetSubstanceParticipantInAssociations` - Returns associations between an activity and process and the specified substance
* `GetSubstanceRoleAssociations` - Returns associations between given drug and roles
* `GetSubstanceTreatsAssociations` - Returns substances associated with a disease
* `GetVariantCaseAssociations` - Returns cases associated with a variant
* `GetVariantDiseaseAssociations` - Returns diseases associated with a variant
* `GetVariantGeneAssociations` - Returns genes associated with a variant
* `GetVariantGenotypeAssociations` - Returns genotypes associated with a variant
* `GetVariantModelAssociations` - Returns models associated with a variant
* `GetVariantPhenotypeAssociations` - Returns phenotypes associated with a variant
* `GetVariantPublicationAssociations` - Returns publications associated with a variant

### bioentityset

* `GetEntitySetAssociations` - Returns compact associations for a given input set
* `GetEntitySetGraphResource` - TODO Graph object spanning all entities
* `GetEntitySetSummary` - Summary statistics for objects associated
* `GetOverRepresentation` - Summary statistics for objects associated

### bioentityset/homologs

* `GetEntitySetHomologs` - Returns homology associations for a given input set of genes

### bioentityset/slimmer

* `GetEntitySetAnatomySlimmer` - For a given gene(s), summarize its annotations over a defined set of slim
* `GetEntitySetFunctionSlimmer` - For a given gene(s), summarize its annotations over a defined set of slim
* `GetEntitySetPhenotypeSlimmer` - For a given gene(s), summarize its annotations over a defined set of slim

### cam

* `GetActivityCollection` - Returns list of models
* `GetInstanceObject` - Returns list of matches
* `GetModelCollection` - Returns list of ALL models
* `GetModelContributors` - Returns list of all contributors across all models
* `GetModelInstances` - Returns list of all instances
* `GetModelObject` - Returns a complete model
* `GetModelProperties` - Returns list of all properties used across all models
* `GetModelPropertyValues` - Returns list property-values for all models
* `GetModelQuery` - Returns list of models matching query
* `GetPhysicalInteraction` - Returns list of models

### evidence/graph

* `GetEvidenceGraphObject` - Returns evidence graph object for a given association
* `GetEvidenceGraphTable` - Returns evidence as a association_results object given an association

### genome/features

* `GetFeaturesWithinResource` - Returns list of matches

### graph

* `GetEdgeResource` - Returns edges emanating from a given node
* `GetNodeResource` - Returns a graph node

### identifier/mapper

* `GetIdentifierMapper` - TODO maps a list of identifiers from a source to a target

### identifier/prefixes

* `GetPrefixCollection` - Returns list of prefixes
* `GetPrefixContract` - Returns contracted URI
* `GetPrefixExpand` - Returns expanded URI

### individual

* `GetIndividual` - Returns list of matches
* `GetPedigree` - Returns list of matches

### mart

* `GetMartCaseAssociationsResource` - Bulk download of case associations
* `GetMartDiseaseAssociationsResource` - Bulk download of disease associations
* `GetMartGeneAssociationsResource` - Bulk download of gene associations
* `GetMartOrthologAssociationsResource` - Bulk download of orthologs
* `GetMartParalogAssociationsResource` - Bulk download of paralogs

### metadata

* `GetMetadataForDatasets` - Get metadata for all datasets from SciGraph

### nlp/annotate

* `GetAnnotate` - Annotate a given text using SciGraph annotator
* `GetAnnotateEntities` - Annotate a given content using SciGraph annotator and get all entities from content
* `PostAnnotate` - Annotate a given text using SciGraph annotator
* `PostAnnotateEntities` - Annotate a given content using SciGraph annotator and get all entities from content

### ontol

* `GetExtractOntologySubgraphResource` - Extract a subgraph from an ontology
* `GetInformationContentResource` - Returns information content (IC) for a set of relevant ontology classes
* `PostExtractOntologySubgraphResource` - Extract a subgraph from an ontology

### ontol/labeler

* `GetOntolLabelerResource` - Fetches a map from CURIEs/IDs to labels

### ontology

* `GetOntologySubset` - Returns meta data of an ontology subset (slim)
* `GetOntologyTerm` - Returns meta data of an ontology term
* `GetOntologyTermGraph` - Returns graph of an ontology term
* `GetOntologyTermSubgraph` - Extract a subgraph from an ontology term
* `GetOntologyTermSubsets` - Returns subsets (slims) associated to an ontology term
* `GetOntologyTermsSharedAncestor` - Returns the ancestor ontology terms shared by two ontology terms

### owl/ontology

* `GetDlQuery` - Placeholder - use OWLery for now
* `GetSparqlQuery` - Placeholder - use direct SPARQL endpoint for now

### pair/sim

* `GetPairSimJaccardResource` - Get pairwise similarity

### relation/usage

* `GetRelationUsageBetweenResource` - All relations used plus count of associations
* `GetRelationUsagePivotLabelResource` - Relation usage count for all subj x obj category combinations, showing label
* `GetRelationUsagePivotResource` - Relation usage count for all subj x obj category combinations
* `GetRelationUsageResource` - All relations used plus count of associations

### search

* `GetAutocomplete` - Returns list of matching concepts or entities using lexical search
* `GetSearchEntities` - Returns list of matching concepts or entities using lexical search
* `GetSearchHpoEntities` - Returns list of matching concepts or entities using lexical search

### sim

* `GetAnnotationScore` - Get annotation score
* `GetSimCompare` - Compare a reference profile vs one profiles
* `GetSimSearch` - Search for phenotypically similar diseases or model genes
* `PostAnnotationScore` - Get annotation score
* `PostSimCompare` - Compare a reference profile vs one or more profiles

### variation/set

* `DeleteVariantSetItem` - Deletes variant set
* `GetVariantAnalyze` - Returns list of matches
* `GetVariantSetItem` - Returns a variant set
* `GetVariantSetsArchiveCollection` - Returns list of variant sets from a specified time period
* `GetVariantSetsCollection` - Returns list of variant sets
* `PostVariantSetsCollection` - Creates a new variant set
* `PutVariantSetItem` - Updates a variant set

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
