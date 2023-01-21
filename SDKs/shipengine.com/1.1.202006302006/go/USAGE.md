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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ParseAddressRequest{
        Request: shared.ParseAddressRequestBody{
            Address: &shared.PartialAddress{
                AddressLine1: "sit",
                AddressLine2: "voluptas",
                AddressLine3: "culpa",
                AddressResidentialIndicator: map[string]interface{}{
                    "consequuntur": "dolor",
                    "expedita": "voluptas",
                },
                CityLocality: "fugit",
                CompanyName: "et",
                CountryCode: "nihil",
                Name: "rerum",
                Phone: "dicta",
                PostalCode: "debitis",
                StateProvince: "voluptatum",
            },
            Text: "et",
        },
    }
    
    res, err := s.Addresses.ParseAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ParseAddressResponseBody != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->