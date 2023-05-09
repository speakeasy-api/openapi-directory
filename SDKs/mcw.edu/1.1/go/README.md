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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Agr.GETAffectedGenomicModelsUsingGET(ctx, operations.GETAffectedGenomicModelsUsingGETRequest{
        TaxonID: "corrupti",
    })
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


### [Agr](docs/agr/README.md)

* [GETAffectedGenomicModelsUsingGET](docs/agr/README.md#getaffectedgenomicmodelsusingget) - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* [GETAllelesForTaxonUsingGET](docs/agr/README.md#getallelesfortaxonusingget) - Get gene allele records submitted by RGD to AGR by taxonId
* [GETExpressionForTaxonUsingGET](docs/agr/README.md#getexpressionfortaxonusingget) - Get expression annotations submitted by RGD to AGR by taxonId
* [GETGenesForLatestAssemblyUsingGET](docs/agr/README.md#getgenesforlatestassemblyusingget) - Get gene records submitted by RGD to AGR by taxonId
* [GETPhenotypesForTaxonUsingGET](docs/agr/README.md#getphenotypesfortaxonusingget) - Get phenotype annotations submitted by RGD to AGR by taxonId
* [GETVariantsForTaxonUsingGET](docs/agr/README.md#getvariantsfortaxonusingget) - Get basic variant records submitted by RGD to AGR by taxonId

### [Annotation](docs/annotation/README.md)

* [GETAnnotationCountByAccIDAndObjectTypeUsingGET](docs/annotation/README.md#getannotationcountbyaccidandobjecttypeusingget) - Returns annotation count for ontology accession ID and object type
* [GETAnnotationCountByAccIDAndSpeciesUsingGET](docs/annotation/README.md#getannotationcountbyaccidandspeciesusingget) - Returns annotation count for ontology accession ID and speicies
* [GETAnnotationCountByAccIDUsingGET](docs/annotation/README.md#getannotationcountbyaccidusingget) - Returns annotation count for ontology accession ID
* [GETAnnotationsByAccIDAndRgdIDUsingGET](docs/annotation/README.md#getannotationsbyaccidandrgdidusingget) - Returns a list of annotations by RGD ID and ontology term accession ID
* [GETAnnotationsByRgdIDAndOntologyUsingGET](docs/annotation/README.md#getannotationsbyrgdidandontologyusingget) - Returns a list of annotations by RGD ID and ontology prefix
* [GETAnnotationsByRgdIDUsingGET](docs/annotation/README.md#getannotationsbyrgdidusingget) - Returns a list of annotations by RGD ID
* [GETAnnotationsUsingGET](docs/annotation/README.md#getannotationsusingget) - Returns a list annotations for an ontology term or a term and it's children
* [GetAnnotationsUsingPOST](docs/annotation/README.md#getannotationsusingpost) - Return a list of genes annotated to an ontology term
* [GETAnnotsByRefrerenceUsingGET](docs/annotation/README.md#getannotsbyrefrerenceusingget) - Returns a list of annotations for a reference
* [GETTermAccIdsUsingGET](docs/annotation/README.md#gettermaccidsusingget) - Returns a list ontology term accession IDs annotated to an rgd object

### [Chromosome](docs/chromosome/README.md)

* [GETChromosomeByAssemblyUsingGET](docs/chromosome/README.md#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [GETChromosomesByAssemblyUsingGET](docs/chromosome/README.md#getchromosomesbyassemblyusingget) - Return a list of chromosomes

### [Gene](docs/gene/README.md)

* [GETAllAnnotatedGenesUsingGET](docs/gene/README.md#getallannotatedgenesusingget) - Return a list of genes annotated to an ontology term
* [GetAnnotatedGenesUsingPOST](docs/gene/README.md#getannotatedgenesusingpost) - Return a list of genes annotated to an ontology term
* [GETGeneAllelesUsingGET](docs/gene/README.md#getgeneallelesusingget) - Return a list of gene alleles
* [GETGeneByMapKeyUsingGET](docs/gene/README.md#getgenebymapkeyusingget) - Return a list of all genes with position information for an assembly
* [GETGeneByRgdIDUsingGET](docs/gene/README.md#getgenebyrgdidusingget) - Get a gene record by RGD ID
* [GETGeneBySymbolUsingGET](docs/gene/README.md#getgenebysymbolusingget) - Get a gene record by symbol and species type key
* [GETGeneOrthologsUsingGET](docs/gene/README.md#getgeneorthologsusingget) - Return a list of gene orthologs
* [GETGenesAnnotatedUsingGET](docs/gene/README.md#getgenesannotatedusingget) - Return a list of genes annotated to an ontology term
* [GETGenesByAffyIDUsingGET](docs/gene/README.md#getgenesbyaffyidusingget) - Return a list of genes for an affymetrix ID
* [GETGenesByAliasSymbolUsingGET](docs/gene/README.md#getgenesbyaliassymbolusingget) - Return a list of genes for an alias and species
* [GETGenesByKeywordUsingGET](docs/gene/README.md#getgenesbykeywordusingget) - Return a list of genes by keyword and species type key
* [GETGenesByPositionUsingGET](docs/gene/README.md#getgenesbypositionusingget) - Return a list of genes position and map key
* [GETGenesBySpeciesUsingGET](docs/gene/README.md#getgenesbyspeciesusingget) - Return a list of all genes for a species in RGD
* [GETGenesInRegionUsingGET](docs/gene/README.md#getgenesinregionusingget) - Return a list of genes in region
* [GETMappedGenesByPositionUsingGET](docs/gene/README.md#getmappedgenesbypositionusingget) - Return a list of genes position and map key
* [GetOrthologsByListUsingPOST](docs/gene/README.md#getorthologsbylistusingpost) - Return a list of gene orthologs

### [Lookup](docs/lookup/README.md)

* [GETEnsemblGeneMappingUsingGET](docs/lookup/README.md#getensemblgenemappingusingget) - Translate an RGD ID to an Ensembl Gene  ID
* [GetEnsemblGeneMappingUsingPOST](docs/lookup/README.md#getensemblgenemappingusingpost) - Translate RGD IDs to Ensembl Gene IDs
* [GETEnsemblProteinMappingUsingGET](docs/lookup/README.md#getensemblproteinmappingusingget) - Translate an RGD ID to an Ensembl Protein ID
* [GetEnsemblProteinMappingUsingPOST](docs/lookup/README.md#getensemblproteinmappingusingpost) - Translate RGD IDs to Ensembl Protein IDs
* [GETEnsemblTranscriptMappingUsingGET](docs/lookup/README.md#getensembltranscriptmappingusingget) - Translate an RGD ID to an Ensembl Transcript ID
* [GetEnsemblTranscriptMappingUsingPOST](docs/lookup/README.md#getensembltranscriptmappingusingpost) - Translate RGD IDs to Ensembl Transcript IDs
* [GETGTEXMappingUsingGET](docs/lookup/README.md#getgtexmappingusingget) - Translate an RGD ID to an GTEx ID
* [GetGTEXMappingUsingPOST](docs/lookup/README.md#getgtexmappingusingpost) - Translate RGD IDs to GTEx IDs
* [GETGenBankNucleotideMappingUsingGET](docs/lookup/README.md#getgenbanknucleotidemappingusingget) - Translate an RGD ID to a GenBank Nucleotide ID
* [GetGenBankNucleotideMappingUsingPOST](docs/lookup/README.md#getgenbanknucleotidemappingusingpost) - Translate RGD IDs to GenBank Nucleotide IDs
* [GETGenBankProteinMappingUsingGET](docs/lookup/README.md#getgenbankproteinmappingusingget) - Translate an RGD ID to a GenBank Protein ID
* [GetGenBankProteinMappingUsingPOST](docs/lookup/README.md#getgenbankproteinmappingusingpost) - Translate RGD IDs to GenBank Protein IDs
* [GETGeneTypesUsingGET](docs/lookup/README.md#getgenetypesusingget) - Returns a list of gene types avialable in RGD
* [GETHGNCMappingUsingGET](docs/lookup/README.md#gethgncmappingusingget) - Translate an RGD ID to an HGNC ID
* [GetHGNCMappingUsingPOST](docs/lookup/README.md#gethgncmappingusingpost) - Translate RGD IDs to HGNC IDs
* [GETMGIMappingUsingGET](docs/lookup/README.md#getmgimappingusingget) - Translate an RGD ID to an MGI ID
* [GetMGIMappingUsingPOST](docs/lookup/README.md#getmgimappingusingpost) - Translate RGD IDs to MGI IDs
* [GETMapsUsingGET](docs/lookup/README.md#getmapsusingget) - Return a list assembly maps for a species
* [GETMapsUsingGET1](docs/lookup/README.md#getmapsusingget1) - Return a standardUnit for an ontology if it exists
* [GETNCBIGeneMappingUsingGET](docs/lookup/README.md#getncbigenemappingusingget) - Translate an RGD ID to an NCBI Gene ID
* [GetNCBIGeneMappingUsingPOST](docs/lookup/README.md#getncbigenemappingusingpost) - Translate RGD IDs to NCBI Gene IDs
* [GETSpeciesTypesUsingGET](docs/lookup/README.md#getspeciestypesusingget) - Return a Map of species type keys available in RGD
* [GETUniProtMappingUsingGET](docs/lookup/README.md#getuniprotmappingusingget) - Translate an RGD ID to a UniProt ID
* [GetUniProtMappingUsingPOST](docs/lookup/README.md#getuniprotmappingusingpost) - Translate RGD IDs to UniProt IDs

### [Map](docs/map/README.md)

* [GETChromosomeByAssemblyUsingGET](docs/map/README.md#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [GETChromosomesByAssemblyUsingGET](docs/map/README.md#getchromosomesbyassemblyusingget) - Return a list of chromosomes
* [GETMapsBySpeciesUsingGET](docs/map/README.md#getmapsbyspeciesusingget) - Return a list of assemblies

### [Ontology](docs/ontology/README.md)

* [GETOntDagsUsingGET](docs/ontology/README.md#getontdagsusingget) - Returns child and parent terms for Accession ID
* [GETTermUsingGET](docs/ontology/README.md#gettermusingget) - Returns term for Accession ID
* [IsDescendantOfUsingGET](docs/ontology/README.md#isdescendantofusingget) - Returns true or false for terms

### [Pathway](docs/pathway/README.md)

* [GETPathwaysWithDiagramsForCategoryUsingGET](docs/pathway/README.md#getpathwayswithdiagramsforcategoryusingget) - Return a list of pathways based on category provided
* [SearchPathwaysUsingGET](docs/pathway/README.md#searchpathwaysusingget) - Return a list of pathways based on search term

### [Qtl](docs/qtl/README.md)

* [GETMappedQTLByPositionUsingGET](docs/qtl/README.md#getmappedqtlbypositionusingget) - Returns a list QTL for given position and assembly map
* [GETQTLByRgdIDUsingGET](docs/qtl/README.md#getqtlbyrgdidusingget) - Return a QTL for provided RGD ID
* [GETQtlListByPositionUsingGET](docs/qtl/README.md#getqtllistbypositionusingget) - Returns a list QTL for given position and assembly map

### [QuantitativePhenotype](docs/quantitativephenotype/README.md)

* [GETChartInfoUsingGET](docs/quantitativephenotype/README.md#getchartinfousingget) - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* [GETChartInfoUsingGET1](docs/quantitativephenotype/README.md#getchartinfousingget1) - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)

### [RatStrain](docs/ratstrain/README.md)

* [GETAllStrainsUsingGET](docs/ratstrain/README.md#getallstrainsusingget) - Return all active strains in RGD
* [GETStrainByRgdIDUsingGET](docs/ratstrain/README.md#getstrainbyrgdidusingget) - Return a strain by RGD ID
* [GETStrainsByPositionUsingGET](docs/ratstrain/README.md#getstrainsbypositionusingget) - Return all active strains by position

### [Sslp](docs/sslp/README.md)

* [GETMappedSSLPByPositionUsingGET](docs/sslp/README.md#getmappedsslpbypositionusingget) - Returns a list SSLP for given position and assembly map

### [Statistics](docs/statistics/README.md)

* [GETActiveObjectCountUsingGET](docs/statistics/README.md#getactiveobjectcountusingget) - Count of active objects by type, for specified species and date
* [GETActiveObjectDiffUsingGET](docs/statistics/README.md#getactiveobjectdiffusingget) - Count difference of active objects, by type, for specified species and date range
* [GETGeneTypeCountUsingGET](docs/statistics/README.md#getgenetypecountusingget) - Count of gene types, for specified species and date
* [GETGeneTypeDiffUsingGET](docs/statistics/README.md#getgenetypediffusingget) - Count difference of gene types, for specified species and date range
* [GETObjectStatusCountUsingGET](docs/statistics/README.md#getobjectstatuscountusingget) - Count of objects with given status, for specified species and date
* [GETObjectStatusDiffUsingGET](docs/statistics/README.md#getobjectstatusdiffusingget) - Count difference of objects with given status, for specified species and date range
* [GETObjectsWithRefSeqCountUsingGET](docs/statistics/README.md#getobjectswithrefseqcountusingget) - Count of objects with reference sequence(s), by object type, for specified species and date
* [GETObjectsWithRefSeqDiffUsingGET](docs/statistics/README.md#getobjectswithrefseqdiffusingget) - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* [GETObjectsWithReferenceCountUsingGET](docs/statistics/README.md#getobjectswithreferencecountusingget) - Count of objects with reference, by object type, for specified species and date
* [GETObjectsWithReferenceDiffUsingGET](docs/statistics/README.md#getobjectswithreferencediffusingget) - Count difference of objects with reference, by object type, for specified species and date range
* [GETObjectsWithXDBsCountUsingGET](docs/statistics/README.md#getobjectswithxdbscountusingget) - Count of objects with external database ids, by database id, for specified species, object type and date
* [GETObjectsWithXDBsDiffUsingGET](docs/statistics/README.md#getobjectswithxdbsdiffusingget) - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* [GETProteinInteractionCountUsingGET](docs/statistics/README.md#getproteininteractioncountusingget) - Count of protein interactions, for specified species and date
* [GETProteinInteractionDiffUsingGET](docs/statistics/README.md#getproteininteractiondiffusingget) - Count difference of protein interactions, for specified species and date range
* [GETQtlInheritanceTypeCountUsingGET](docs/statistics/README.md#getqtlinheritancetypecountusingget) - Count of strains, by qtl inheritance type, for specified species and date
* [GETQtlInheritanceTypeDiffUsingGET](docs/statistics/README.md#getqtlinheritancetypediffusingget) - Count difference of strains, by qtl inheritance type, for specified species and date range
* [GETRetiredObjectCountUsingGET](docs/statistics/README.md#getretiredobjectcountusingget) - Count of retired objects by type, for specified species and date
* [GETRetiredObjectDiffUsingGET](docs/statistics/README.md#getretiredobjectdiffusingget) - Count difference of retired objects, by type, for specified species and date range
* [GETStrainTypeCountUsingGET](docs/statistics/README.md#getstraintypecountusingget) - Count of strain types, for specified species and date
* [GETStrainTypeDiffUsingGET](docs/statistics/README.md#getstraintypediffusingget) - Count difference of strain types, for specified species and date range
* [GETTermStatsUsingGET](docs/statistics/README.md#gettermstatsusingget) - getTermStats
* [GETWithdrawnObjectCountUsingGET](docs/statistics/README.md#getwithdrawnobjectcountusingget) - Count of withdrawn objects by type, for specified species and date
* [GETWithdrawnObjectDiffUsingGET](docs/statistics/README.md#getwithdrawnobjectdiffusingget) - Count difference of withdrawn objects, by type, for specified species and date range
* [GETXdbsCountUsingGET](docs/statistics/README.md#getxdbscountusingget) - Count of external database ids, for specied species and date
* [GETXdbsDiffUsingGET](docs/statistics/README.md#getxdbsdiffusingget) - Count difference of external database ids, for specified species and date range

### [EnrichmentWebService](docs/enrichmentwebservice/README.md)

* [GetEnrichmentDataUsingPOST](docs/enrichmentwebservice/README.md#getenrichmentdatausingpost) - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* [GetEnrichmentDataUsingPOST1](docs/enrichmentwebservice/README.md#getenrichmentdatausingpost1) - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
