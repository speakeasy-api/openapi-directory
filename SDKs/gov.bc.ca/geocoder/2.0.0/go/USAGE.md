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
            OutputFormat: "gml",
        },
        QueryParams: operations.GetAddressesOutputFormatQueryParams{
            AddressString: "quia",
            AutoComplete: true,
            Bbox: "sapiente",
            Brief: false,
            Centre: "voluptatem",
            CivicNumber: "quia",
            CivicNumberSuffix: "inventore",
            Echo: false,
            Extrapolate: true,
            Interpolation: "none",
            Localities: "officia",
            LocalityName: "ut",
            LocationDescriptor: "routingPoint",
            MatchPrecision: "officiis",
            MatchPrecisionNot: "qui",
            MaxDistance: 47.200001,
            MaxResults: 5879687173104419379,
            MinScore: 3085065235994805466,
            NotLocalities: "aut",
            OutputSRS: 2188229587528031884,
            ParcelPoint: "autem",
            ProvinceCode: "suscipit",
            SetBack: 6312999475177175595,
            SiteName: "saepe",
            StreetDirection: "NO",
            StreetName: "labore",
            StreetQualifier: "possimus",
            StreetType: "qui",
            UnitDesignator: "UNIT",
            UnitNumber: "repudiandae",
            UnitNumberSuffix: "alias",
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