# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mcw.edu/1.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/mcw.edu/1.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GETAffectedGenomicModelsUsingGETRequest,
  GETAffectedGenomicModelsUsingGETResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GETAffectedGenomicModelsUsingGETRequest = {
  taxonId: "corrupti",
};

sdk.agr.getAffectedGenomicModelsUsingGET(req).then((res: GETAffectedGenomicModelsUsingGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### agr

* `getAffectedGenomicModelsUsingGET` - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* `getAllelesForTaxonUsingGET` - Get gene allele records submitted by RGD to AGR by taxonId
* `getExpressionForTaxonUsingGET` - Get expression annotations submitted by RGD to AGR by taxonId
* `getGenesForLatestAssemblyUsingGET` - Get gene records submitted by RGD to AGR by taxonId
* `getPhenotypesForTaxonUsingGET` - Get phenotype annotations submitted by RGD to AGR by taxonId
* `getVariantsForTaxonUsingGET` - Get basic variant records submitted by RGD to AGR by taxonId

### annotation

* `getAnnotationCountByAccIdAndObjectTypeUsingGET` - Returns annotation count for ontology accession ID and object type
* `getAnnotationCountByAccIdAndSpeciesUsingGET` - Returns annotation count for ontology accession ID and speicies
* `getAnnotationCountByAccIdUsingGET` - Returns annotation count for ontology accession ID
* `getAnnotationsByAccIdAndRgdIdUsingGET` - Returns a list of annotations by RGD ID and ontology term accession ID
* `getAnnotationsByRgdIdAndOntologyUsingGET` - Returns a list of annotations by RGD ID and ontology prefix
* `getAnnotationsByRgdIdUsingGET` - Returns a list of annotations by RGD ID
* `getAnnotationsUsingGET` - Returns a list annotations for an ontology term or a term and it's children
* `getAnnotationsUsingPOST` - Return a list of genes annotated to an ontology term
* `getAnnotsByRefrerenceUsingGET` - Returns a list of annotations for a reference
* `getTermAccIdsUsingGET` - Returns a list ontology term accession IDs annotated to an rgd object

### chromosome

* `getChromosomeByAssemblyUsingGET` - Return a list of chromosomes
* `getChromosomesByAssemblyUsingGET` - Return a list of chromosomes

### gene

* `getAllAnnotatedGenesUsingGET` - Return a list of genes annotated to an ontology term
* `getAnnotatedGenesUsingPOST` - Return a list of genes annotated to an ontology term
* `getGeneAllelesUsingGET` - Return a list of gene alleles
* `getGeneByMapKeyUsingGET` - Return a list of all genes with position information for an assembly
* `getGeneByRgdIdUsingGET` - Get a gene record by RGD ID
* `getGeneBySymbolUsingGET` - Get a gene record by symbol and species type key
* `getGeneOrthologsUsingGET` - Return a list of gene orthologs
* `getGenesAnnotatedUsingGET` - Return a list of genes annotated to an ontology term
* `getGenesByAffyIdUsingGET` - Return a list of genes for an affymetrix ID
* `getGenesByAliasSymbolUsingGET` - Return a list of genes for an alias and species
* `getGenesByKeywordUsingGET` - Return a list of genes by keyword and species type key
* `getGenesByPositionUsingGET` - Return a list of genes position and map key
* `getGenesBySpeciesUsingGET` - Return a list of all genes for a species in RGD
* `getGenesInRegionUsingGET` - Return a list of genes in region
* `getMappedGenesByPositionUsingGET` - Return a list of genes position and map key
* `getOrthologsByListUsingPOST` - Return a list of gene orthologs

### lookup

* `getEnsemblGeneMappingUsingGET` - Translate an RGD ID to an Ensembl Gene  ID
* `getEnsemblGeneMappingUsingPOST` - Translate RGD IDs to Ensembl Gene IDs
* `getEnsemblProteinMappingUsingGET` - Translate an RGD ID to an Ensembl Protein ID
* `getEnsemblProteinMappingUsingPOST` - Translate RGD IDs to Ensembl Protein IDs
* `getEnsemblTranscriptMappingUsingGET` - Translate an RGD ID to an Ensembl Transcript ID
* `getEnsemblTranscriptMappingUsingPOST` - Translate RGD IDs to Ensembl Transcript IDs
* `getGTEXMappingUsingGET` - Translate an RGD ID to an GTEx ID
* `getGTEXMappingUsingPOST` - Translate RGD IDs to GTEx IDs
* `getGenBankNucleotideMappingUsingGET` - Translate an RGD ID to a GenBank Nucleotide ID
* `getGenBankNucleotideMappingUsingPOST` - Translate RGD IDs to GenBank Nucleotide IDs
* `getGenBankProteinMappingUsingGET` - Translate an RGD ID to a GenBank Protein ID
* `getGenBankProteinMappingUsingPOST` - Translate RGD IDs to GenBank Protein IDs
* `getGeneTypesUsingGET` - Returns a list of gene types avialable in RGD
* `getHGNCMappingUsingGET` - Translate an RGD ID to an HGNC ID
* `getHGNCMappingUsingPOST` - Translate RGD IDs to HGNC IDs
* `getMGIMappingUsingGET` - Translate an RGD ID to an MGI ID
* `getMGIMappingUsingPOST` - Translate RGD IDs to MGI IDs
* `getMapsUsingGET` - Return a list assembly maps for a species
* `getMapsUsingGET1` - Return a standardUnit for an ontology if it exists
* `getNCBIGeneMappingUsingGET` - Translate an RGD ID to an NCBI Gene ID
* `getNCBIGeneMappingUsingPOST` - Translate RGD IDs to NCBI Gene IDs
* `getSpeciesTypesUsingGET` - Return a Map of species type keys available in RGD
* `getUniProtMappingUsingGET` - Translate an RGD ID to a UniProt ID
* `getUniProtMappingUsingPOST` - Translate RGD IDs to UniProt IDs

### map

* `getChromosomeByAssemblyUsingGET` - Return a list of chromosomes
* `getChromosomesByAssemblyUsingGET` - Return a list of chromosomes
* `getMapsBySpeciesUsingGET` - Return a list of assemblies

### ontology

* `getOntDagsUsingGET` - Returns child and parent terms for Accession ID
* `getTermUsingGET` - Returns term for Accession ID
* `isDescendantOfUsingGET` - Returns true or false for terms

### pathway

* `getPathwaysWithDiagramsForCategoryUsingGET` - Return a list of pathways based on category provided
* `searchPathwaysUsingGET` - Return a list of pathways based on search term

### qtl

* `getMappedQTLByPositionUsingGET` - Returns a list QTL for given position and assembly map
* `getQTLByRgdIdUsingGET` - Return a QTL for provided RGD ID
* `getQtlListByPositionUsingGET` - Returns a list QTL for given position and assembly map

### quantitativePhenotype

* `getChartInfoUsingGET` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* `getChartInfoUsingGET1` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)

### ratStrain

* `getAllStrainsUsingGET` - Return all active strains in RGD
* `getStrainByRgdIdUsingGET` - Return a strain by RGD ID
* `getStrainsByPositionUsingGET` - Return all active strains by position

### sslp

* `getMappedSSLPByPositionUsingGET` - Returns a list SSLP for given position and assembly map

### statistics

* `getActiveObjectCountUsingGET` - Count of active objects by type, for specified species and date
* `getActiveObjectDiffUsingGET` - Count difference of active objects, by type, for specified species and date range
* `getGeneTypeCountUsingGET` - Count of gene types, for specified species and date
* `getGeneTypeDiffUsingGET` - Count difference of gene types, for specified species and date range
* `getObjectStatusCountUsingGET` - Count of objects with given status, for specified species and date
* `getObjectStatusDiffUsingGET` - Count difference of objects with given status, for specified species and date range
* `getObjectsWithRefSeqCountUsingGET` - Count of objects with reference sequence(s), by object type, for specified species and date
* `getObjectsWithRefSeqDiffUsingGET` - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* `getObjectsWithReferenceCountUsingGET` - Count of objects with reference, by object type, for specified species and date
* `getObjectsWithReferenceDiffUsingGET` - Count difference of objects with reference, by object type, for specified species and date range
* `getObjectsWithXDBsCountUsingGET` - Count of objects with external database ids, by database id, for specified species, object type and date
* `getObjectsWithXDBsDiffUsingGET` - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* `getProteinInteractionCountUsingGET` - Count of protein interactions, for specified species and date
* `getProteinInteractionDiffUsingGET` - Count difference of protein interactions, for specified species and date range
* `getQtlInheritanceTypeCountUsingGET` - Count of strains, by qtl inheritance type, for specified species and date
* `getQtlInheritanceTypeDiffUsingGET` - Count difference of strains, by qtl inheritance type, for specified species and date range
* `getRetiredObjectCountUsingGET` - Count of retired objects by type, for specified species and date
* `getRetiredObjectDiffUsingGET` - Count difference of retired objects, by type, for specified species and date range
* `getStrainTypeCountUsingGET` - Count of strain types, for specified species and date
* `getStrainTypeDiffUsingGET` - Count difference of strain types, for specified species and date range
* `getTermStatsUsingGET` - getTermStats
* `getWithdrawnObjectCountUsingGET` - Count of withdrawn objects by type, for specified species and date
* `getWithdrawnObjectDiffUsingGET` - Count difference of withdrawn objects, by type, for specified species and date range
* `getXdbsCountUsingGET` - Count of external database ids, for specied species and date
* `getXdbsDiffUsingGET` - Count difference of external database ids, for specified species and date range

### enrichmentWebService

* `getEnrichmentDataUsingPOST` - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* `getEnrichmentDataUsingPOST1` - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

