# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/mcw.edu/1.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GETAffectedGenomicModelsUsingGETRequest{
        TaxonID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Agr.GETAffectedGenomicModelsUsingGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Agr

* `GETAffectedGenomicModelsUsingGET` - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* `GETAllelesForTaxonUsingGET` - Get gene allele records submitted by RGD to AGR by taxonId
* `GETExpressionForTaxonUsingGET` - Get expression annotations submitted by RGD to AGR by taxonId
* `GETGenesForLatestAssemblyUsingGET` - Get gene records submitted by RGD to AGR by taxonId
* `GETPhenotypesForTaxonUsingGET` - Get phenotype annotations submitted by RGD to AGR by taxonId
* `GETVariantsForTaxonUsingGET` - Get basic variant records submitted by RGD to AGR by taxonId

### Annotation

* `GETAnnotationCountByAccIDAndObjectTypeUsingGET` - Returns annotation count for ontology accession ID and object type
* `GETAnnotationCountByAccIDAndSpeciesUsingGET` - Returns annotation count for ontology accession ID and speicies
* `GETAnnotationCountByAccIDUsingGET` - Returns annotation count for ontology accession ID
* `GETAnnotationsByAccIDAndRgdIDUsingGET` - Returns a list of annotations by RGD ID and ontology term accession ID
* `GETAnnotationsByRgdIDAndOntologyUsingGET` - Returns a list of annotations by RGD ID and ontology prefix
* `GETAnnotationsByRgdIDUsingGET` - Returns a list of annotations by RGD ID
* `GETAnnotationsUsingGET` - Returns a list annotations for an ontology term or a term and it's children
* `GetAnnotationsUsingPOST` - Return a list of genes annotated to an ontology term
* `GETAnnotsByRefrerenceUsingGET` - Returns a list of annotations for a reference
* `GETTermAccIdsUsingGET` - Returns a list ontology term accession IDs annotated to an rgd object

### Chromosome

* `GETChromosomeByAssemblyUsingGET` - Return a list of chromosomes
* `GETChromosomesByAssemblyUsingGET` - Return a list of chromosomes

### Gene

* `GETAllAnnotatedGenesUsingGET` - Return a list of genes annotated to an ontology term
* `GetAnnotatedGenesUsingPOST` - Return a list of genes annotated to an ontology term
* `GETGeneAllelesUsingGET` - Return a list of gene alleles
* `GETGeneByMapKeyUsingGET` - Return a list of all genes with position information for an assembly
* `GETGeneByRgdIDUsingGET` - Get a gene record by RGD ID
* `GETGeneBySymbolUsingGET` - Get a gene record by symbol and species type key
* `GETGeneOrthologsUsingGET` - Return a list of gene orthologs
* `GETGenesAnnotatedUsingGET` - Return a list of genes annotated to an ontology term
* `GETGenesByAffyIDUsingGET` - Return a list of genes for an affymetrix ID
* `GETGenesByAliasSymbolUsingGET` - Return a list of genes for an alias and species
* `GETGenesByKeywordUsingGET` - Return a list of genes by keyword and species type key
* `GETGenesByPositionUsingGET` - Return a list of genes position and map key
* `GETGenesBySpeciesUsingGET` - Return a list of all genes for a species in RGD
* `GETGenesInRegionUsingGET` - Return a list of genes in region
* `GETMappedGenesByPositionUsingGET` - Return a list of genes position and map key
* `GetOrthologsByListUsingPOST` - Return a list of gene orthologs

### Lookup

* `GETEnsemblGeneMappingUsingGET` - Translate an RGD ID to an Ensembl Gene  ID
* `GetEnsemblGeneMappingUsingPOST` - Translate RGD IDs to Ensembl Gene IDs
* `GETEnsemblProteinMappingUsingGET` - Translate an RGD ID to an Ensembl Protein ID
* `GetEnsemblProteinMappingUsingPOST` - Translate RGD IDs to Ensembl Protein IDs
* `GETEnsemblTranscriptMappingUsingGET` - Translate an RGD ID to an Ensembl Transcript ID
* `GetEnsemblTranscriptMappingUsingPOST` - Translate RGD IDs to Ensembl Transcript IDs
* `GETGTEXMappingUsingGET` - Translate an RGD ID to an GTEx ID
* `GetGTEXMappingUsingPOST` - Translate RGD IDs to GTEx IDs
* `GETGenBankNucleotideMappingUsingGET` - Translate an RGD ID to a GenBank Nucleotide ID
* `GetGenBankNucleotideMappingUsingPOST` - Translate RGD IDs to GenBank Nucleotide IDs
* `GETGenBankProteinMappingUsingGET` - Translate an RGD ID to a GenBank Protein ID
* `GetGenBankProteinMappingUsingPOST` - Translate RGD IDs to GenBank Protein IDs
* `GETGeneTypesUsingGET` - Returns a list of gene types avialable in RGD
* `GETHGNCMappingUsingGET` - Translate an RGD ID to an HGNC ID
* `GetHGNCMappingUsingPOST` - Translate RGD IDs to HGNC IDs
* `GETMGIMappingUsingGET` - Translate an RGD ID to an MGI ID
* `GetMGIMappingUsingPOST` - Translate RGD IDs to MGI IDs
* `GETMapsUsingGET` - Return a list assembly maps for a species
* `GETMapsUsingGET1` - Return a standardUnit for an ontology if it exists
* `GETNCBIGeneMappingUsingGET` - Translate an RGD ID to an NCBI Gene ID
* `GetNCBIGeneMappingUsingPOST` - Translate RGD IDs to NCBI Gene IDs
* `GETSpeciesTypesUsingGET` - Return a Map of species type keys available in RGD
* `GETUniProtMappingUsingGET` - Translate an RGD ID to a UniProt ID
* `GetUniProtMappingUsingPOST` - Translate RGD IDs to UniProt IDs

### Map

* `GETChromosomeByAssemblyUsingGET` - Return a list of chromosomes
* `GETChromosomesByAssemblyUsingGET` - Return a list of chromosomes
* `GETMapsBySpeciesUsingGET` - Return a list of assemblies

### Ontology

* `GETOntDagsUsingGET` - Returns child and parent terms for Accession ID
* `GETTermUsingGET` - Returns term for Accession ID
* `IsDescendantOfUsingGET` - Returns true or false for terms

### Pathway

* `GETPathwaysWithDiagramsForCategoryUsingGET` - Return a list of pathways based on category provided
* `SearchPathwaysUsingGET` - Return a list of pathways based on search term

### Qtl

* `GETMappedQTLByPositionUsingGET` - Returns a list QTL for given position and assembly map
* `GETQTLByRgdIDUsingGET` - Return a QTL for provided RGD ID
* `GETQtlListByPositionUsingGET` - Returns a list QTL for given position and assembly map

### QuantitativePhenotype

* `GETChartInfoUsingGET` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* `GETChartInfoUsingGET1` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)

### RatStrain

* `GETAllStrainsUsingGET` - Return all active strains in RGD
* `GETStrainByRgdIDUsingGET` - Return a strain by RGD ID
* `GETStrainsByPositionUsingGET` - Return all active strains by position

### Sslp

* `GETMappedSSLPByPositionUsingGET` - Returns a list SSLP for given position and assembly map

### Statistics

* `GETActiveObjectCountUsingGET` - Count of active objects by type, for specified species and date
* `GETActiveObjectDiffUsingGET` - Count difference of active objects, by type, for specified species and date range
* `GETGeneTypeCountUsingGET` - Count of gene types, for specified species and date
* `GETGeneTypeDiffUsingGET` - Count difference of gene types, for specified species and date range
* `GETObjectStatusCountUsingGET` - Count of objects with given status, for specified species and date
* `GETObjectStatusDiffUsingGET` - Count difference of objects with given status, for specified species and date range
* `GETObjectsWithRefSeqCountUsingGET` - Count of objects with reference sequence(s), by object type, for specified species and date
* `GETObjectsWithRefSeqDiffUsingGET` - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* `GETObjectsWithReferenceCountUsingGET` - Count of objects with reference, by object type, for specified species and date
* `GETObjectsWithReferenceDiffUsingGET` - Count difference of objects with reference, by object type, for specified species and date range
* `GETObjectsWithXDBsCountUsingGET` - Count of objects with external database ids, by database id, for specified species, object type and date
* `GETObjectsWithXDBsDiffUsingGET` - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* `GETProteinInteractionCountUsingGET` - Count of protein interactions, for specified species and date
* `GETProteinInteractionDiffUsingGET` - Count difference of protein interactions, for specified species and date range
* `GETQtlInheritanceTypeCountUsingGET` - Count of strains, by qtl inheritance type, for specified species and date
* `GETQtlInheritanceTypeDiffUsingGET` - Count difference of strains, by qtl inheritance type, for specified species and date range
* `GETRetiredObjectCountUsingGET` - Count of retired objects by type, for specified species and date
* `GETRetiredObjectDiffUsingGET` - Count difference of retired objects, by type, for specified species and date range
* `GETStrainTypeCountUsingGET` - Count of strain types, for specified species and date
* `GETStrainTypeDiffUsingGET` - Count difference of strain types, for specified species and date range
* `GETTermStatsUsingGET` - getTermStats
* `GETWithdrawnObjectCountUsingGET` - Count of withdrawn objects by type, for specified species and date
* `GETWithdrawnObjectDiffUsingGET` - Count difference of withdrawn objects, by type, for specified species and date range
* `GETXdbsCountUsingGET` - Count of external database ids, for specied species and date
* `GETXdbsDiffUsingGET` - Count difference of external database ids, for specified species and date range

### EnrichmentWebService

* `GetEnrichmentDataUsingPOST` - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* `GetEnrichmentDataUsingPOST1` - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
