# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/monarchinitiative.org/1.1.14/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Association.GetAssociationBySubjectAndAssocType(ctx, operations.GetAssociationBySubjectAndAssocTypeRequest{
        AssociationType: "corrupti",
        Evidence: sdk.String("provident"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Object: sdk.String("distinctio"),
        Rows: sdk.Int64(844266),
        Start: sdk.Int64(602763),
        Subject: sdk.String("nulla"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Association](docs/association/README.md)

* [GetAssociationBySubjectAndAssocType](docs/association/README.md#getassociationbysubjectandassoctype) - Returns list of matching associations of a given type
* [GetAssociationBySubjectAndObjectCategorySearch](docs/association/README.md#getassociationbysubjectandobjectcategorysearch) - Returns list of matching associations between a given subject and object category
* [GetAssociationBySubjectCategorySearch](docs/association/README.md#getassociationbysubjectcategorysearch) - Returns list of matching associations for a given subject category
* [GetAssociationObject](docs/association/README.md#getassociationobject) - Returns the association with a given identifier
* [GetAssociationsBetween](docs/association/README.md#getassociationsbetween) - Returns associations connecting two entities
* [GetAssociationsFrom](docs/association/README.md#getassociationsfrom) - Returns list of matching associations starting from a given subject (source)
* [GetAssociationsTo](docs/association/README.md#getassociationsto) - Returns list of matching associations pointing to a given object (target)

### [Bioentity](docs/bioentity/README.md)

* [GetAnatomyGeneAssociations](docs/bioentity/README.md#getanatomygeneassociations) - Returns genes associated with a given anatomy
* [~~GetAnatomyGeneByTaxonAssociations~~](docs/bioentity/README.md#getanatomygenebytaxonassociations) - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon :warning: **Deprecated**
* [GetCaseDiseaseAssociations](docs/bioentity/README.md#getcasediseaseassociations) - Returns diseases associated with a case
* [GetCaseGenotypeAssociations](docs/bioentity/README.md#getcasegenotypeassociations) - Returns genotypes associated with a case
* [GetCaseModelAssociations](docs/bioentity/README.md#getcasemodelassociations) - Returns models associated with a case
* [GetCasePhenotypeAssociations](docs/bioentity/README.md#getcasephenotypeassociations) - Returns phenotypes associated with a case
* [GetCaseVariantAssociations](docs/bioentity/README.md#getcasevariantassociations) - Returns variants associated with a case
* [GetDiseaseCaseAssociations](docs/bioentity/README.md#getdiseasecaseassociations) - Returns cases associated with a disease
* [GetDiseaseGeneAssociations](docs/bioentity/README.md#getdiseasegeneassociations) - Returns genes associated with a disease
* [GetDiseaseGenotypeAssociations](docs/bioentity/README.md#getdiseasegenotypeassociations) - Returns genotypes associated with a disease
* [GetDiseaseModelAssociations](docs/bioentity/README.md#getdiseasemodelassociations) - Returns associations to models of the disease
* [~~GetDiseaseModelTaxonAssociations~~](docs/bioentity/README.md#getdiseasemodeltaxonassociations) - Returns associations to models of the disease constrained by taxon :warning: **Deprecated**
* [GetDiseasePathwayAssociations](docs/bioentity/README.md#getdiseasepathwayassociations) - Returns pathways associated with a disease
* [GetDiseasePhenotypeAssociations](docs/bioentity/README.md#getdiseasephenotypeassociations) - Returns phenotypes associated with disease
* [GetDiseasePublicationAssociations](docs/bioentity/README.md#getdiseasepublicationassociations) - Returns publications associated with a disease
* [GetDiseaseSubstanceAssociations](docs/bioentity/README.md#getdiseasesubstanceassociations) - Returns substances associated with a disease
* [GetDiseaseVariantAssociations](docs/bioentity/README.md#getdiseasevariantassociations) - Returns variants associated with a disease
* [GetFunctionAssociations](docs/bioentity/README.md#getfunctionassociations) - Returns annotations associated to a function term
* [GetFunctionGeneAssociations](docs/bioentity/README.md#getfunctiongeneassociations) - Returns genes associated to a GO term
* [GetFunctionPublicationAssociations](docs/bioentity/README.md#getfunctionpublicationassociations) - Returns publications associated to a GO term
* [GetFunctionTaxonAssociations](docs/bioentity/README.md#getfunctiontaxonassociations) - Returns taxons associated to a GO term
* [GetGeneAnatomyAssociations](docs/bioentity/README.md#getgeneanatomyassociations) - Returns anatomical entities associated with a gene
* [GetGeneCaseAssociations](docs/bioentity/README.md#getgenecaseassociations) - Returns cases associated with a gene
* [GetGeneDiseaseAssociations](docs/bioentity/README.md#getgenediseaseassociations) - Returns diseases associated with gene
* [GetGeneExpressionAssociations](docs/bioentity/README.md#getgeneexpressionassociations) - Returns expression events for a gene
* [GetGeneFunctionAssociations](docs/bioentity/README.md#getgenefunctionassociations) - Returns function associations for a gene
* [GetGeneGenotypeAssociations](docs/bioentity/README.md#getgenegenotypeassociations) - Returns genotypes associated with a gene
* [GetGeneHomologAssociations](docs/bioentity/README.md#getgenehomologassociations) - Returns homologs for a gene
* [GetGeneInteractions](docs/bioentity/README.md#getgeneinteractions) - Returns interactions for a gene
* [GetGeneModelAssociations](docs/bioentity/README.md#getgenemodelassociations) - Returns models associated with a gene
* [GetGeneOrthologDiseaseAssociations](docs/bioentity/README.md#getgeneorthologdiseaseassociations) - Return diseases associated with orthologs of a gene
* [GetGeneOrthologPhenotypeAssociations](docs/bioentity/README.md#getgeneorthologphenotypeassociations) - Return phenotypes associated with orthologs for a gene
* [GetGenePathwayAssociations](docs/bioentity/README.md#getgenepathwayassociations) - Returns pathways associated with gene
* [GetGenePhenotypeAssociations](docs/bioentity/README.md#getgenephenotypeassociations) - Returns phenotypes associated with gene
* [GetGenePublicationAssociations](docs/bioentity/README.md#getgenepublicationassociations) - Returns publications associated with a gene
* [GetGeneVariantAssociations](docs/bioentity/README.md#getgenevariantassociations) - Returns variants associated with a gene
* [GetGenericAssociations](docs/bioentity/README.md#getgenericassociations) - Returns associations for an entity regardless of the type
* [GetGenericObject](docs/bioentity/README.md#getgenericobject) - Returns basic info on object of any type
* [GetGenericObjectByType](docs/bioentity/README.md#getgenericobjectbytype) - Return basic info on an object for a given type
* [GetGenotypeCaseAssociations](docs/bioentity/README.md#getgenotypecaseassociations) - Returns cases associated with a genotype
* [GetGenotypeDiseaseAssociations](docs/bioentity/README.md#getgenotypediseaseassociations) - Returns diseases associated with a genotype
* [GetGenotypeGeneAssociations](docs/bioentity/README.md#getgenotypegeneassociations) - Returns genes associated with a genotype
* [GetGenotypeGenotypeAssociations](docs/bioentity/README.md#getgenotypegenotypeassociations) - Returns genotypes-genotype associations
* [GetGenotypeModelAssociations](docs/bioentity/README.md#getgenotypemodelassociations) - Returns models associated with a genotype
* [GetGenotypePhenotypeAssociations](docs/bioentity/README.md#getgenotypephenotypeassociations) - Returns phenotypes associated with a genotype
* [GetGenotypePublicationAssociations](docs/bioentity/README.md#getgenotypepublicationassociations) - Returns publications associated with a genotype
* [GetGenotypeVariantAssociations](docs/bioentity/README.md#getgenotypevariantassociations) - Returns genotypes-variant associations
* [~~GetGotermGeneAssociations~~](docs/bioentity/README.md#getgotermgeneassociations) - Returns associations to GO terms for a gene :warning: **Deprecated**
* [GetModelCaseAssociations](docs/bioentity/README.md#getmodelcaseassociations) - Returns cases associated with a model
* [GetModelDiseaseAssociations](docs/bioentity/README.md#getmodeldiseaseassociations) - Returns diseases associated with a model
* [GetModelGeneAssociations](docs/bioentity/README.md#getmodelgeneassociations) - Returns genes associated with a model
* [GetModelGenotypeAssociations](docs/bioentity/README.md#getmodelgenotypeassociations) - Returns genotypes associated with a model
* [GetModelPhenotypeAssociations](docs/bioentity/README.md#getmodelphenotypeassociations) - Returns phenotypes associated with a model
* [GetModelPublicationAssociations](docs/bioentity/README.md#getmodelpublicationassociations) - Returns publications associated with a model
* [GetModelVariantAssociations](docs/bioentity/README.md#getmodelvariantassociations) - Returns variants associated with a model
* [GetPathwayDiseaseAssociations](docs/bioentity/README.md#getpathwaydiseaseassociations) - Returns diseases associated with a pathway
* [GetPathwayGeneAssociations](docs/bioentity/README.md#getpathwaygeneassociations) - Returns genes associated with a pathway
* [GetPathwayPhenotypeAssociations](docs/bioentity/README.md#getpathwayphenotypeassociations) - Returns phenotypes associated with a pathway
* [GetPhenotypeAnatomyAssociations](docs/bioentity/README.md#getphenotypeanatomyassociations) - Returns anatomical entities associated with a phenotype
* [GetPhenotypeCaseAssociations](docs/bioentity/README.md#getphenotypecaseassociations) - Returns cases associated with a phenotype
* [GetPhenotypeDiseaseAssociations](docs/bioentity/README.md#getphenotypediseaseassociations) - Returns diseases associated with a phenotype
* [GetPhenotypeGeneAssociations](docs/bioentity/README.md#getphenotypegeneassociations) - Returns genes associated with a phenotype
* [~~GetPhenotypeGeneByTaxonAssociations~~](docs/bioentity/README.md#getphenotypegenebytaxonassociations) - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon :warning: **Deprecated**
* [GetPhenotypeGenotypeAssociations](docs/bioentity/README.md#getphenotypegenotypeassociations) - Returns genotypes associated with a phenotype
* [GetPhenotypePathwayAssociations](docs/bioentity/README.md#getphenotypepathwayassociations) - Returns pathways associated with a phenotype
* [GetPhenotypePublicationAssociations](docs/bioentity/README.md#getphenotypepublicationassociations) - Returns publications associated with a phenotype
* [GetPhenotypeVariantAssociations](docs/bioentity/README.md#getphenotypevariantassociations) - Returns variants associated with a phenotype
* [GetPublicationDiseaseAssociations](docs/bioentity/README.md#getpublicationdiseaseassociations) - Returns diseases associated with a publication
* [GetPublicationGeneAssociations](docs/bioentity/README.md#getpublicationgeneassociations) - Returns genes associated with a publication
* [GetPublicationGenotypeAssociations](docs/bioentity/README.md#getpublicationgenotypeassociations) - Returns genotypes associated with a publication
* [GetPublicationModelAssociations](docs/bioentity/README.md#getpublicationmodelassociations) - Returns models associated with a publication
* [GetPublicationPhenotypeAssociations](docs/bioentity/README.md#getpublicationphenotypeassociations) - Returns phenotypes associated with a publication
* [GetPublicationVariantAssociations](docs/bioentity/README.md#getpublicationvariantassociations) - Returns variants associated with a publication
* [GetSubstanceParticipantInAssociations](docs/bioentity/README.md#getsubstanceparticipantinassociations) - Returns associations between an activity and process and the specified substance
* [GetSubstanceRoleAssociations](docs/bioentity/README.md#getsubstanceroleassociations) - Returns associations between given drug and roles
* [GetSubstanceTreatsAssociations](docs/bioentity/README.md#getsubstancetreatsassociations) - Returns substances associated with a disease
* [GetVariantCaseAssociations](docs/bioentity/README.md#getvariantcaseassociations) - Returns cases associated with a variant
* [GetVariantDiseaseAssociations](docs/bioentity/README.md#getvariantdiseaseassociations) - Returns diseases associated with a variant
* [GetVariantGeneAssociations](docs/bioentity/README.md#getvariantgeneassociations) - Returns genes associated with a variant
* [GetVariantGenotypeAssociations](docs/bioentity/README.md#getvariantgenotypeassociations) - Returns genotypes associated with a variant
* [GetVariantModelAssociations](docs/bioentity/README.md#getvariantmodelassociations) - Returns models associated with a variant
* [GetVariantPhenotypeAssociations](docs/bioentity/README.md#getvariantphenotypeassociations) - Returns phenotypes associated with a variant
* [GetVariantPublicationAssociations](docs/bioentity/README.md#getvariantpublicationassociations) - Returns publications associated with a variant

### [Bioentityset](docs/bioentityset/README.md)

* [GetEntitySetAssociations](docs/bioentityset/README.md#getentitysetassociations) - Returns compact associations for a given input set
* [GetEntitySetGraphResource](docs/bioentityset/README.md#getentitysetgraphresource) - TODO Graph object spanning all entities
* [GetEntitySetSummary](docs/bioentityset/README.md#getentitysetsummary) - Summary statistics for objects associated
* [GetOverRepresentation](docs/bioentityset/README.md#getoverrepresentation) - Summary statistics for objects associated

### [BioentitysetHomologs](docs/bioentitysethomologs/README.md)

* [GetEntitySetHomologs](docs/bioentitysethomologs/README.md#getentitysethomologs) - Returns homology associations for a given input set of genes

### [BioentitysetSlimmer](docs/bioentitysetslimmer/README.md)

* [GetEntitySetAnatomySlimmer](docs/bioentitysetslimmer/README.md#getentitysetanatomyslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [GetEntitySetFunctionSlimmer](docs/bioentitysetslimmer/README.md#getentitysetfunctionslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [GetEntitySetPhenotypeSlimmer](docs/bioentitysetslimmer/README.md#getentitysetphenotypeslimmer) - For a given gene(s), summarize its annotations over a defined set of slim

### [Cam](docs/cam/README.md)

* [GetActivityCollection](docs/cam/README.md#getactivitycollection) - Returns list of models
* [GetInstanceObject](docs/cam/README.md#getinstanceobject) - Returns list of matches
* [GetModelCollection](docs/cam/README.md#getmodelcollection) - Returns list of ALL models
* [GetModelContributors](docs/cam/README.md#getmodelcontributors) - Returns list of all contributors across all models
* [GetModelInstances](docs/cam/README.md#getmodelinstances) - Returns list of all instances
* [GetModelObject](docs/cam/README.md#getmodelobject) - Returns a complete model
* [GetModelProperties](docs/cam/README.md#getmodelproperties) - Returns list of all properties used across all models
* [GetModelPropertyValues](docs/cam/README.md#getmodelpropertyvalues) - Returns list property-values for all models
* [GetModelQuery](docs/cam/README.md#getmodelquery) - Returns list of models matching query
* [GetPhysicalInteraction](docs/cam/README.md#getphysicalinteraction) - Returns list of models

### [EvidenceGraph](docs/evidencegraph/README.md)

* [GetEvidenceGraphObject](docs/evidencegraph/README.md#getevidencegraphobject) - Returns evidence graph object for a given association
* [GetEvidenceGraphTable](docs/evidencegraph/README.md#getevidencegraphtable) - Returns evidence as a association_results object given an association

### [GenomeFeatures](docs/genomefeatures/README.md)

* [GetFeaturesWithinResource](docs/genomefeatures/README.md#getfeatureswithinresource) - Returns list of matches

### [Graph](docs/graph/README.md)

* [GetEdgeResource](docs/graph/README.md#getedgeresource) - Returns edges emanating from a given node
* [GetNodeResource](docs/graph/README.md#getnoderesource) - Returns a graph node

### [IdentifierMapper](docs/identifiermapper/README.md)

* [GetIdentifierMapper](docs/identifiermapper/README.md#getidentifiermapper) - TODO maps a list of identifiers from a source to a target

### [IdentifierPrefixes](docs/identifierprefixes/README.md)

* [GetPrefixCollection](docs/identifierprefixes/README.md#getprefixcollection) - Returns list of prefixes
* [GetPrefixContract](docs/identifierprefixes/README.md#getprefixcontract) - Returns contracted URI
* [GetPrefixExpand](docs/identifierprefixes/README.md#getprefixexpand) - Returns expanded URI

### [Individual](docs/individual/README.md)

* [GetIndividual](docs/individual/README.md#getindividual) - Returns list of matches
* [GetPedigree](docs/individual/README.md#getpedigree) - Returns list of matches

### [Mart](docs/mart/README.md)

* [GetMartCaseAssociationsResource](docs/mart/README.md#getmartcaseassociationsresource) - Bulk download of case associations
* [GetMartDiseaseAssociationsResource](docs/mart/README.md#getmartdiseaseassociationsresource) - Bulk download of disease associations
* [GetMartGeneAssociationsResource](docs/mart/README.md#getmartgeneassociationsresource) - Bulk download of gene associations
* [GetMartOrthologAssociationsResource](docs/mart/README.md#getmartorthologassociationsresource) - Bulk download of orthologs
* [GetMartParalogAssociationsResource](docs/mart/README.md#getmartparalogassociationsresource) - Bulk download of paralogs

### [Metadata](docs/metadata/README.md)

* [GetMetadataForDatasets](docs/metadata/README.md#getmetadatafordatasets) - Get metadata for all datasets from SciGraph

### [Mme](docs/mme/README.md)

* [PostDiseaseMme](docs/mme/README.md#postdiseasemme) - Match a patient to diseases based on their phenotypes
* [PostFlyMme](docs/mme/README.md#postflymme) - Match a patient to fruit fly genes based on similar phenotypes
* [PostMouseMme](docs/mme/README.md#postmousemme) - Match a patient to mouse genes based on similar phenotypes
* [PostNematodeMme](docs/mme/README.md#postnematodemme) - Match a patient to nematode genes based on similar phenotypes
* [PostZebrafishMme](docs/mme/README.md#postzebrafishmme) - Match a patient to zebrafish genes based on similar phenotypes

### [NlpAnnotate](docs/nlpannotate/README.md)

* [GetAnnotate](docs/nlpannotate/README.md#getannotate) - Annotate a given text using SciGraph annotator
* [GetAnnotateEntities](docs/nlpannotate/README.md#getannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content
* [PostAnnotate](docs/nlpannotate/README.md#postannotate) - Annotate a given text using SciGraph annotator
* [PostAnnotateEntities](docs/nlpannotate/README.md#postannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content

### [Ontol](docs/ontol/README.md)

* [GetExtractOntologySubgraphResource](docs/ontol/README.md#getextractontologysubgraphresource) - Extract a subgraph from an ontology
* [GetInformationContentResource](docs/ontol/README.md#getinformationcontentresource) - Returns information content (IC) for a set of relevant ontology classes
* [PostExtractOntologySubgraphResource](docs/ontol/README.md#postextractontologysubgraphresource) - Extract a subgraph from an ontology

### [OntolIdentifier](docs/ontolidentifier/README.md)

* [GetOntolIdentifierResource](docs/ontolidentifier/README.md#getontolidentifierresource) - Fetches a map from CURIEs/IDs to labels
* [PostOntolIdentifierResource](docs/ontolidentifier/README.md#postontolidentifierresource) - Fetches a map from CURIEs/IDs to labels

### [OntolLabeler](docs/ontollabeler/README.md)

* [GetOntolLabelerResource](docs/ontollabeler/README.md#getontollabelerresource) - Fetches a map from CURIEs/IDs to labels

### [Ontology](docs/ontology/README.md)

* [GetOntologySubset](docs/ontology/README.md#getontologysubset) - Returns meta data of an ontology subset (slim)
* [GetOntologyTerm](docs/ontology/README.md#getontologyterm) - Returns meta data of an ontology term
* [GetOntologyTermGraph](docs/ontology/README.md#getontologytermgraph) - Returns graph of an ontology term
* [GetOntologyTermSubgraph](docs/ontology/README.md#getontologytermsubgraph) - Extract a subgraph from an ontology term
* [GetOntologyTermSubsets](docs/ontology/README.md#getontologytermsubsets) - Returns subsets (slims) associated to an ontology term
* [GetOntologyTermsSharedAncestor](docs/ontology/README.md#getontologytermssharedancestor) - Returns the ancestor ontology terms shared by two ontology terms

### [OwlOntology](docs/owlontology/README.md)

* [GetDlQuery](docs/owlontology/README.md#getdlquery) - Placeholder - use OWLery for now
* [GetSparqlQuery](docs/owlontology/README.md#getsparqlquery) - Placeholder - use direct SPARQL endpoint for now

### [PairSim](docs/pairsim/README.md)

* [GetPairSimJaccardResource](docs/pairsim/README.md#getpairsimjaccardresource) - Get pairwise similarity

### [RelationUsage](docs/relationusage/README.md)

* [GetRelationUsageBetweenResource](docs/relationusage/README.md#getrelationusagebetweenresource) - All relations used plus count of associations
* [GetRelationUsagePivotLabelResource](docs/relationusage/README.md#getrelationusagepivotlabelresource) - Relation usage count for all subj x obj category combinations, showing label
* [GetRelationUsagePivotResource](docs/relationusage/README.md#getrelationusagepivotresource) - Relation usage count for all subj x obj category combinations
* [GetRelationUsageResource](docs/relationusage/README.md#getrelationusageresource) - All relations used plus count of associations

### [Search](docs/search/README.md)

* [GetAutocomplete](docs/search/README.md#getautocomplete) - Returns list of matching concepts or entities using lexical search
* [GetSearchEntities](docs/search/README.md#getsearchentities) - Returns list of matching concepts or entities using lexical search
* [GetSearchHpoEntities](docs/search/README.md#getsearchhpoentities) - Returns list of matching concepts or entities using lexical search

### [Sim](docs/sim/README.md)

* [GetAnnotationScore](docs/sim/README.md#getannotationscore) - Get annotation score
* [GetSimCompare](docs/sim/README.md#getsimcompare) - Compare a reference profile vs one profiles
* [GetSimSearch](docs/sim/README.md#getsimsearch) - Search for phenotypically similar diseases or model genes
* [PostAnnotationScore](docs/sim/README.md#postannotationscore) - Get annotation score
* [PostSimCompare](docs/sim/README.md#postsimcompare) - Compare a reference profile vs one or more profiles

### [VariationSet](docs/variationset/README.md)

* [DeleteVariantSetItem](docs/variationset/README.md#deletevariantsetitem) - Deletes variant set
* [GetVariantAnalyze](docs/variationset/README.md#getvariantanalyze) - Returns list of matches
* [GetVariantSetItem](docs/variationset/README.md#getvariantsetitem) - Returns a variant set
* [GetVariantSetsArchiveCollection](docs/variationset/README.md#getvariantsetsarchivecollection) - Returns list of variant sets from a specified time period
* [GetVariantSetsCollection](docs/variationset/README.md#getvariantsetscollection) - Returns list of variant sets
* [PostVariantSetsCollection](docs/variationset/README.md#postvariantsetscollection) - Creates a new variant set
* [PutVariantSetItem](docs/variationset/README.md#putvariantsetitem) - Updates a variant set
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
