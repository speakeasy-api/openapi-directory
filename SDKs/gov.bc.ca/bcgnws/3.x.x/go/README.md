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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetFeaturesFeatureIDRequest{
        FeatureID: 548814,
    }

    ctx := context.Background()
    res, err := s.Feature.GetFeaturesFeatureID(ctx, req)
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


### Feature

* `GetFeaturesFeatureID` - Get a feature by its featureId

### FeatureTaxonomy

* `GetFeatureCategories` - Get all feature categories
* `GetFeatureClasses` - Get all feature classes
* `GetFeatureTypes` - Get all feature types

### Name

* `GetNamesChanges` - Search for names with metadata changes in a given period
* `GetNamesDecisionsRecent` - Search for names affected by recent naming decision
* `GetNamesDecisionsYear` - Search for names affected by naming decisions in a given year
* `GetNamesInside` - Search in a geographic area
* `GetNamesNear` - Search near to a geographic point
* `GetNamesNotOfficialSearch` - Search by name, limit to unofficial names only
* `GetNamesOfficialSearch` - Search by name, limit to official names only
* `GetNamesSearch` - Search by name
* `GetNamesNameIDOutputFormat` - Get a name by its nameId

### NameAuthority

* `GetNameAuthorities` - Get all name authorities

### Search

* `GetNamesChanges` - Search for names with metadata changes in a given period
* `GetNamesDecisionsRecent` - Search for names affected by recent naming decision
* `GetNamesDecisionsYear` - Search for names affected by naming decisions in a given year
* `GetNamesInside` - Search in a geographic area
* `GetNamesNear` - Search near to a geographic point
* `GetNamesNotOfficialSearch` - Search by name, limit to unofficial names only
* `GetNamesOfficialSearch` - Search by name, limit to official names only
* `GetNamesSearch` - Search by name
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
