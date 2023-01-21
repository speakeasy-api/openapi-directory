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
            OutputFormat: "csv",
        },
        QueryParams: operations.GetAddressesOutputFormatQueryParams{
            AddressString: "voluptas",
            AutoComplete: true,
            Bbox: "expedita",
            Brief: true,
            Centre: "dolor",
            CivicNumber: "expedita",
            CivicNumberSuffix: "voluptas",
            Echo: true,
            Extrapolate: false,
            Interpolation: "adaptive",
            Localities: "rerum",
            LocalityName: "dicta",
            LocationDescriptor: "any",
            MatchPrecision: "voluptatum",
            MatchPrecisionNot: "et",
            MaxDistance: 11.100000,
            MaxResults: 7259475919510918339,
            MinScore: 7373105480197164748,
            NotLocalities: "iste",
            OutputSRS: 3930927879439176946,
            ParcelPoint: "totam",
            ProvinceCode: "dolores",
            SetBack: 1929546706668609706,
            SiteName: "debitis",
            StreetDirection: "N",
            StreetName: "odio",
            StreetQualifier: "dolore",
            StreetType: "id",
            UnitDesignator: "TH",
            UnitNumber: "accusantium",
            UnitNumberSuffix: "totam",
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