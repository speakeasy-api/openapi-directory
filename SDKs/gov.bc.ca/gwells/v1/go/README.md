# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/gwells/v1/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AquiferCodesDemandListRequest{
        Limit: 548814,
        Offset: 592845,
    }

    ctx := context.Background()
    res, err := s.AquiferCodes.AquiferCodesDemandList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AquiferCodesDemandList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AquiferCodes

* `AquiferCodesDemandList` - return a list of aquifer demand codes
* `AquiferCodesMaterialsList` - return a list of aquifer material codes
* `AquiferCodesProductivityList` - return a list of aquifer productivity codes
* `AquiferCodesQualityConcernsList` - return a list of quality concern codes
* `AquiferCodesSubtypesList` - return a list of aquifer subtype codes
* `AquiferCodesVulnerabilityList` - return a list of aquifer vulnerability codes
* `AquiferCodesWaterUseList` - return a list of water use codes

### Aquifers

* `AquifersFilesList` - list files found for the aquifer identified in the uri
* `AquifersList` - return a list of aquifers
* `AquifersNamesList` - List all aquifers in a simplified format
* `AquifersRead` - return details of aquifers

### Cities

* `CitiesDrillersList` - returns a list of cities with a qualified, registered operator (driller or installer)
* `CitiesInstallersList` - returns a list of cities with a qualified, registered operator (driller or installer)

### Config

* `ConfigList` - serves general configuration

### Drillers

* `DrillersFilesList` - list files found for the aquifer identified in the uri
* `DrillersList` - Returns a list of all person records
* `DrillersNamesList` - Search for a person in the Register

### Keycloak

* `KeycloakList` - serves keycloak config

### Submissions

* `SubmissionsOptionsList` - Options required for submitting activity report forms

### Surveys

* `SurveysList` - returns a list of active surveys

### Wells

* `WellsFilesList` - list files found for the well identified in the uri
* `WellsList` - returns a list of wells
* `WellsRead` - Return well detail.
This view is open to all, and has no permissions.
* `WellsTagsList` - seach for wells by tag or owner
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
