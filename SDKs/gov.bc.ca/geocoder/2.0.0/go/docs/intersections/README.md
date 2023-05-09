# Intersections

### Available Operations

* [GetAddressesOutputFormat](#getaddressesoutputformat) - Geocode an address
* [GetIntersectionsNearOutputFormat](#getintersectionsnearoutputformat) - Find intersections near to a geographic point
* [GetIntersectionsNearestOutputFormat](#getintersectionsnearestoutputformat) - Find nearest intersection to a geographic point
* [GetIntersectionsWithinOutputFormat](#getintersectionswithinoutputformat) - Find intersections in a geographic area
* [GetIntersectionsIntersectionIDOutputFormat](#getintersectionsintersectionidoutputformat) - Get an intersection by its unique ID

## GetAddressesOutputFormat

Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.

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
    res, err := s.Intersections.GetAddressesOutputFormat(ctx, operations.GetAddressesOutputFormatRequest{
        AddressString: sdk.String("ab"),
        AutoComplete: sdk.Bool(false),
        Bbox: sdk.String("quis"),
        Brief: sdk.Bool(false),
        Centre: sdk.String("veritatis"),
        CivicNumber: sdk.String("deserunt"),
        CivicNumberSuffix: sdk.String("perferendis"),
        Echo: sdk.Bool(false),
        Extrapolate: sdk.Bool(false),
        Interpolation: operations.GetAddressesOutputFormatInterpolationEnumLinear.ToPointer(),
        Localities: sdk.String("repellendus"),
        LocalityName: sdk.String("sapiente"),
        LocationDescriptor: operations.GetAddressesOutputFormatLocationDescriptorEnumRooftopPoint.ToPointer(),
        MatchPrecision: sdk.String("odit"),
        MatchPrecisionNot: sdk.String("at"),
        MaxDistance: sdk.Float64(8700.88),
        MaxResults: sdk.Int64(978619),
        MinScore: sdk.Int64(473608),
        NotLocalities: sdk.String("quod"),
        OutputFormat: operations.GetAddressesOutputFormatOutputFormatEnumCsv,
        OutputSRS: operations.GetAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndSeven.ToPointer(),
        ParcelPoint: sdk.String("totam"),
        ProvinceCode: sdk.String("porro"),
        SetBack: sdk.Int64(678880),
        SiteName: sdk.String("dicta"),
        StreetDirection: operations.GetAddressesOutputFormatStreetDirectionEnumNw.ToPointer(),
        StreetName: sdk.String("officia"),
        StreetQualifier: sdk.String("occaecati"),
        StreetType: sdk.String("fugit"),
        UnitDesignator: operations.GetAddressesOutputFormatUnitDesignatorEnumRear.ToPointer(),
        UnitNumber: sdk.String("hic"),
        UnitNumberSuffix: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIntersectionsNearOutputFormat

Represents intersections near a given point

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
    res, err := s.Intersections.GetIntersectionsNearOutputFormat(ctx, operations.GetIntersectionsNearOutputFormatRequest{
        MaxDegree: sdk.Int64(521848),
        MaxDistance: sdk.Int64(105907),
        MaxResults: sdk.Int64(414662),
        MinDegree: sdk.Int64(473600),
        OutputFormat: operations.GetIntersectionsNearOutputFormatOutputFormatEnumGeojson,
        OutputSRS: operations.GetIntersectionsNearOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine,
        Point: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIntersectionsNearestOutputFormat

Represents the closest intersection to a given point

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
    res, err := s.Intersections.GetIntersectionsNearestOutputFormat(ctx, operations.GetIntersectionsNearestOutputFormatRequest{
        MaxDegree: sdk.Int64(736918),
        MaxDistance: sdk.Int64(456150),
        MinDegree: sdk.Int64(216550),
        OutputFormat: operations.GetIntersectionsNearestOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.GetIntersectionsNearestOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        Point: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIntersectionsWithinOutputFormat

Represents all intersections within a given area

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
    res, err := s.Intersections.GetIntersectionsWithinOutputFormat(ctx, operations.GetIntersectionsWithinOutputFormatRequest{
        Bbox: "ad",
        MaxDegree: sdk.Int64(617636),
        MaxResults: sdk.Int64(149675),
        MinDegree: sdk.Int64(612096),
        OutputFormat: operations.GetIntersectionsWithinOutputFormatOutputFormatEnumGeojson,
        OutputSRS: operations.GetIntersectionsWithinOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIntersectionsIntersectionIDOutputFormat

Represents a individual intersection

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
    res, err := s.Intersections.GetIntersectionsIntersectionIDOutputFormat(ctx, operations.GetIntersectionsIntersectionIDOutputFormatRequest{
        IntersectionID: "laboriosam",
        OutputFormat: operations.GetIntersectionsIntersectionIDOutputFormatOutputFormatEnumShpz,
        OutputSRS: operations.GetIntersectionsIntersectionIDOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEleven.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
