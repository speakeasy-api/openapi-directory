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
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetAddressesOutputFormatRequest{
        PathParams: operations.GetAddressesOutputFormatPathParams{
            OutputFormat: "kml",
        },
        QueryParams: operations.GetAddressesOutputFormatQueryParams{
            AddressString: "deserunt",
            AutoComplete: false,
            Bbox: "porro",
            Brief: false,
            Centre: "nulla",
            CivicNumber: "id",
            CivicNumberSuffix: "vero",
            Echo: false,
            Extrapolate: false,
            Interpolation: "linear",
            Localities: "nulla",
            LocalityName: "nihil",
            LocationDescriptor: "parcelPoint",
            MatchPrecision: "facilis",
            MatchPrecisionNot: "eum",
            MaxDistance: 4375.87,
            MaxResults: 297534,
            MinScore: 891773,
            NotLocalities: "inventore",
            OutputSRS: "26911",
            ParcelPoint: "enim",
            ProvinceCode: "eum",
            SetBack: 477665,
            SiteName: "autem",
            StreetDirection: "SE",
            StreetName: "non",
            StreetQualifier: "deleniti",
            StreetType: "similique",
            UnitDesignator: "PAD",
            UnitNumber: "molestiae",
            UnitNumberSuffix: "quo",
        },
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