# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/bcgnws/3.x.x/go
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
    res, err := s.Feature.GetFeaturesFeatureID(ctx, operations.GetFeaturesFeatureIDRequest{
        FeatureID: 548814,
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


### [Feature](docs/feature/README.md)

* [GetFeaturesFeatureID](docs/feature/README.md#getfeaturesfeatureid) - Get a feature by its featureId

### [FeatureTaxonomy](docs/featuretaxonomy/README.md)

* [GetFeatureCategories](docs/featuretaxonomy/README.md#getfeaturecategories) - Get all feature categories
* [GetFeatureClasses](docs/featuretaxonomy/README.md#getfeatureclasses) - Get all feature classes
* [GetFeatureTypes](docs/featuretaxonomy/README.md#getfeaturetypes) - Get all feature types

### [Name](docs/name/README.md)

* [GetNamesChanges](docs/name/README.md#getnameschanges) - Search for names with metadata changes in a given period
* [GetNamesDecisionsRecent](docs/name/README.md#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [GetNamesDecisionsYear](docs/name/README.md#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [GetNamesInside](docs/name/README.md#getnamesinside) - Search in a geographic area
* [GetNamesNear](docs/name/README.md#getnamesnear) - Search near to a geographic point
* [GetNamesNotOfficialSearch](docs/name/README.md#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [GetNamesOfficialSearch](docs/name/README.md#getnamesofficialsearch) - Search by name, limit to official names only
* [GetNamesSearch](docs/name/README.md#getnamessearch) - Search by name
* [GetNamesNameIDOutputFormat](docs/name/README.md#getnamesnameidoutputformat) - Get a name by its nameId

### [NameAuthority](docs/nameauthority/README.md)

* [GetNameAuthorities](docs/nameauthority/README.md#getnameauthorities) - Get all name authorities

### [Search](docs/search/README.md)

* [GetNamesChanges](docs/search/README.md#getnameschanges) - Search for names with metadata changes in a given period
* [GetNamesDecisionsRecent](docs/search/README.md#getnamesdecisionsrecent) - Search for names affected by recent naming decision
* [GetNamesDecisionsYear](docs/search/README.md#getnamesdecisionsyear) - Search for names affected by naming decisions in a given year
* [GetNamesInside](docs/search/README.md#getnamesinside) - Search in a geographic area
* [GetNamesNear](docs/search/README.md#getnamesnear) - Search near to a geographic point
* [GetNamesNotOfficialSearch](docs/search/README.md#getnamesnotofficialsearch) - Search by name, limit to unofficial names only
* [GetNamesOfficialSearch](docs/search/README.md#getnamesofficialsearch) - Search by name, limit to official names only
* [GetNamesSearch](docs/search/README.md#getnamessearch) - Search by name
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
