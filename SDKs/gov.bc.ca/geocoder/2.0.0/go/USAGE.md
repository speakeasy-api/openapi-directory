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