<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAddressesOutputFormatRequest{
        PathParams: operations.GetAddressesOutputFormatPathParams{
            OutputFormat: "geojson",
        },
        QueryParams: operations.GetAddressesOutputFormatQueryParams{
            AddressString: "quasi",
            AutoComplete: false,
            Bbox: "provident",
            Brief: false,
            Centre: "dolores",
            CivicNumber: "ea",
            CivicNumberSuffix: "assumenda",
            Echo: false,
            Extrapolate: false,
            Interpolation: "none",
            Localities: "voluptatum",
            LocalityName: "tempora",
            LocationDescriptor: "parcelPoint",
            MatchPrecision: "recusandae",
            MatchPrecisionNot: "et",
            MaxDistance: 59.099998,
            MaxResults: 218132384973761410,
            MinScore: 4262733293789900026,
            NotLocalities: "deserunt",
            OutputSRS: 8760308817684507304,
            ParcelPoint: "omnis",
            ProvinceCode: "voluptas",
            SetBack: 1291634106762229870,
            SiteName: "doloribus",
            StreetDirection: "NW",
            StreetName: "omnis",
            StreetQualifier: "cumque",
            StreetType: "cupiditate",
            UnitDesignator: "APT",
            UnitNumber: "nihil",
            UnitNumberSuffix: "eum",
        },
    }
    
    res, err := s.Intersections.GetAddressesOutputFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->