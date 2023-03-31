# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/va.gov/facilities/0.0.1/go
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

    req := operations.GetAllFacilitiesRequest{
        Accept: "application/vnd.geo+json",
    }

    ctx := context.Background()
    res, err := s.Facilities.GetAllFacilities(ctx, req, operations.GetAllFacilitiesSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GeoFacilitiesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Facilities

* `GetAllFacilities` - Bulk download information for all facilities
* `GetFacilitiesByLocation` - Query facilities by location or IDs, with optional filters
* `GetFacilityByID` - Retrieve a specific facility by ID
* `GetFacilityIds` - Bulk download of all facility IDs
* `GetNearbyFacilities` - Retrieve all VA health facilities reachable by driving within the specified time period
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
