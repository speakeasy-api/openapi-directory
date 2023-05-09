# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndAssocTypeRequest;
import org.openapis.openapi.models.operations.GetAssociationBySubjectAndAssocTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssociationBySubjectAndAssocTypeRequest req = new GetAssociationBySubjectAndAssocTypeRequest("corrupti") {{
                evidence = "provident";
                excludeAutomaticAssertions = false;
                object = "distinctio";
                rows = 844266L;
                start = 602763L;
                subject = "nulla";
                unselectEvidence = false;
                useCompactAssociations = false;
            }};            

            GetAssociationBySubjectAndAssocTypeResponse res = sdk.association.getAssociationBySubjectAndAssocType(req);

            if (res.associationResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [association](docs/association/README.md)

* [getAssociationBySubjectAndAssocType](docs/association/README.md#getassociationbysubjectandassoctype) - Returns list of matching associations of a given type
* [getAssociationBySubjectAndObjectCategorySearch](docs/association/README.md#getassociationbysubjectandobjectcategorysearch) - Returns list of matching associations between a given subject and object category
* [getAssociationBySubjectCategorySearch](docs/association/README.md#getassociationbysubjectcategorysearch) - Returns list of matching associations for a given subject category
* [getAssociationObject](docs/association/README.md#getassociationobject) - Returns the association with a given identifier
* [getAssociationsBetween](docs/association/README.md#getassociationsbetween) - Returns associations connecting two entities
* [getAssociationsFrom](docs/association/README.md#getassociationsfrom) - Returns list of matching associations starting from a given subject (source)
* [getAssociationsTo](docs/association/README.md#getassociationsto) - Returns list of matching associations pointing to a given object (target)

### [bioentity](docs/bioentity/README.md)

* [getAnatomyGeneAssociations](docs/bioentity/README.md#getanatomygeneassociations) - Returns genes associated with a given anatomy
* [~~getAnatomyGeneByTaxonAssociations~~](docs/bioentity/README.md#getanatomygenebytaxonassociations) - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon :warning: **Deprecated**
* [getCaseDiseaseAssociations](docs/bioentity/README.md#getcasediseaseassociations) - Returns diseases associated with a case
* [getCaseGenotypeAssociations](docs/bioentity/README.md#getcasegenotypeassociations) - Returns genotypes associated with a case
* [getCaseModelAssociations](docs/bioentity/README.md#getcasemodelassociations) - Returns models associated with a case
* [getCasePhenotypeAssociations](docs/bioentity/README.md#getcasephenotypeassociations) - Returns phenotypes associated with a case
* [getCaseVariantAssociations](docs/bioentity/README.md#getcasevariantassociations) - Returns variants associated with a case
* [getDiseaseCaseAssociations](docs/bioentity/README.md#getdiseasecaseassociations) - Returns cases associated with a disease
* [getDiseaseGeneAssociations](docs/bioentity/README.md#getdiseasegeneassociations) - Returns genes associated with a disease
* [getDiseaseGenotypeAssociations](docs/bioentity/README.md#getdiseasegenotypeassociations) - Returns genotypes associated with a disease
* [getDiseaseModelAssociations](docs/bioentity/README.md#getdiseasemodelassociations) - Returns associations to models of the disease
* [~~getDiseaseModelTaxonAssociations~~](docs/bioentity/README.md#getdiseasemodeltaxonassociations) - Returns associations to models of the disease constrained by taxon :warning: **Deprecated**
* [getDiseasePathwayAssociations](docs/bioentity/README.md#getdiseasepathwayassociations) - Returns pathways associated with a disease
* [getDiseasePhenotypeAssociations](docs/bioentity/README.md#getdiseasephenotypeassociations) - Returns phenotypes associated with disease
* [getDiseasePublicationAssociations](docs/bioentity/README.md#getdiseasepublicationassociations) - Returns publications associated with a disease
* [getDiseaseSubstanceAssociations](docs/bioentity/README.md#getdiseasesubstanceassociations) - Returns substances associated with a disease
* [getDiseaseVariantAssociations](docs/bioentity/README.md#getdiseasevariantassociations) - Returns variants associated with a disease
* [getFunctionAssociations](docs/bioentity/README.md#getfunctionassociations) - Returns annotations associated to a function term
* [getFunctionGeneAssociations](docs/bioentity/README.md#getfunctiongeneassociations) - Returns genes associated to a GO term
* [getFunctionPublicationAssociations](docs/bioentity/README.md#getfunctionpublicationassociations) - Returns publications associated to a GO term
* [getFunctionTaxonAssociations](docs/bioentity/README.md#getfunctiontaxonassociations) - Returns taxons associated to a GO term
* [getGeneAnatomyAssociations](docs/bioentity/README.md#getgeneanatomyassociations) - Returns anatomical entities associated with a gene
* [getGeneCaseAssociations](docs/bioentity/README.md#getgenecaseassociations) - Returns cases associated with a gene
* [getGeneDiseaseAssociations](docs/bioentity/README.md#getgenediseaseassociations) - Returns diseases associated with gene
* [getGeneExpressionAssociations](docs/bioentity/README.md#getgeneexpressionassociations) - Returns expression events for a gene
* [getGeneFunctionAssociations](docs/bioentity/README.md#getgenefunctionassociations) - Returns function associations for a gene
* [getGeneGenotypeAssociations](docs/bioentity/README.md#getgenegenotypeassociations) - Returns genotypes associated with a gene
* [getGeneHomologAssociations](docs/bioentity/README.md#getgenehomologassociations) - Returns homologs for a gene
* [getGeneInteractions](docs/bioentity/README.md#getgeneinteractions) - Returns interactions for a gene
* [getGeneModelAssociations](docs/bioentity/README.md#getgenemodelassociations) - Returns models associated with a gene
* [getGeneOrthologDiseaseAssociations](docs/bioentity/README.md#getgeneorthologdiseaseassociations) - Return diseases associated with orthologs of a gene
* [getGeneOrthologPhenotypeAssociations](docs/bioentity/README.md#getgeneorthologphenotypeassociations) - Return phenotypes associated with orthologs for a gene
* [getGenePathwayAssociations](docs/bioentity/README.md#getgenepathwayassociations) - Returns pathways associated with gene
* [getGenePhenotypeAssociations](docs/bioentity/README.md#getgenephenotypeassociations) - Returns phenotypes associated with gene
* [getGenePublicationAssociations](docs/bioentity/README.md#getgenepublicationassociations) - Returns publications associated with a gene
* [getGeneVariantAssociations](docs/bioentity/README.md#getgenevariantassociations) - Returns variants associated with a gene
* [getGenericAssociations](docs/bioentity/README.md#getgenericassociations) - Returns associations for an entity regardless of the type
* [getGenericObject](docs/bioentity/README.md#getgenericobject) - Returns basic info on object of any type
* [getGenericObjectByType](docs/bioentity/README.md#getgenericobjectbytype) - Return basic info on an object for a given type
* [getGenotypeCaseAssociations](docs/bioentity/README.md#getgenotypecaseassociations) - Returns cases associated with a genotype
* [getGenotypeDiseaseAssociations](docs/bioentity/README.md#getgenotypediseaseassociations) - Returns diseases associated with a genotype
* [getGenotypeGeneAssociations](docs/bioentity/README.md#getgenotypegeneassociations) - Returns genes associated with a genotype
* [getGenotypeGenotypeAssociations](docs/bioentity/README.md#getgenotypegenotypeassociations) - Returns genotypes-genotype associations
* [getGenotypeModelAssociations](docs/bioentity/README.md#getgenotypemodelassociations) - Returns models associated with a genotype
* [getGenotypePhenotypeAssociations](docs/bioentity/README.md#getgenotypephenotypeassociations) - Returns phenotypes associated with a genotype
* [getGenotypePublicationAssociations](docs/bioentity/README.md#getgenotypepublicationassociations) - Returns publications associated with a genotype
* [getGenotypeVariantAssociations](docs/bioentity/README.md#getgenotypevariantassociations) - Returns genotypes-variant associations
* [~~getGotermGeneAssociations~~](docs/bioentity/README.md#getgotermgeneassociations) - Returns associations to GO terms for a gene :warning: **Deprecated**
* [getModelCaseAssociations](docs/bioentity/README.md#getmodelcaseassociations) - Returns cases associated with a model
* [getModelDiseaseAssociations](docs/bioentity/README.md#getmodeldiseaseassociations) - Returns diseases associated with a model
* [getModelGeneAssociations](docs/bioentity/README.md#getmodelgeneassociations) - Returns genes associated with a model
* [getModelGenotypeAssociations](docs/bioentity/README.md#getmodelgenotypeassociations) - Returns genotypes associated with a model
* [getModelPhenotypeAssociations](docs/bioentity/README.md#getmodelphenotypeassociations) - Returns phenotypes associated with a model
* [getModelPublicationAssociations](docs/bioentity/README.md#getmodelpublicationassociations) - Returns publications associated with a model
* [getModelVariantAssociations](docs/bioentity/README.md#getmodelvariantassociations) - Returns variants associated with a model
* [getPathwayDiseaseAssociations](docs/bioentity/README.md#getpathwaydiseaseassociations) - Returns diseases associated with a pathway
* [getPathwayGeneAssociations](docs/bioentity/README.md#getpathwaygeneassociations) - Returns genes associated with a pathway
* [getPathwayPhenotypeAssociations](docs/bioentity/README.md#getpathwayphenotypeassociations) - Returns phenotypes associated with a pathway
* [getPhenotypeAnatomyAssociations](docs/bioentity/README.md#getphenotypeanatomyassociations) - Returns anatomical entities associated with a phenotype
* [getPhenotypeCaseAssociations](docs/bioentity/README.md#getphenotypecaseassociations) - Returns cases associated with a phenotype
* [getPhenotypeDiseaseAssociations](docs/bioentity/README.md#getphenotypediseaseassociations) - Returns diseases associated with a phenotype
* [getPhenotypeGeneAssociations](docs/bioentity/README.md#getphenotypegeneassociations) - Returns genes associated with a phenotype
* [~~getPhenotypeGeneByTaxonAssociations~~](docs/bioentity/README.md#getphenotypegenebytaxonassociations) - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon :warning: **Deprecated**
* [getPhenotypeGenotypeAssociations](docs/bioentity/README.md#getphenotypegenotypeassociations) - Returns genotypes associated with a phenotype
* [getPhenotypePathwayAssociations](docs/bioentity/README.md#getphenotypepathwayassociations) - Returns pathways associated with a phenotype
* [getPhenotypePublicationAssociations](docs/bioentity/README.md#getphenotypepublicationassociations) - Returns publications associated with a phenotype
* [getPhenotypeVariantAssociations](docs/bioentity/README.md#getphenotypevariantassociations) - Returns variants associated with a phenotype
* [getPublicationDiseaseAssociations](docs/bioentity/README.md#getpublicationdiseaseassociations) - Returns diseases associated with a publication
* [getPublicationGeneAssociations](docs/bioentity/README.md#getpublicationgeneassociations) - Returns genes associated with a publication
* [getPublicationGenotypeAssociations](docs/bioentity/README.md#getpublicationgenotypeassociations) - Returns genotypes associated with a publication
* [getPublicationModelAssociations](docs/bioentity/README.md#getpublicationmodelassociations) - Returns models associated with a publication
* [getPublicationPhenotypeAssociations](docs/bioentity/README.md#getpublicationphenotypeassociations) - Returns phenotypes associated with a publication
* [getPublicationVariantAssociations](docs/bioentity/README.md#getpublicationvariantassociations) - Returns variants associated with a publication
* [getSubstanceParticipantInAssociations](docs/bioentity/README.md#getsubstanceparticipantinassociations) - Returns associations between an activity and process and the specified substance
* [getSubstanceRoleAssociations](docs/bioentity/README.md#getsubstanceroleassociations) - Returns associations between given drug and roles
* [getSubstanceTreatsAssociations](docs/bioentity/README.md#getsubstancetreatsassociations) - Returns substances associated with a disease
* [getVariantCaseAssociations](docs/bioentity/README.md#getvariantcaseassociations) - Returns cases associated with a variant
* [getVariantDiseaseAssociations](docs/bioentity/README.md#getvariantdiseaseassociations) - Returns diseases associated with a variant
* [getVariantGeneAssociations](docs/bioentity/README.md#getvariantgeneassociations) - Returns genes associated with a variant
* [getVariantGenotypeAssociations](docs/bioentity/README.md#getvariantgenotypeassociations) - Returns genotypes associated with a variant
* [getVariantModelAssociations](docs/bioentity/README.md#getvariantmodelassociations) - Returns models associated with a variant
* [getVariantPhenotypeAssociations](docs/bioentity/README.md#getvariantphenotypeassociations) - Returns phenotypes associated with a variant
* [getVariantPublicationAssociations](docs/bioentity/README.md#getvariantpublicationassociations) - Returns publications associated with a variant

### [bioentityset](docs/bioentityset/README.md)

* [getEntitySetAssociations](docs/bioentityset/README.md#getentitysetassociations) - Returns compact associations for a given input set
* [getEntitySetGraphResource](docs/bioentityset/README.md#getentitysetgraphresource) - TODO Graph object spanning all entities
* [getEntitySetSummary](docs/bioentityset/README.md#getentitysetsummary) - Summary statistics for objects associated
* [getOverRepresentation](docs/bioentityset/README.md#getoverrepresentation) - Summary statistics for objects associated

### [bioentitysetHomologs](docs/bioentitysethomologs/README.md)

* [getEntitySetHomologs](docs/bioentitysethomologs/README.md#getentitysethomologs) - Returns homology associations for a given input set of genes

### [bioentitysetSlimmer](docs/bioentitysetslimmer/README.md)

* [getEntitySetAnatomySlimmer](docs/bioentitysetslimmer/README.md#getentitysetanatomyslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [getEntitySetFunctionSlimmer](docs/bioentitysetslimmer/README.md#getentitysetfunctionslimmer) - For a given gene(s), summarize its annotations over a defined set of slim
* [getEntitySetPhenotypeSlimmer](docs/bioentitysetslimmer/README.md#getentitysetphenotypeslimmer) - For a given gene(s), summarize its annotations over a defined set of slim

### [cam](docs/cam/README.md)

* [getActivityCollection](docs/cam/README.md#getactivitycollection) - Returns list of models
* [getInstanceObject](docs/cam/README.md#getinstanceobject) - Returns list of matches
* [getModelCollection](docs/cam/README.md#getmodelcollection) - Returns list of ALL models
* [getModelContributors](docs/cam/README.md#getmodelcontributors) - Returns list of all contributors across all models
* [getModelInstances](docs/cam/README.md#getmodelinstances) - Returns list of all instances
* [getModelObject](docs/cam/README.md#getmodelobject) - Returns a complete model
* [getModelProperties](docs/cam/README.md#getmodelproperties) - Returns list of all properties used across all models
* [getModelPropertyValues](docs/cam/README.md#getmodelpropertyvalues) - Returns list property-values for all models
* [getModelQuery](docs/cam/README.md#getmodelquery) - Returns list of models matching query
* [getPhysicalInteraction](docs/cam/README.md#getphysicalinteraction) - Returns list of models

### [evidenceGraph](docs/evidencegraph/README.md)

* [getEvidenceGraphObject](docs/evidencegraph/README.md#getevidencegraphobject) - Returns evidence graph object for a given association
* [getEvidenceGraphTable](docs/evidencegraph/README.md#getevidencegraphtable) - Returns evidence as a association_results object given an association

### [genomeFeatures](docs/genomefeatures/README.md)

* [getFeaturesWithinResource](docs/genomefeatures/README.md#getfeatureswithinresource) - Returns list of matches

### [graph](docs/graph/README.md)

* [getEdgeResource](docs/graph/README.md#getedgeresource) - Returns edges emanating from a given node
* [getNodeResource](docs/graph/README.md#getnoderesource) - Returns a graph node

### [identifierMapper](docs/identifiermapper/README.md)

* [getIdentifierMapper](docs/identifiermapper/README.md#getidentifiermapper) - TODO maps a list of identifiers from a source to a target

### [identifierPrefixes](docs/identifierprefixes/README.md)

* [getPrefixCollection](docs/identifierprefixes/README.md#getprefixcollection) - Returns list of prefixes
* [getPrefixContract](docs/identifierprefixes/README.md#getprefixcontract) - Returns contracted URI
* [getPrefixExpand](docs/identifierprefixes/README.md#getprefixexpand) - Returns expanded URI

### [individual](docs/individual/README.md)

* [getIndividual](docs/individual/README.md#getindividual) - Returns list of matches
* [getPedigree](docs/individual/README.md#getpedigree) - Returns list of matches

### [mart](docs/mart/README.md)

* [getMartCaseAssociationsResource](docs/mart/README.md#getmartcaseassociationsresource) - Bulk download of case associations
* [getMartDiseaseAssociationsResource](docs/mart/README.md#getmartdiseaseassociationsresource) - Bulk download of disease associations
* [getMartGeneAssociationsResource](docs/mart/README.md#getmartgeneassociationsresource) - Bulk download of gene associations
* [getMartOrthologAssociationsResource](docs/mart/README.md#getmartorthologassociationsresource) - Bulk download of orthologs
* [getMartParalogAssociationsResource](docs/mart/README.md#getmartparalogassociationsresource) - Bulk download of paralogs

### [metadata](docs/metadata/README.md)

* [getMetadataForDatasets](docs/metadata/README.md#getmetadatafordatasets) - Get metadata for all datasets from SciGraph

### [mme](docs/mme/README.md)

* [postDiseaseMme](docs/mme/README.md#postdiseasemme) - Match a patient to diseases based on their phenotypes
* [postFlyMme](docs/mme/README.md#postflymme) - Match a patient to fruit fly genes based on similar phenotypes
* [postMouseMme](docs/mme/README.md#postmousemme) - Match a patient to mouse genes based on similar phenotypes
* [postNematodeMme](docs/mme/README.md#postnematodemme) - Match a patient to nematode genes based on similar phenotypes
* [postZebrafishMme](docs/mme/README.md#postzebrafishmme) - Match a patient to zebrafish genes based on similar phenotypes

### [nlpAnnotate](docs/nlpannotate/README.md)

* [getAnnotate](docs/nlpannotate/README.md#getannotate) - Annotate a given text using SciGraph annotator
* [getAnnotateEntities](docs/nlpannotate/README.md#getannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content
* [postAnnotate](docs/nlpannotate/README.md#postannotate) - Annotate a given text using SciGraph annotator
* [postAnnotateEntities](docs/nlpannotate/README.md#postannotateentities) - Annotate a given content using SciGraph annotator and get all entities from content

### [ontol](docs/ontol/README.md)

* [getExtractOntologySubgraphResource](docs/ontol/README.md#getextractontologysubgraphresource) - Extract a subgraph from an ontology
* [getInformationContentResource](docs/ontol/README.md#getinformationcontentresource) - Returns information content (IC) for a set of relevant ontology classes
* [postExtractOntologySubgraphResource](docs/ontol/README.md#postextractontologysubgraphresource) - Extract a subgraph from an ontology

### [ontolIdentifier](docs/ontolidentifier/README.md)

* [getOntolIdentifierResource](docs/ontolidentifier/README.md#getontolidentifierresource) - Fetches a map from CURIEs/IDs to labels
* [postOntolIdentifierResource](docs/ontolidentifier/README.md#postontolidentifierresource) - Fetches a map from CURIEs/IDs to labels

### [ontolLabeler](docs/ontollabeler/README.md)

* [getOntolLabelerResource](docs/ontollabeler/README.md#getontollabelerresource) - Fetches a map from CURIEs/IDs to labels

### [ontology](docs/ontology/README.md)

* [getOntologySubset](docs/ontology/README.md#getontologysubset) - Returns meta data of an ontology subset (slim)
* [getOntologyTerm](docs/ontology/README.md#getontologyterm) - Returns meta data of an ontology term
* [getOntologyTermGraph](docs/ontology/README.md#getontologytermgraph) - Returns graph of an ontology term
* [getOntologyTermSubgraph](docs/ontology/README.md#getontologytermsubgraph) - Extract a subgraph from an ontology term
* [getOntologyTermSubsets](docs/ontology/README.md#getontologytermsubsets) - Returns subsets (slims) associated to an ontology term
* [getOntologyTermsSharedAncestor](docs/ontology/README.md#getontologytermssharedancestor) - Returns the ancestor ontology terms shared by two ontology terms

### [owlOntology](docs/owlontology/README.md)

* [getDlQuery](docs/owlontology/README.md#getdlquery) - Placeholder - use OWLery for now
* [getSparqlQuery](docs/owlontology/README.md#getsparqlquery) - Placeholder - use direct SPARQL endpoint for now

### [pairSim](docs/pairsim/README.md)

* [getPairSimJaccardResource](docs/pairsim/README.md#getpairsimjaccardresource) - Get pairwise similarity

### [relationUsage](docs/relationusage/README.md)

* [getRelationUsageBetweenResource](docs/relationusage/README.md#getrelationusagebetweenresource) - All relations used plus count of associations
* [getRelationUsagePivotLabelResource](docs/relationusage/README.md#getrelationusagepivotlabelresource) - Relation usage count for all subj x obj category combinations, showing label
* [getRelationUsagePivotResource](docs/relationusage/README.md#getrelationusagepivotresource) - Relation usage count for all subj x obj category combinations
* [getRelationUsageResource](docs/relationusage/README.md#getrelationusageresource) - All relations used plus count of associations

### [search](docs/search/README.md)

* [getAutocomplete](docs/search/README.md#getautocomplete) - Returns list of matching concepts or entities using lexical search
* [getSearchEntities](docs/search/README.md#getsearchentities) - Returns list of matching concepts or entities using lexical search
* [getSearchHpoEntities](docs/search/README.md#getsearchhpoentities) - Returns list of matching concepts or entities using lexical search

### [sim](docs/sim/README.md)

* [getAnnotationScore](docs/sim/README.md#getannotationscore) - Get annotation score
* [getSimCompare](docs/sim/README.md#getsimcompare) - Compare a reference profile vs one profiles
* [getSimSearch](docs/sim/README.md#getsimsearch) - Search for phenotypically similar diseases or model genes
* [postAnnotationScore](docs/sim/README.md#postannotationscore) - Get annotation score
* [postSimCompare](docs/sim/README.md#postsimcompare) - Compare a reference profile vs one or more profiles

### [variationSet](docs/variationset/README.md)

* [deleteVariantSetItem](docs/variationset/README.md#deletevariantsetitem) - Deletes variant set
* [getVariantAnalyze](docs/variationset/README.md#getvariantanalyze) - Returns list of matches
* [getVariantSetItem](docs/variationset/README.md#getvariantsetitem) - Returns a variant set
* [getVariantSetsArchiveCollection](docs/variationset/README.md#getvariantsetsarchivecollection) - Returns list of variant sets from a specified time period
* [getVariantSetsCollection](docs/variationset/README.md#getvariantsetscollection) - Returns list of variant sets
* [postVariantSetsCollection](docs/variationset/README.md#postvariantsetscollection) - Creates a new variant set
* [putVariantSetItem](docs/variationset/README.md#putvariantsetitem) - Updates a variant set
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
