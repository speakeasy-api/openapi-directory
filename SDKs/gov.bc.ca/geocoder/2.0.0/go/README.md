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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Intersections.GetAddressesOutputFormat(ctx, operations.GetAddressesOutputFormatRequest{
        AddressString: sdk.String("corrupti"),
        AutoComplete: sdk.Bool(false),
        Bbox: sdk.String("provident"),
        Brief: sdk.Bool(false),
        Centre: sdk.String("distinctio"),
        CivicNumber: sdk.String("quibusdam"),
        CivicNumberSuffix: sdk.String("unde"),
        Echo: sdk.Bool(false),
        Extrapolate: sdk.Bool(false),
        Interpolation: operations.GetAddressesOutputFormatInterpolationEnumNone.ToPointer(),
        Localities: sdk.String("corrupti"),
        LocalityName: sdk.String("illum"),
        LocationDescriptor: operations.GetAddressesOutputFormatLocationDescriptorEnumFrontDoorPoint.ToPointer(),
        MatchPrecision: sdk.String("error"),
        MatchPrecisionNot: sdk.String("deserunt"),
        MaxDistance: sdk.Float64(3843.82),
        MaxResults: sdk.Int64(437587),
        MinScore: sdk.Int64(297534),
        NotLocalities: sdk.String("debitis"),
        OutputFormat: operations.GetAddressesOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEleven.ToPointer(),
        ParcelPoint: sdk.String("tempora"),
        ProvinceCode: sdk.String("suscipit"),
        SetBack: sdk.Int64(477665),
        SiteName: sdk.String("minus"),
        StreetDirection: operations.GetAddressesOutputFormatStreetDirectionEnumSe.ToPointer(),
        StreetName: sdk.String("voluptatum"),
        StreetQualifier: sdk.String("iusto"),
        StreetType: sdk.String("excepturi"),
        UnitDesignator: operations.GetAddressesOutputFormatUnitDesignatorEnumPad.ToPointer(),
        UnitNumber: sdk.String("recusandae"),
        UnitNumberSuffix: sdk.String("temporibus"),
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


### [Intersections](docs/intersections/README.md)

* [GetAddressesOutputFormat](docs/intersections/README.md#getaddressesoutputformat) - Geocode an address
* [GetIntersectionsNearOutputFormat](docs/intersections/README.md#getintersectionsnearoutputformat) - Find intersections near to a geographic point
* [GetIntersectionsNearestOutputFormat](docs/intersections/README.md#getintersectionsnearestoutputformat) - Find nearest intersection to a geographic point
* [GetIntersectionsWithinOutputFormat](docs/intersections/README.md#getintersectionswithinoutputformat) - Find intersections in a geographic area
* [GetIntersectionsIntersectionIDOutputFormat](docs/intersections/README.md#getintersectionsintersectionidoutputformat) - Get an intersection by its unique ID

### [Occupants](docs/occupants/README.md)

* [GetOccupantsAddressesOutputFormat](docs/occupants/README.md#getoccupantsaddressesoutputformat) - Geocode an address and identify site occupants
* [GetOccupantsNearOutputFormat](docs/occupants/README.md#getoccupantsnearoutputformat) - Find occupants of sites near to a geographic point
* [GetOccupantsNearestOutputFormat](docs/occupants/README.md#getoccupantsnearestoutputformat) - Find occupants of the site nearest to a geographic point
* [GetOccupantsWithinOutputFormat](docs/occupants/README.md#getoccupantswithinoutputformat) - Find occupants of sites in a geographic area
* [GetOccupantsOccupantIDOutputFormat](docs/occupants/README.md#getoccupantsoccupantidoutputformat) - Get an occupant (of a site) by its unique ID

### [Parcels](docs/parcels/README.md)

* [GetParcelsPidsSiteIDOutputFormat](docs/parcels/README.md#getparcelspidssiteidoutputformat) - Get a comma-separated string of all pids for a given site

### [Sites](docs/sites/README.md)

* [GetAddressesOutputFormat](docs/sites/README.md#getaddressesoutputformat) - Geocode an address
* [GetSitesNearOutputFormat](docs/sites/README.md#getsitesnearoutputformat) - Find sites near to a geographic point
* [GetSitesNearestOutputFormat](docs/sites/README.md#getsitesnearestoutputformat) - Find the site nearest to a geographic point
* [GetSitesWithinOutputFormat](docs/sites/README.md#getsiteswithinoutputformat) - Find sites in a geographic area
* [GetSitesSiteIDOutputFormat](docs/sites/README.md#getsitessiteidoutputformat) - Get a site by its unique ID
* [GetSitesSiteIDSubsitesOutputFormat](docs/sites/README.md#getsitessiteidsubsitesoutputformat) - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
