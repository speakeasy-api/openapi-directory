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
            AddressString: "provident",
            AutoComplete: false,
            Bbox: "distinctio",
            Brief: false,
            Centre: "quibusdam",
            CivicNumber: "unde",
            CivicNumberSuffix: "nulla",
            Echo: false,
            Extrapolate: false,
            Interpolation: "linear",
            Localities: "illum",
            LocalityName: "vel",
            LocationDescriptor: "parcelPoint",
            MatchPrecision: "deserunt",
            MatchPrecisionNot: "suscipit",
            MaxDistance: 4375.87,
            MaxResults: 297534,
            MinScore: 891773,
            NotLocalities: "ipsa",
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