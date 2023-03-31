# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/gov.bc.ca/geocoder/2.0.0/go
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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetAddressesOutputFormatRequest{
        AddressString: "corrupti",
        AutoComplete: false,
        Bbox: "provident",
        Brief: false,
        Centre: "distinctio",
        CivicNumber: "quibusdam",
        CivicNumberSuffix: "unde",
        Echo: false,
        Extrapolate: false,
        Interpolation: "none",
        Localities: "corrupti",
        LocalityName: "illum",
        LocationDescriptor: "frontDoorPoint",
        MatchPrecision: "error",
        MatchPrecisionNot: "deserunt",
        MaxDistance: 3843.82,
        MaxResults: 437587,
        MinScore: 297534,
        NotLocalities: "debitis",
        OutputFormat: "json",
        OutputSRS: "26911",
        ParcelPoint: "tempora",
        ProvinceCode: "suscipit",
        SetBack: 477665,
        SiteName: "minus",
        StreetDirection: "SE",
        StreetName: "voluptatum",
        StreetQualifier: "iusto",
        StreetType: "excepturi",
        UnitDesignator: "PAD",
        UnitNumber: "recusandae",
        UnitNumberSuffix: "temporibus",
    }

    ctx := context.Background()
    res, err := s.Intersections.GetAddressesOutputFormat(ctx, req)
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


### Intersections

* `GetAddressesOutputFormat` - Geocode an address
* `GetIntersectionsNearOutputFormat` - Find intersections near to a geographic point
* `GetIntersectionsNearestOutputFormat` - Find nearest intersection to a geographic point
* `GetIntersectionsWithinOutputFormat` - Find intersections in a geographic area
* `GetIntersectionsIntersectionIDOutputFormat` - Get an intersection by its unique ID

### Occupants

* `GetOccupantsAddressesOutputFormat` - Geocode an address and identify site occupants
* `GetOccupantsNearOutputFormat` - Find occupants of sites near to a geographic point
* `GetOccupantsNearestOutputFormat` - Find occupants of the site nearest to a geographic point
* `GetOccupantsWithinOutputFormat` - Find occupants of sites in a geographic area
* `GetOccupantsOccupantIDOutputFormat` - Get an occupant (of a site) by its unique ID

### Parcels

* `GetParcelsPidsSiteIDOutputFormat` - Get a comma-separated string of all pids for a given site

### Sites

* `GetAddressesOutputFormat` - Geocode an address
* `GetSitesNearOutputFormat` - Find sites near to a geographic point
* `GetSitesNearestOutputFormat` - Find the site nearest to a geographic point
* `GetSitesWithinOutputFormat` - Find sites in a geographic area
* `GetSitesSiteIDOutputFormat` - Get a site by its unique ID
* `GetSitesSiteIDSubsitesOutputFormat` - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
