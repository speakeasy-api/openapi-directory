# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/opentargets.io/19.02.1/go
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
    res, err := s.Filter.GetAssociationFilter(ctx, operations.GetAssociationFilterRequest{
        Datasource: sdk.String("corrupti"),
        Datastructure: sdk.String("provident"),
        Datatype: sdk.String("distinctio"),
        Direct: sdk.Bool(false),
        Disease: sdk.String("quibusdam"),
        Facets: sdk.Bool(false),
        Fields: sdk.String("unde"),
        Format: sdk.String("nulla"),
        From: sdk.Float64(5448.83),
        Pathway: sdk.String("illum"),
        ScorevalueMax: sdk.Float32(4236.55),
        ScorevalueMin: sdk.Float32(6235.64),
        ScorevalueTypes: sdk.String("deserunt"),
        Search: sdk.String("suscipit"),
        Size: sdk.Float64(4375.87),
        Sort: sdk.String("magnam"),
        Target: sdk.String("debitis"),
        TargetClass: sdk.String("ipsa"),
        TherapeuticArea: sdk.String("delectus"),
        Uniprotkw: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Filter](docs/filter/README.md)

* [GetAssociationFilter](docs/filter/README.md#getassociationfilter) - Filter available associations
* [GetEvidenceFilter](docs/filter/README.md#getevidencefilter) - Filter available evidence
* [PostAssociationFilter](docs/filter/README.md#postassociationfilter) - Batch query available associations
* [PostEvidenceFilter](docs/filter/README.md#postevidencefilter) - Batch filter available evidence

### [Private](docs/private/README.md)

* [GetAPIDocs](docs/private/README.md#getapidocs) - Browse API documentation
* [GetAPISwaggerUI](docs/private/README.md#getapiswaggerui) - Browse interactive API documentation
* [GetAutocomplete](docs/private/README.md#getautocomplete) - Get `autocomplete` objects.
* [GetDiseaseByID](docs/private/README.md#getdiseasebyid) - Find information about a disease
* [GetDrugByID](docs/private/README.md#getdrugbyid) - Get drug by ID
* [GetECObyID](docs/private/README.md#getecobyid) - Get evidence code by ID
* [GetQuickSearch](docs/private/README.md#getquicksearch) - Search most relevant results
* [GetRelationByEFOID](docs/private/README.md#getrelationbyefoid) - Find related entities by disease
* [GetRelationByENSGID](docs/private/README.md#getrelationbyensgid) - Find related entities by target
* [GetSwagger](docs/private/README.md#getswagger) - Get OpenAPI schema
* [GetTargetByENSGID](docs/private/README.md#gettargetbyensgid) - Find information about a target
* [GetTargetExpressionByENSGID](docs/private/README.md#gettargetexpressionbyensgid) - Query expression levels
* [PostBestHitSearch](docs/private/README.md#postbesthitsearch) - Find the best hit
* [PostDiseaseByID](docs/private/README.md#postdiseasebyid) - Find information about a list of diseases
* [PostEnrichmentTarget](docs/private/README.md#postenrichmenttarget) - Enrichment analysis
* [PostRelation](docs/private/README.md#postrelation) - Find related entities
* [PostTargetByENSGID](docs/private/README.md#posttargetbyensgid) - Find information about a list of targets
* [PostTargetExpressionByENSGID](docs/private/README.md#posttargetexpressionbyensgid) - Batch query expression levels

### [Public](docs/public/README.md)

* [GetAssociationByID](docs/public/README.md#getassociationbyid) - Get association by id
* [GetAssociationFilter](docs/public/README.md#getassociationfilter) - Filter available associations
* [GetDataMetrics](docs/public/README.md#getdatametrics) - Get metrics about the current data release
* [GetDataStats](docs/public/README.md#getdatastats) - Get statistics about the current data release
* [GetEvidenceByID](docs/public/README.md#getevidencebyid) - Get evidence by ID
* [GetEvidenceFilter](docs/public/README.md#getevidencefilter) - Filter available evidence
* [GetPing](docs/public/README.md#getping) - Ping service
* [GetSearch](docs/public/README.md#getsearch) - Search for a disease or a target
* [GetTherapeuticAreas](docs/public/README.md#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [GetVersion](docs/public/README.md#getversion) - Get API version
* [PostAssociationFilter](docs/public/README.md#postassociationfilter) - Batch query available associations
* [PostEvidenceByID](docs/public/README.md#postevidencebyid) - Get evidence for a list of IDs
* [PostEvidenceFilter](docs/public/README.md#postevidencefilter) - Batch filter available evidence

### [Retrieve](docs/retrieve/README.md)

* [GetAssociationByID](docs/retrieve/README.md#getassociationbyid) - Get association by id
* [GetEvidenceByID](docs/retrieve/README.md#getevidencebyid) - Get evidence by ID
* [PostEvidenceByID](docs/retrieve/README.md#postevidencebyid) - Get evidence for a list of IDs

### [Search](docs/search/README.md)

* [GetSearch](docs/search/README.md#getsearch) - Search for a disease or a target

### [Utils](docs/utils/README.md)

* [GetDataMetrics](docs/utils/README.md#getdatametrics) - Get metrics about the current data release
* [GetDataStats](docs/utils/README.md#getdatastats) - Get statistics about the current data release
* [GetPing](docs/utils/README.md#getping) - Ping service
* [GetTherapeuticAreas](docs/utils/README.md#gettherapeuticareas) - Get the list of therapeutic areas about the current data release
* [GetVersion](docs/utils/README.md#getversion) - Get API version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
