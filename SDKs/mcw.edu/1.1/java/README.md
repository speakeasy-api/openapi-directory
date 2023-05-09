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
import org.openapis.openapi.models.operations.GETAffectedGenomicModelsUsingGETRequest;
import org.openapis.openapi.models.operations.GETAffectedGenomicModelsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAffectedGenomicModelsUsingGETRequest req = new GETAffectedGenomicModelsUsingGETRequest("corrupti");            

            GETAffectedGenomicModelsUsingGETResponse res = sdk.agr.getAffectedGenomicModelsUsingGET(req);

            if (res.body != null) {
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


### [agr](docs/agr/README.md)

* [getAffectedGenomicModelsUsingGET](docs/agr/README.md#getaffectedgenomicmodelsusingget) - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* [getAllelesForTaxonUsingGET](docs/agr/README.md#getallelesfortaxonusingget) - Get gene allele records submitted by RGD to AGR by taxonId
* [getExpressionForTaxonUsingGET](docs/agr/README.md#getexpressionfortaxonusingget) - Get expression annotations submitted by RGD to AGR by taxonId
* [getGenesForLatestAssemblyUsingGET](docs/agr/README.md#getgenesforlatestassemblyusingget) - Get gene records submitted by RGD to AGR by taxonId
* [getPhenotypesForTaxonUsingGET](docs/agr/README.md#getphenotypesfortaxonusingget) - Get phenotype annotations submitted by RGD to AGR by taxonId
* [getVariantsForTaxonUsingGET](docs/agr/README.md#getvariantsfortaxonusingget) - Get basic variant records submitted by RGD to AGR by taxonId

### [annotation](docs/annotation/README.md)

* [getAnnotationCountByAccIdAndObjectTypeUsingGET](docs/annotation/README.md#getannotationcountbyaccidandobjecttypeusingget) - Returns annotation count for ontology accession ID and object type
* [getAnnotationCountByAccIdAndSpeciesUsingGET](docs/annotation/README.md#getannotationcountbyaccidandspeciesusingget) - Returns annotation count for ontology accession ID and speicies
* [getAnnotationCountByAccIdUsingGET](docs/annotation/README.md#getannotationcountbyaccidusingget) - Returns annotation count for ontology accession ID
* [getAnnotationsByAccIdAndRgdIdUsingGET](docs/annotation/README.md#getannotationsbyaccidandrgdidusingget) - Returns a list of annotations by RGD ID and ontology term accession ID
* [getAnnotationsByRgdIdAndOntologyUsingGET](docs/annotation/README.md#getannotationsbyrgdidandontologyusingget) - Returns a list of annotations by RGD ID and ontology prefix
* [getAnnotationsByRgdIdUsingGET](docs/annotation/README.md#getannotationsbyrgdidusingget) - Returns a list of annotations by RGD ID
* [getAnnotationsUsingGET](docs/annotation/README.md#getannotationsusingget) - Returns a list annotations for an ontology term or a term and it's children
* [getAnnotationsUsingPOST](docs/annotation/README.md#getannotationsusingpost) - Return a list of genes annotated to an ontology term
* [getAnnotsByRefrerenceUsingGET](docs/annotation/README.md#getannotsbyrefrerenceusingget) - Returns a list of annotations for a reference
* [getTermAccIdsUsingGET](docs/annotation/README.md#gettermaccidsusingget) - Returns a list ontology term accession IDs annotated to an rgd object

### [chromosome](docs/chromosome/README.md)

* [getChromosomeByAssemblyUsingGET](docs/chromosome/README.md#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [getChromosomesByAssemblyUsingGET](docs/chromosome/README.md#getchromosomesbyassemblyusingget) - Return a list of chromosomes

### [gene](docs/gene/README.md)

* [getAllAnnotatedGenesUsingGET](docs/gene/README.md#getallannotatedgenesusingget) - Return a list of genes annotated to an ontology term
* [getAnnotatedGenesUsingPOST](docs/gene/README.md#getannotatedgenesusingpost) - Return a list of genes annotated to an ontology term
* [getGeneAllelesUsingGET](docs/gene/README.md#getgeneallelesusingget) - Return a list of gene alleles
* [getGeneByMapKeyUsingGET](docs/gene/README.md#getgenebymapkeyusingget) - Return a list of all genes with position information for an assembly
* [getGeneByRgdIdUsingGET](docs/gene/README.md#getgenebyrgdidusingget) - Get a gene record by RGD ID
* [getGeneBySymbolUsingGET](docs/gene/README.md#getgenebysymbolusingget) - Get a gene record by symbol and species type key
* [getGeneOrthologsUsingGET](docs/gene/README.md#getgeneorthologsusingget) - Return a list of gene orthologs
* [getGenesAnnotatedUsingGET](docs/gene/README.md#getgenesannotatedusingget) - Return a list of genes annotated to an ontology term
* [getGenesByAffyIdUsingGET](docs/gene/README.md#getgenesbyaffyidusingget) - Return a list of genes for an affymetrix ID
* [getGenesByAliasSymbolUsingGET](docs/gene/README.md#getgenesbyaliassymbolusingget) - Return a list of genes for an alias and species
* [getGenesByKeywordUsingGET](docs/gene/README.md#getgenesbykeywordusingget) - Return a list of genes by keyword and species type key
* [getGenesByPositionUsingGET](docs/gene/README.md#getgenesbypositionusingget) - Return a list of genes position and map key
* [getGenesBySpeciesUsingGET](docs/gene/README.md#getgenesbyspeciesusingget) - Return a list of all genes for a species in RGD
* [getGenesInRegionUsingGET](docs/gene/README.md#getgenesinregionusingget) - Return a list of genes in region
* [getMappedGenesByPositionUsingGET](docs/gene/README.md#getmappedgenesbypositionusingget) - Return a list of genes position and map key
* [getOrthologsByListUsingPOST](docs/gene/README.md#getorthologsbylistusingpost) - Return a list of gene orthologs

### [lookup](docs/lookup/README.md)

* [getEnsemblGeneMappingUsingGET](docs/lookup/README.md#getensemblgenemappingusingget) - Translate an RGD ID to an Ensembl Gene  ID
* [getEnsemblGeneMappingUsingPOST](docs/lookup/README.md#getensemblgenemappingusingpost) - Translate RGD IDs to Ensembl Gene IDs
* [getEnsemblProteinMappingUsingGET](docs/lookup/README.md#getensemblproteinmappingusingget) - Translate an RGD ID to an Ensembl Protein ID
* [getEnsemblProteinMappingUsingPOST](docs/lookup/README.md#getensemblproteinmappingusingpost) - Translate RGD IDs to Ensembl Protein IDs
* [getEnsemblTranscriptMappingUsingGET](docs/lookup/README.md#getensembltranscriptmappingusingget) - Translate an RGD ID to an Ensembl Transcript ID
* [getEnsemblTranscriptMappingUsingPOST](docs/lookup/README.md#getensembltranscriptmappingusingpost) - Translate RGD IDs to Ensembl Transcript IDs
* [getGTEXMappingUsingGET](docs/lookup/README.md#getgtexmappingusingget) - Translate an RGD ID to an GTEx ID
* [getGTEXMappingUsingPOST](docs/lookup/README.md#getgtexmappingusingpost) - Translate RGD IDs to GTEx IDs
* [getGenBankNucleotideMappingUsingGET](docs/lookup/README.md#getgenbanknucleotidemappingusingget) - Translate an RGD ID to a GenBank Nucleotide ID
* [getGenBankNucleotideMappingUsingPOST](docs/lookup/README.md#getgenbanknucleotidemappingusingpost) - Translate RGD IDs to GenBank Nucleotide IDs
* [getGenBankProteinMappingUsingGET](docs/lookup/README.md#getgenbankproteinmappingusingget) - Translate an RGD ID to a GenBank Protein ID
* [getGenBankProteinMappingUsingPOST](docs/lookup/README.md#getgenbankproteinmappingusingpost) - Translate RGD IDs to GenBank Protein IDs
* [getGeneTypesUsingGET](docs/lookup/README.md#getgenetypesusingget) - Returns a list of gene types avialable in RGD
* [getHGNCMappingUsingGET](docs/lookup/README.md#gethgncmappingusingget) - Translate an RGD ID to an HGNC ID
* [getHGNCMappingUsingPOST](docs/lookup/README.md#gethgncmappingusingpost) - Translate RGD IDs to HGNC IDs
* [getMGIMappingUsingGET](docs/lookup/README.md#getmgimappingusingget) - Translate an RGD ID to an MGI ID
* [getMGIMappingUsingPOST](docs/lookup/README.md#getmgimappingusingpost) - Translate RGD IDs to MGI IDs
* [getMapsUsingGET](docs/lookup/README.md#getmapsusingget) - Return a list assembly maps for a species
* [getMapsUsingGET1](docs/lookup/README.md#getmapsusingget1) - Return a standardUnit for an ontology if it exists
* [getNCBIGeneMappingUsingGET](docs/lookup/README.md#getncbigenemappingusingget) - Translate an RGD ID to an NCBI Gene ID
* [getNCBIGeneMappingUsingPOST](docs/lookup/README.md#getncbigenemappingusingpost) - Translate RGD IDs to NCBI Gene IDs
* [getSpeciesTypesUsingGET](docs/lookup/README.md#getspeciestypesusingget) - Return a Map of species type keys available in RGD
* [getUniProtMappingUsingGET](docs/lookup/README.md#getuniprotmappingusingget) - Translate an RGD ID to a UniProt ID
* [getUniProtMappingUsingPOST](docs/lookup/README.md#getuniprotmappingusingpost) - Translate RGD IDs to UniProt IDs

### [map](docs/map/README.md)

* [getChromosomeByAssemblyUsingGET](docs/map/README.md#getchromosomebyassemblyusingget) - Return a list of chromosomes
* [getChromosomesByAssemblyUsingGET](docs/map/README.md#getchromosomesbyassemblyusingget) - Return a list of chromosomes
* [getMapsBySpeciesUsingGET](docs/map/README.md#getmapsbyspeciesusingget) - Return a list of assemblies

### [ontology](docs/ontology/README.md)

* [getOntDagsUsingGET](docs/ontology/README.md#getontdagsusingget) - Returns child and parent terms for Accession ID
* [getTermUsingGET](docs/ontology/README.md#gettermusingget) - Returns term for Accession ID
* [isDescendantOfUsingGET](docs/ontology/README.md#isdescendantofusingget) - Returns true or false for terms

### [pathway](docs/pathway/README.md)

* [getPathwaysWithDiagramsForCategoryUsingGET](docs/pathway/README.md#getpathwayswithdiagramsforcategoryusingget) - Return a list of pathways based on category provided
* [searchPathwaysUsingGET](docs/pathway/README.md#searchpathwaysusingget) - Return a list of pathways based on search term

### [qtl](docs/qtl/README.md)

* [getMappedQTLByPositionUsingGET](docs/qtl/README.md#getmappedqtlbypositionusingget) - Returns a list QTL for given position and assembly map
* [getQTLByRgdIdUsingGET](docs/qtl/README.md#getqtlbyrgdidusingget) - Return a QTL for provided RGD ID
* [getQtlListByPositionUsingGET](docs/qtl/README.md#getqtllistbypositionusingget) - Returns a list QTL for given position and assembly map

### [quantitativePhenotype](docs/quantitativephenotype/README.md)

* [getChartInfoUsingGET](docs/quantitativephenotype/README.md#getchartinfousingget) - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* [getChartInfoUsingGET1](docs/quantitativephenotype/README.md#getchartinfousingget1) - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)

### [ratStrain](docs/ratstrain/README.md)

* [getAllStrainsUsingGET](docs/ratstrain/README.md#getallstrainsusingget) - Return all active strains in RGD
* [getStrainByRgdIdUsingGET](docs/ratstrain/README.md#getstrainbyrgdidusingget) - Return a strain by RGD ID
* [getStrainsByPositionUsingGET](docs/ratstrain/README.md#getstrainsbypositionusingget) - Return all active strains by position

### [sslp](docs/sslp/README.md)

* [getMappedSSLPByPositionUsingGET](docs/sslp/README.md#getmappedsslpbypositionusingget) - Returns a list SSLP for given position and assembly map

### [statistics](docs/statistics/README.md)

* [getActiveObjectCountUsingGET](docs/statistics/README.md#getactiveobjectcountusingget) - Count of active objects by type, for specified species and date
* [getActiveObjectDiffUsingGET](docs/statistics/README.md#getactiveobjectdiffusingget) - Count difference of active objects, by type, for specified species and date range
* [getGeneTypeCountUsingGET](docs/statistics/README.md#getgenetypecountusingget) - Count of gene types, for specified species and date
* [getGeneTypeDiffUsingGET](docs/statistics/README.md#getgenetypediffusingget) - Count difference of gene types, for specified species and date range
* [getObjectStatusCountUsingGET](docs/statistics/README.md#getobjectstatuscountusingget) - Count of objects with given status, for specified species and date
* [getObjectStatusDiffUsingGET](docs/statistics/README.md#getobjectstatusdiffusingget) - Count difference of objects with given status, for specified species and date range
* [getObjectsWithRefSeqCountUsingGET](docs/statistics/README.md#getobjectswithrefseqcountusingget) - Count of objects with reference sequence(s), by object type, for specified species and date
* [getObjectsWithRefSeqDiffUsingGET](docs/statistics/README.md#getobjectswithrefseqdiffusingget) - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* [getObjectsWithReferenceCountUsingGET](docs/statistics/README.md#getobjectswithreferencecountusingget) - Count of objects with reference, by object type, for specified species and date
* [getObjectsWithReferenceDiffUsingGET](docs/statistics/README.md#getobjectswithreferencediffusingget) - Count difference of objects with reference, by object type, for specified species and date range
* [getObjectsWithXDBsCountUsingGET](docs/statistics/README.md#getobjectswithxdbscountusingget) - Count of objects with external database ids, by database id, for specified species, object type and date
* [getObjectsWithXDBsDiffUsingGET](docs/statistics/README.md#getobjectswithxdbsdiffusingget) - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* [getProteinInteractionCountUsingGET](docs/statistics/README.md#getproteininteractioncountusingget) - Count of protein interactions, for specified species and date
* [getProteinInteractionDiffUsingGET](docs/statistics/README.md#getproteininteractiondiffusingget) - Count difference of protein interactions, for specified species and date range
* [getQtlInheritanceTypeCountUsingGET](docs/statistics/README.md#getqtlinheritancetypecountusingget) - Count of strains, by qtl inheritance type, for specified species and date
* [getQtlInheritanceTypeDiffUsingGET](docs/statistics/README.md#getqtlinheritancetypediffusingget) - Count difference of strains, by qtl inheritance type, for specified species and date range
* [getRetiredObjectCountUsingGET](docs/statistics/README.md#getretiredobjectcountusingget) - Count of retired objects by type, for specified species and date
* [getRetiredObjectDiffUsingGET](docs/statistics/README.md#getretiredobjectdiffusingget) - Count difference of retired objects, by type, for specified species and date range
* [getStrainTypeCountUsingGET](docs/statistics/README.md#getstraintypecountusingget) - Count of strain types, for specified species and date
* [getStrainTypeDiffUsingGET](docs/statistics/README.md#getstraintypediffusingget) - Count difference of strain types, for specified species and date range
* [getTermStatsUsingGET](docs/statistics/README.md#gettermstatsusingget) - getTermStats
* [getWithdrawnObjectCountUsingGET](docs/statistics/README.md#getwithdrawnobjectcountusingget) - Count of withdrawn objects by type, for specified species and date
* [getWithdrawnObjectDiffUsingGET](docs/statistics/README.md#getwithdrawnobjectdiffusingget) - Count difference of withdrawn objects, by type, for specified species and date range
* [getXdbsCountUsingGET](docs/statistics/README.md#getxdbscountusingget) - Count of external database ids, for specied species and date
* [getXdbsDiffUsingGET](docs/statistics/README.md#getxdbsdiffusingget) - Count difference of external database ids, for specified species and date range

### [enrichmentWebService](docs/enrichmentwebservice/README.md)

* [getEnrichmentDataUsingPOST](docs/enrichmentwebservice/README.md#getenrichmentdatausingpost) - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* [getEnrichmentDataUsingPOST1](docs/enrichmentwebservice/README.md#getenrichmentdatausingpost1) - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
