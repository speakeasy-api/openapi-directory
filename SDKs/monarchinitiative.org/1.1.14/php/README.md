# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### association

* `getAssociationBySubjectAndAssocType` - Returns list of matching associations of a given type
* `getAssociationBySubjectAndObjectCategorySearch` - Returns list of matching associations between a given subject and object category
* `getAssociationBySubjectCategorySearch` - Returns list of matching associations for a given subject category
* `getAssociationObject` - Returns the association with a given identifier
* `getAssociationsBetween` - Returns associations connecting two entities
* `getAssociationsFrom` - Returns list of matching associations starting from a given subject (source)
* `getAssociationsTo` - Returns list of matching associations pointing to a given object (target)

### bioentity

* `getAnatomyGeneAssociations` - Returns genes associated with a given anatomy
* `getAnatomyGeneByTaxonAssociations` - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
* `getCaseDiseaseAssociations` - Returns diseases associated with a case
* `getCaseGenotypeAssociations` - Returns genotypes associated with a case
* `getCaseModelAssociations` - Returns models associated with a case
* `getCasePhenotypeAssociations` - Returns phenotypes associated with a case
* `getCaseVariantAssociations` - Returns variants associated with a case
* `getDiseaseCaseAssociations` - Returns cases associated with a disease
* `getDiseaseGeneAssociations` - Returns genes associated with a disease
* `getDiseaseGenotypeAssociations` - Returns genotypes associated with a disease
* `getDiseaseModelAssociations` - Returns associations to models of the disease
* `getDiseaseModelTaxonAssociations` - Returns associations to models of the disease constrained by taxon
* `getDiseasePathwayAssociations` - Returns pathways associated with a disease
* `getDiseasePhenotypeAssociations` - Returns phenotypes associated with disease
* `getDiseasePublicationAssociations` - Returns publications associated with a disease
* `getDiseaseSubstanceAssociations` - Returns substances associated with a disease
* `getDiseaseVariantAssociations` - Returns variants associated with a disease
* `getFunctionAssociations` - Returns annotations associated to a function term
* `getFunctionGeneAssociations` - Returns genes associated to a GO term
* `getFunctionPublicationAssociations` - Returns publications associated to a GO term
* `getFunctionTaxonAssociations` - Returns taxons associated to a GO term
* `getGeneAnatomyAssociations` - Returns anatomical entities associated with a gene
* `getGeneCaseAssociations` - Returns cases associated with a gene
* `getGeneDiseaseAssociations` - Returns diseases associated with gene
* `getGeneExpressionAssociations` - Returns expression events for a gene
* `getGeneFunctionAssociations` - Returns function associations for a gene
* `getGeneGenotypeAssociations` - Returns genotypes associated with a gene
* `getGeneHomologAssociations` - Returns homologs for a gene
* `getGeneInteractions` - Returns interactions for a gene
* `getGeneModelAssociations` - Returns models associated with a gene
* `getGeneOrthologDiseaseAssociations` - Return diseases associated with orthologs of a gene
* `getGeneOrthologPhenotypeAssociations` - Return phenotypes associated with orthologs for a gene
* `getGenePathwayAssociations` - Returns pathways associated with gene
* `getGenePhenotypeAssociations` - Returns phenotypes associated with gene
* `getGenePublicationAssociations` - Returns publications associated with a gene
* `getGeneVariantAssociations` - Returns variants associated with a gene
* `getGenericAssociations` - Returns associations for an entity regardless of the type
* `getGenericObject` - Returns basic info on object of any type
* `getGenericObjectByType` - Return basic info on an object for a given type
* `getGenotypeCaseAssociations` - Returns cases associated with a genotype
* `getGenotypeDiseaseAssociations` - Returns diseases associated with a genotype
* `getGenotypeGeneAssociations` - Returns genes associated with a genotype
* `getGenotypeGenotypeAssociations` - Returns genotypes-genotype associations
* `getGenotypeModelAssociations` - Returns models associated with a genotype
* `getGenotypePhenotypeAssociations` - Returns phenotypes associated with a genotype
* `getGenotypePublicationAssociations` - Returns publications associated with a genotype
* `getGenotypeVariantAssociations` - Returns genotypes-variant associations
* `getGotermGeneAssociations` - Returns associations to GO terms for a gene
* `getModelCaseAssociations` - Returns cases associated with a model
* `getModelDiseaseAssociations` - Returns diseases associated with a model
* `getModelGeneAssociations` - Returns genes associated with a model
* `getModelGenotypeAssociations` - Returns genotypes associated with a model
* `getModelPhenotypeAssociations` - Returns phenotypes associated with a model
* `getModelPublicationAssociations` - Returns publications associated with a model
* `getModelVariantAssociations` - Returns variants associated with a model
* `getPathwayDiseaseAssociations` - Returns diseases associated with a pathway
* `getPathwayGeneAssociations` - Returns genes associated with a pathway
* `getPathwayPhenotypeAssociations` - Returns phenotypes associated with a pathway
* `getPhenotypeAnatomyAssociations` - Returns anatomical entities associated with a phenotype
* `getPhenotypeCaseAssociations` - Returns cases associated with a phenotype
* `getPhenotypeDiseaseAssociations` - Returns diseases associated with a phenotype
* `getPhenotypeGeneAssociations` - Returns genes associated with a phenotype
* `getPhenotypeGeneByTaxonAssociations` - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
* `getPhenotypeGenotypeAssociations` - Returns genotypes associated with a phenotype
* `getPhenotypePathwayAssociations` - Returns pathways associated with a phenotype
* `getPhenotypePublicationAssociations` - Returns publications associated with a phenotype
* `getPhenotypeVariantAssociations` - Returns variants associated with a phenotype
* `getPublicationDiseaseAssociations` - Returns diseases associated with a publication
* `getPublicationGeneAssociations` - Returns genes associated with a publication
* `getPublicationGenotypeAssociations` - Returns genotypes associated with a publication
* `getPublicationModelAssociations` - Returns models associated with a publication
* `getPublicationPhenotypeAssociations` - Returns phenotypes associated with a publication
* `getPublicationVariantAssociations` - Returns variants associated with a publication
* `getSubstanceParticipantInAssociations` - Returns associations between an activity and process and the specified substance
* `getSubstanceRoleAssociations` - Returns associations between given drug and roles
* `getSubstanceTreatsAssociations` - Returns substances associated with a disease
* `getVariantCaseAssociations` - Returns cases associated with a variant
* `getVariantDiseaseAssociations` - Returns diseases associated with a variant
* `getVariantGeneAssociations` - Returns genes associated with a variant
* `getVariantGenotypeAssociations` - Returns genotypes associated with a variant
* `getVariantModelAssociations` - Returns models associated with a variant
* `getVariantPhenotypeAssociations` - Returns phenotypes associated with a variant
* `getVariantPublicationAssociations` - Returns publications associated with a variant

### bioentityset

* `getEntitySetAssociations` - Returns compact associations for a given input set
* `getEntitySetGraphResource` - TODO Graph object spanning all entities
* `getEntitySetSummary` - Summary statistics for objects associated
* `getOverRepresentation` - Summary statistics for objects associated

### bioentitysetHomologs

* `getEntitySetHomologs` - Returns homology associations for a given input set of genes

### bioentitysetSlimmer

* `getEntitySetAnatomySlimmer` - For a given gene(s), summarize its annotations over a defined set of slim
* `getEntitySetFunctionSlimmer` - For a given gene(s), summarize its annotations over a defined set of slim
* `getEntitySetPhenotypeSlimmer` - For a given gene(s), summarize its annotations over a defined set of slim

### cam

* `getActivityCollection` - Returns list of models
* `getInstanceObject` - Returns list of matches
* `getModelCollection` - Returns list of ALL models
* `getModelContributors` - Returns list of all contributors across all models
* `getModelInstances` - Returns list of all instances
* `getModelObject` - Returns a complete model
* `getModelProperties` - Returns list of all properties used across all models
* `getModelPropertyValues` - Returns list property-values for all models
* `getModelQuery` - Returns list of models matching query
* `getPhysicalInteraction` - Returns list of models

### evidenceGraph

* `getEvidenceGraphObject` - Returns evidence graph object for a given association
* `getEvidenceGraphTable` - Returns evidence as a association_results object given an association

### genomeFeatures

* `getFeaturesWithinResource` - Returns list of matches

### graph

* `getEdgeResource` - Returns edges emanating from a given node
* `getNodeResource` - Returns a graph node

### identifierMapper

* `getIdentifierMapper` - TODO maps a list of identifiers from a source to a target

### identifierPrefixes

* `getPrefixCollection` - Returns list of prefixes
* `getPrefixContract` - Returns contracted URI
* `getPrefixExpand` - Returns expanded URI

### individual

* `getIndividual` - Returns list of matches
* `getPedigree` - Returns list of matches

### mart

* `getMartCaseAssociationsResource` - Bulk download of case associations
* `getMartDiseaseAssociationsResource` - Bulk download of disease associations
* `getMartGeneAssociationsResource` - Bulk download of gene associations
* `getMartOrthologAssociationsResource` - Bulk download of orthologs
* `getMartParalogAssociationsResource` - Bulk download of paralogs

### metadata

* `getMetadataForDatasets` - Get metadata for all datasets from SciGraph

### mme

* `postDiseaseMme` - Match a patient to diseases based on their phenotypes
* `postFlyMme` - Match a patient to fruit fly genes based on similar phenotypes
* `postMouseMme` - Match a patient to mouse genes based on similar phenotypes
* `postNematodeMme` - Match a patient to nematode genes based on similar phenotypes
* `postZebrafishMme` - Match a patient to zebrafish genes based on similar phenotypes

### nlpAnnotate

* `getAnnotate` - Annotate a given text using SciGraph annotator
* `getAnnotateEntities` - Annotate a given content using SciGraph annotator and get all entities from content
* `postAnnotate` - Annotate a given text using SciGraph annotator
* `postAnnotateEntities` - Annotate a given content using SciGraph annotator and get all entities from content

### ontol

* `getExtractOntologySubgraphResource` - Extract a subgraph from an ontology
* `getInformationContentResource` - Returns information content (IC) for a set of relevant ontology classes
* `postExtractOntologySubgraphResource` - Extract a subgraph from an ontology

### ontolIdentifier

* `getOntolIdentifierResource` - Fetches a map from CURIEs/IDs to labels
* `postOntolIdentifierResource` - Fetches a map from CURIEs/IDs to labels

### ontolLabeler

* `getOntolLabelerResource` - Fetches a map from CURIEs/IDs to labels

### ontology

* `getOntologySubset` - Returns meta data of an ontology subset (slim)
* `getOntologyTerm` - Returns meta data of an ontology term
* `getOntologyTermGraph` - Returns graph of an ontology term
* `getOntologyTermSubgraph` - Extract a subgraph from an ontology term
* `getOntologyTermSubsets` - Returns subsets (slims) associated to an ontology term
* `getOntologyTermsSharedAncestor` - Returns the ancestor ontology terms shared by two ontology terms

### owlOntology

* `getDlQuery` - Placeholder - use OWLery for now
* `getSparqlQuery` - Placeholder - use direct SPARQL endpoint for now

### pairSim

* `getPairSimJaccardResource` - Get pairwise similarity

### relationUsage

* `getRelationUsageBetweenResource` - All relations used plus count of associations
* `getRelationUsagePivotLabelResource` - Relation usage count for all subj x obj category combinations, showing label
* `getRelationUsagePivotResource` - Relation usage count for all subj x obj category combinations
* `getRelationUsageResource` - All relations used plus count of associations

### search

* `getAutocomplete` - Returns list of matching concepts or entities using lexical search
* `getSearchEntities` - Returns list of matching concepts or entities using lexical search
* `getSearchHpoEntities` - Returns list of matching concepts or entities using lexical search

### sim

* `getAnnotationScore` - Get annotation score
* `getSimCompare` - Compare a reference profile vs one profiles
* `getSimSearch` - Search for phenotypically similar diseases or model genes
* `postAnnotationScore` - Get annotation score
* `postSimCompare` - Compare a reference profile vs one or more profiles

### variationSet

* `deleteVariantSetItem` - Deletes variant set
* `getVariantAnalyze` - Returns list of matches
* `getVariantSetItem` - Returns a variant set
* `getVariantSetsArchiveCollection` - Returns list of variant sets from a specified time period
* `getVariantSetsCollection` - Returns list of variant sets
* `postVariantSetsCollection` - Creates a new variant set
* `putVariantSetItem` - Updates a variant set
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
