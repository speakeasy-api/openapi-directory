# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAssociationBySubjectAndAssocTypeRequest(
    path_params=operations.GetAssociationBySubjectAndAssocTypePathParams(
        association_type="veniam",
    ),
    query_params=operations.GetAssociationBySubjectAndAssocTypeQueryParams(
        evidence="ratione",
        exclude_automatic_assertions=False,
        object="veniam",
        rows=3524526115751290665,
        start=4431293507688501841,
        subject="ipsa",
        unselect_evidence=False,
        use_compact_associations=True,
    ),
)
    
res = s.association.get_association_by_subject_and_assoc_type(req)

if res.association_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### association

* `get_association_by_subject_and_assoc_type` - Returns list of matching associations of a given type
* `get_association_by_subject_and_object_category_search` - Returns list of matching associations between a given subject and object category
* `get_association_by_subject_category_search` - Returns list of matching associations for a given subject category
* `get_association_object` - Returns the association with a given identifier
* `get_associations_between` - Returns associations connecting two entities
* `get_associations_from` - Returns list of matching associations starting from a given subject (source)
* `get_associations_to` - Returns list of matching associations pointing to a given object (target)

### bioentity

* `get_anatomy_gene_associations` - Returns genes associated with a given anatomy
* `get_anatomy_gene_by_taxon_associations` - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
* `get_case_disease_associations` - Returns diseases associated with a case
* `get_case_genotype_associations` - Returns genotypes associated with a case
* `get_case_model_associations` - Returns models associated with a case
* `get_case_phenotype_associations` - Returns phenotypes associated with a case
* `get_case_variant_associations` - Returns variants associated with a case
* `get_disease_case_associations` - Returns cases associated with a disease
* `get_disease_gene_associations` - Returns genes associated with a disease
* `get_disease_genotype_associations` - Returns genotypes associated with a disease
* `get_disease_model_associations` - Returns associations to models of the disease
* `get_disease_model_taxon_associations` - Returns associations to models of the disease constrained by taxon
* `get_disease_pathway_associations` - Returns pathways associated with a disease
* `get_disease_phenotype_associations` - Returns phenotypes associated with disease
* `get_disease_publication_associations` - Returns publications associated with a disease
* `get_disease_substance_associations` - Returns substances associated with a disease
* `get_disease_variant_associations` - Returns variants associated with a disease
* `get_function_associations` - Returns annotations associated to a function term
* `get_function_gene_associations` - Returns genes associated to a GO term
* `get_function_publication_associations` - Returns publications associated to a GO term
* `get_function_taxon_associations` - Returns taxons associated to a GO term
* `get_gene_anatomy_associations` - Returns anatomical entities associated with a gene
* `get_gene_case_associations` - Returns cases associated with a gene
* `get_gene_disease_associations` - Returns diseases associated with gene
* `get_gene_expression_associations` - Returns expression events for a gene
* `get_gene_function_associations` - Returns function associations for a gene
* `get_gene_genotype_associations` - Returns genotypes associated with a gene
* `get_gene_homolog_associations` - Returns homologs for a gene
* `get_gene_interactions` - Returns interactions for a gene
* `get_gene_model_associations` - Returns models associated with a gene
* `get_gene_ortholog_disease_associations` - Return diseases associated with orthologs of a gene
* `get_gene_ortholog_phenotype_associations` - Return phenotypes associated with orthologs for a gene
* `get_gene_pathway_associations` - Returns pathways associated with gene
* `get_gene_phenotype_associations` - Returns phenotypes associated with gene
* `get_gene_publication_associations` - Returns publications associated with a gene
* `get_gene_variant_associations` - Returns variants associated with a gene
* `get_generic_associations` - Returns associations for an entity regardless of the type
* `get_generic_object` - Returns basic info on object of any type
* `get_generic_object_by_type` - Return basic info on an object for a given type
* `get_genotype_case_associations` - Returns cases associated with a genotype
* `get_genotype_disease_associations` - Returns diseases associated with a genotype
* `get_genotype_gene_associations` - Returns genes associated with a genotype
* `get_genotype_genotype_associations` - Returns genotypes-genotype associations
* `get_genotype_model_associations` - Returns models associated with a genotype
* `get_genotype_phenotype_associations` - Returns phenotypes associated with a genotype
* `get_genotype_publication_associations` - Returns publications associated with a genotype
* `get_genotype_variant_associations` - Returns genotypes-variant associations
* `get_goterm_gene_associations` - Returns associations to GO terms for a gene
* `get_model_case_associations` - Returns cases associated with a model
* `get_model_disease_associations` - Returns diseases associated with a model
* `get_model_gene_associations` - Returns genes associated with a model
* `get_model_genotype_associations` - Returns genotypes associated with a model
* `get_model_phenotype_associations` - Returns phenotypes associated with a model
* `get_model_publication_associations` - Returns publications associated with a model
* `get_model_variant_associations` - Returns variants associated with a model
* `get_pathway_disease_associations` - Returns diseases associated with a pathway
* `get_pathway_gene_associations` - Returns genes associated with a pathway
* `get_pathway_phenotype_associations` - Returns phenotypes associated with a pathway
* `get_phenotype_anatomy_associations` - Returns anatomical entities associated with a phenotype
* `get_phenotype_case_associations` - Returns cases associated with a phenotype
* `get_phenotype_disease_associations` - Returns diseases associated with a phenotype
* `get_phenotype_gene_associations` - Returns genes associated with a phenotype
* `get_phenotype_gene_by_taxon_associations` - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
* `get_phenotype_genotype_associations` - Returns genotypes associated with a phenotype
* `get_phenotype_pathway_associations` - Returns pathways associated with a phenotype
* `get_phenotype_publication_associations` - Returns publications associated with a phenotype
* `get_phenotype_variant_associations` - Returns variants associated with a phenotype
* `get_publication_disease_associations` - Returns diseases associated with a publication
* `get_publication_gene_associations` - Returns genes associated with a publication
* `get_publication_genotype_associations` - Returns genotypes associated with a publication
* `get_publication_model_associations` - Returns models associated with a publication
* `get_publication_phenotype_associations` - Returns phenotypes associated with a publication
* `get_publication_variant_associations` - Returns variants associated with a publication
* `get_substance_participant_in_associations` - Returns associations between an activity and process and the specified substance
* `get_substance_role_associations` - Returns associations between given drug and roles
* `get_substance_treats_associations` - Returns substances associated with a disease
* `get_variant_case_associations` - Returns cases associated with a variant
* `get_variant_disease_associations` - Returns diseases associated with a variant
* `get_variant_gene_associations` - Returns genes associated with a variant
* `get_variant_genotype_associations` - Returns genotypes associated with a variant
* `get_variant_model_associations` - Returns models associated with a variant
* `get_variant_phenotype_associations` - Returns phenotypes associated with a variant
* `get_variant_publication_associations` - Returns publications associated with a variant

### bioentityset

* `get_entity_set_associations` - Returns compact associations for a given input set
* `get_entity_set_graph_resource` - TODO Graph object spanning all entities
* `get_entity_set_summary` - Summary statistics for objects associated
* `get_over_representation` - Summary statistics for objects associated

### bioentityset/homologs

* `get_entity_set_homologs` - Returns homology associations for a given input set of genes

### bioentityset/slimmer

* `get_entity_set_anatomy_slimmer` - For a given gene(s), summarize its annotations over a defined set of slim
* `get_entity_set_function_slimmer` - For a given gene(s), summarize its annotations over a defined set of slim
* `get_entity_set_phenotype_slimmer` - For a given gene(s), summarize its annotations over a defined set of slim

### cam

* `get_activity_collection` - Returns list of models
* `get_instance_object` - Returns list of matches
* `get_model_collection` - Returns list of ALL models
* `get_model_contributors` - Returns list of all contributors across all models
* `get_model_instances` - Returns list of all instances
* `get_model_object` - Returns a complete model
* `get_model_properties` - Returns list of all properties used across all models
* `get_model_property_values` - Returns list property-values for all models
* `get_model_query` - Returns list of models matching query
* `get_physical_interaction` - Returns list of models

### evidence/graph

* `get_evidence_graph_object` - Returns evidence graph object for a given association
* `get_evidence_graph_table` - Returns evidence as a association_results object given an association

### genome/features

* `get_features_within_resource` - Returns list of matches

### graph

* `get_edge_resource` - Returns edges emanating from a given node
* `get_node_resource` - Returns a graph node

### identifier/mapper

* `get_identifier_mapper` - TODO maps a list of identifiers from a source to a target

### identifier/prefixes

* `get_prefix_collection` - Returns list of prefixes
* `get_prefix_contract` - Returns contracted URI
* `get_prefix_expand` - Returns expanded URI

### individual

* `get_individual` - Returns list of matches
* `get_pedigree` - Returns list of matches

### mart

* `get_mart_case_associations_resource` - Bulk download of case associations
* `get_mart_disease_associations_resource` - Bulk download of disease associations
* `get_mart_gene_associations_resource` - Bulk download of gene associations
* `get_mart_ortholog_associations_resource` - Bulk download of orthologs
* `get_mart_paralog_associations_resource` - Bulk download of paralogs

### metadata

* `get_metadata_for_datasets` - Get metadata for all datasets from SciGraph

### nlp/annotate

* `get_annotate` - Annotate a given text using SciGraph annotator
* `get_annotate_entities` - Annotate a given content using SciGraph annotator and get all entities from content
* `post_annotate` - Annotate a given text using SciGraph annotator
* `post_annotate_entities` - Annotate a given content using SciGraph annotator and get all entities from content

### ontol

* `get_extract_ontology_subgraph_resource` - Extract a subgraph from an ontology
* `get_information_content_resource` - Returns information content (IC) for a set of relevant ontology classes
* `post_extract_ontology_subgraph_resource` - Extract a subgraph from an ontology

### ontol/labeler

* `get_ontol_labeler_resource` - Fetches a map from CURIEs/IDs to labels

### ontology

* `get_ontology_subset` - Returns meta data of an ontology subset (slim)
* `get_ontology_term` - Returns meta data of an ontology term
* `get_ontology_term_graph` - Returns graph of an ontology term
* `get_ontology_term_subgraph` - Extract a subgraph from an ontology term
* `get_ontology_term_subsets` - Returns subsets (slims) associated to an ontology term
* `get_ontology_terms_shared_ancestor` - Returns the ancestor ontology terms shared by two ontology terms

### owl/ontology

* `get_dl_query` - Placeholder - use OWLery for now
* `get_sparql_query` - Placeholder - use direct SPARQL endpoint for now

### pair/sim

* `get_pair_sim_jaccard_resource` - Get pairwise similarity

### relation/usage

* `get_relation_usage_between_resource` - All relations used plus count of associations
* `get_relation_usage_pivot_label_resource` - Relation usage count for all subj x obj category combinations, showing label
* `get_relation_usage_pivot_resource` - Relation usage count for all subj x obj category combinations
* `get_relation_usage_resource` - All relations used plus count of associations

### search

* `get_autocomplete` - Returns list of matching concepts or entities using lexical search
* `get_search_entities` - Returns list of matching concepts or entities using lexical search
* `get_search_hpo_entities` - Returns list of matching concepts or entities using lexical search

### sim

* `get_annotation_score` - Get annotation score
* `get_sim_compare` - Compare a reference profile vs one profiles
* `get_sim_search` - Search for phenotypically similar diseases or model genes
* `post_annotation_score` - Get annotation score
* `post_sim_compare` - Compare a reference profile vs one or more profiles

### variation/set

* `delete_variant_set_item` - Deletes variant set
* `get_variant_analyze` - Returns list of matches
* `get_variant_set_item` - Returns a variant set
* `get_variant_sets_archive_collection` - Returns list of variant sets from a specified time period
* `get_variant_sets_collection` - Returns list of variant sets
* `post_variant_sets_collection` - Creates a new variant set
* `put_variant_set_item` - Updates a variant set

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
