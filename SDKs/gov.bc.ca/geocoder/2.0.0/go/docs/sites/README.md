# Sites

### Available Operations

* [GetAddressesOutputFormat](#getaddressesoutputformat) - Geocode an address
* [GetSitesNearOutputFormat](#getsitesnearoutputformat) - Find sites near to a geographic point
* [GetSitesNearestOutputFormat](#getsitesnearestoutputformat) - Find the site nearest to a geographic point
* [GetSitesWithinOutputFormat](#getsiteswithinoutputformat) - Find sites in a geographic area
* [GetSitesSiteIDOutputFormat](#getsitessiteidoutputformat) - Get a site by its unique ID
* [GetSitesSiteIDSubsitesOutputFormat](#getsitessiteidsubsitesoutputformat) - Represents all subsites of a given site

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
    res, err := s.Sites.GetAddressesOutputFormat(ctx, operations.GetAddressesOutputFormatRequest{
        AddressString: sdk.String("temporibus"),
        AutoComplete: sdk.Bool(false),
        Bbox: sdk.String("laborum"),
        Brief: sdk.Bool(false),
        Centre: sdk.String("quasi"),
        CivicNumber: sdk.String("reiciendis"),
        CivicNumberSuffix: sdk.String("voluptatibus"),
        Echo: sdk.Bool(false),
        Extrapolate: sdk.Bool(false),
        Interpolation: operations.GetAddressesOutputFormatInterpolationEnumNone.ToPointer(),
        Localities: sdk.String("nihil"),
        LocalityName: sdk.String("praesentium"),
        LocationDescriptor: operations.GetAddressesOutputFormatLocationDescriptorEnumRoutingPoint.ToPointer(),
        MatchPrecision: sdk.String("ipsa"),
        MatchPrecisionNot: sdk.String("omnis"),
        MaxDistance: sdk.Float64(4511.59),
        MaxResults: sdk.Int64(739264),
        MinScore: sdk.Int64(19987),
        NotLocalities: sdk.String("doloremque"),
        OutputFormat: operations.GetAddressesOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.GetAddressesOutputFormatOutputSrsEnumThreeThousandAndFive.ToPointer(),
        ParcelPoint: sdk.String("maiores"),
        ProvinceCode: sdk.String("dicta"),
        SetBack: sdk.Int64(359444),
        SiteName: sdk.String("dolore"),
        StreetDirection: operations.GetAddressesOutputFormatStreetDirectionEnumNe.ToPointer(),
        StreetName: sdk.String("dicta"),
        StreetQualifier: sdk.String("harum"),
        StreetType: sdk.String("enim"),
        UnitDesignator: operations.GetAddressesOutputFormatUnitDesignatorEnumUnit.ToPointer(),
        UnitNumber: sdk.String("commodi"),
        UnitNumberSuffix: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSitesNearOutputFormat

Represents sites near a given point in the order of closest to farthest

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
    res, err := s.Sites.GetSitesNearOutputFormat(ctx, operations.GetSitesNearOutputFormatRequest{
        Brief: sdk.Bool(false),
        ExcludeUnits: sdk.Bool(false),
        LocationDescriptor: operations.GetSitesNearOutputFormatLocationDescriptorEnumAny.ToPointer(),
        MaxDistance: sdk.Int64(216822),
        MaxResults: sdk.Int64(692472),
        OnlyCivic: sdk.Bool(false),
        OutputFormat: operations.GetSitesNearOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.GetSitesNearOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        Point: "pariatur",
        SetBack: sdk.Int64(265389),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSitesNearestOutputFormat

Represents the site nearest a given point

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
    res, err := s.Sites.GetSitesNearestOutputFormat(ctx, operations.GetSitesNearestOutputFormatRequest{
        Brief: sdk.Bool(false),
        ExcludeUnits: sdk.Bool(false),
        LocationDescriptor: operations.GetSitesNearestOutputFormatLocationDescriptorEnumParcelPoint.ToPointer(),
        MaxDistance: sdk.Int64(523248),
        OnlyCivic: sdk.Bool(false),
        OutputFormat: operations.GetSitesNearestOutputFormatOutputFormatEnumShpz,
        OutputSRS: operations.GetSitesNearestOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        Point: "repudiandae",
        SetBack: sdk.Int64(575947),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSitesWithinOutputFormat

Represents sites within a given area

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
    res, err := s.Sites.GetSitesWithinOutputFormat(ctx, operations.GetSitesWithinOutputFormatRequest{
        Bbox: "veritatis",
        Brief: sdk.Bool(false),
        ExcludeUnits: sdk.Bool(false),
        LocationDescriptor: operations.GetSitesWithinOutputFormatLocationDescriptorEnumRoutingPoint.ToPointer(),
        MaxResults: sdk.Int64(277718),
        OnlyCivic: sdk.Bool(false),
        OutputFormat: operations.GetSitesWithinOutputFormatOutputFormatEnumXhtml,
        OutputSRS: operations.GetSitesWithinOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        SetBack: sdk.Int64(667411),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSitesSiteIDOutputFormat

Represents an individual site

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
    res, err := s.Sites.GetSitesSiteIDOutputFormat(ctx, operations.GetSitesSiteIDOutputFormatRequest{
        Brief: sdk.Bool(false),
        LocationDescriptor: operations.GetSitesSiteIDOutputFormatLocationDescriptorEnumRoutingPoint.ToPointer(),
        OutputFormat: operations.GetSitesSiteIDOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetSitesSiteIDOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndNine.ToPointer(),
        SetBack: sdk.Int64(716327),
        SiteID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSitesSiteIDSubsitesOutputFormat

Represents all subsites of a given site

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
    res, err := s.Sites.GetSitesSiteIDSubsitesOutputFormat(ctx, operations.GetSitesSiteIDSubsitesOutputFormatRequest{
        Brief: sdk.Bool(false),
        LocationDescriptor: operations.GetSitesSiteIDSubsitesOutputFormatLocationDescriptorEnumAccessPoint.ToPointer(),
        OutputFormat: operations.GetSitesSiteIDSubsitesOutputFormatOutputFormatEnumGeojson,
        OutputSRS: operations.GetSitesSiteIDSubsitesOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        SetBack: sdk.Int64(397821),
        SiteID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
