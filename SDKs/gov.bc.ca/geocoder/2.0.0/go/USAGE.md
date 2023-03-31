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
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetAddressesOutputFormatRequest{
        AddressString: "corrupti",
        AutoComplete: false,
        Bbox: "provident",
        Brief: false,
        Centre: "distinctio",
        CivicNumber: "quibusdam",
        CivicNumberSuffix: "unde",
        Echo: false,
        Extrapolate: false,
        Interpolation: "none",
        Localities: "corrupti",
        LocalityName: "illum",
        LocationDescriptor: "frontDoorPoint",
        MatchPrecision: "error",
        MatchPrecisionNot: "deserunt",
        MaxDistance: 3843.82,
        MaxResults: 437587,
        MinScore: 297534,
        NotLocalities: "debitis",
        OutputFormat: "json",
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