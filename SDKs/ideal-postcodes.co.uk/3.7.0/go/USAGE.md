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
    s := sdk.New()

    req := operations.AddressAutocompleteRequest{
        QueryParams: operations.AddressAutocompleteQueryParams{
            APIKey: "ak_test",
            BiasCountry: "unde",
            BiasIP: "true",
            BiasLonlat: "-2.095,57.15,100",
            BiasPostTown: "deserunt",
            BiasPostcode: "/addresses?postcode=SW1A2AA&q=10",
            BiasPostcodeArea: "The postcode area of SW1A 2AA and N1 6RT are SW and N respectively",
            BiasPostcodeOutward: "porro",
            BiasPostcodeSector: "SW1A 2AA is SW1A 2",
            BiasThoroughfare: "nulla",
            Box: "2.095,57.15,-2.096,57.14",
            Context: "id",
            Country: "England",
            Limit: 5,
            PostTown: "London",
            Postcode: "SW1A 2AA",
            PostcodeArea: "SW",
            PostcodeOutward: "1AA",
            PostcodeSector: "SW1A 2",
            PostcodeType: "L",
            Query: "vero",
            SuOrganisationIndicator: "Y",
            Uprn: 100023336956,
        },
    }

    ctx := context.Background()
    res, err := s.AddressSearch.AddressAutocomplete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutocompleteResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->