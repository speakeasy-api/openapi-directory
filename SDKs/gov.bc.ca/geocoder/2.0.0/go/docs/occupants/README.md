# Occupants

### Available Operations

* [GetOccupantsAddressesOutputFormat](#getoccupantsaddressesoutputformat) - Geocode an address and identify site occupants
* [GetOccupantsNearOutputFormat](#getoccupantsnearoutputformat) - Find occupants of sites near to a geographic point
* [GetOccupantsNearestOutputFormat](#getoccupantsnearestoutputformat) - Find occupants of the site nearest to a geographic point
* [GetOccupantsWithinOutputFormat](#getoccupantswithinoutputformat) - Find occupants of sites in a geographic area
* [GetOccupantsOccupantIDOutputFormat](#getoccupantsoccupantidoutputformat) - Get an occupant (of a site) by its unique ID

## GetOccupantsAddressesOutputFormat

Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.

### Example Usage

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
    res, err := s.Occupants.GetOccupantsAddressesOutputFormat(ctx, operations.GetOccupantsAddressesOutputFormatRequest{
        AddressString: sdk.String("fuga"),
        AutoComplete: sdk.Bool(false),
        Bbox: sdk.String("in"),
        Brief: sdk.Bool(false),
        Centre: sdk.String("corporis"),
        CivicNumber: sdk.String("iste"),
        CivicNumberSuffix: sdk.String("iure"),
        Echo: sdk.Bool(false),
        Extrapolate: sdk.Bool(false),
        Interpolation: operations.GetOccupantsAddressesOutputFormatInterpolationEnumNone.ToPointer(),
        Localities: sdk.String("quidem"),
        LocalityName: sdk.String("architecto"),
        LocationDescriptor: operations.GetOccupantsAddressesOutputFormatLocationDescriptorEnumAny.ToPointer(),
        MatchPrecision: sdk.String("reiciendis"),
        MatchPrecisionNot: sdk.String("est"),
        MaxDistance: sdk.Float64(6531.4),
        MaxResults: sdk.Int64(670638),
        MinScore: sdk.Int64(170909),
        NotLocalities: sdk.String("dolorem"),
        OutputFormat: operations.GetOccupantsAddressesOutputFormatOutputFormatEnumXhtml,
        OutputSRS: operations.GetOccupantsAddressesOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        ParcelPoint: sdk.String("nobis"),
        ProvinceCode: sdk.String("enim"),
        SetBack: sdk.Int64(607831),
        SiteName: sdk.String("nemo"),
        StreetDirection: operations.GetOccupantsAddressesOutputFormatStreetDirectionEnumW.ToPointer(),
        StreetName: sdk.String("excepturi"),
        StreetQualifier: sdk.String("accusantium"),
        StreetType: sdk.String("iure"),
        Tags: sdk.String("culpa"),
        UnitDesignator: operations.GetOccupantsAddressesOutputFormatUnitDesignatorEnumUppr.ToPointer(),
        UnitNumber: sdk.String("sapiente"),
        UnitNumberSuffix: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOccupantsNearOutputFormat

Represents occupants near a given point in order of closest to farthest

### Example Usage

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
    res, err := s.Occupants.GetOccupantsNearOutputFormat(ctx, operations.GetOccupantsNearOutputFormatRequest{
        Brief: sdk.Bool(false),
        LocationDescriptor: operations.GetOccupantsNearOutputFormatLocationDescriptorEnumParcelPoint.ToPointer(),
        MaxDistance: sdk.Int64(208876),
        MaxResults: sdk.Int64(635059),
        OutputFormat: operations.GetOccupantsNearOutputFormatOutputFormatEnumGeojson,
        OutputSRS: operations.GetOccupantsNearOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEleven.ToPointer(),
        Point: "mollitia",
        SetBack: sdk.Int64(581850),
        Tags: sdk.String("numquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOccupantsNearestOutputFormat

Represents the closest occupant to a given point

### Example Usage

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
    res, err := s.Occupants.GetOccupantsNearestOutputFormat(ctx, operations.GetOccupantsNearestOutputFormatRequest{
        Brief: sdk.Bool(false),
        LocationDescriptor: operations.GetOccupantsNearestOutputFormatLocationDescriptorEnumFrontDoorPoint.ToPointer(),
        MaxDistance: sdk.Int64(466311),
        OutputFormat: operations.GetOccupantsNearestOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.GetOccupantsNearestOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        Point: "error",
        SetBack: sdk.Int64(158969),
        Tags: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOccupantsWithinOutputFormat

Represents all occupants within a given area

### Example Usage

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
    res, err := s.Occupants.GetOccupantsWithinOutputFormat(ctx, operations.GetOccupantsWithinOutputFormatRequest{
        Bbox: "vitae",
        Brief: sdk.Bool(false),
        LocationDescriptor: operations.GetOccupantsWithinOutputFormatLocationDescriptorEnumRooftopPoint.ToPointer(),
        MaxResults: sdk.Int64(656330),
        OutputFormat: operations.GetOccupantsWithinOutputFormatOutputFormatEnumXhtml,
        OutputSRS: operations.GetOccupantsWithinOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        SetBack: sdk.Int64(778346),
        Tags: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOccupantsOccupantIDOutputFormat

Represents an individual occupant

### Example Usage

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
    res, err := s.Occupants.GetOccupantsOccupantIDOutputFormat(ctx, operations.GetOccupantsOccupantIDOutputFormatRequest{
        Brief: sdk.Bool(false),
        LocationDescriptor: operations.GetOccupantsOccupantIDOutputFormatLocationDescriptorEnumRoutingPoint.ToPointer(),
        OccupantID: "ipsam",
        OutputFormat: operations.GetOccupantsOccupantIDOutputFormatOutputFormatEnumGml,
        OutputSRS: operations.GetOccupantsOccupantIDOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        SetBack: sdk.Int64(13571),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
