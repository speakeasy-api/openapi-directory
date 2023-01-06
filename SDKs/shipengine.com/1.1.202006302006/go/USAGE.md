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
                AddressLine1: "omnis",
                AddressLine2: "ut",
                AddressLine3: "non",
                AddressResidentialIndicator: map[string]interface{}{
                    "repellendus": "praesentium",
                },
                CityLocality: "placeat",
                CompanyName: "sunt",
                CountryCode: "molestiae",
                Name: "velit",
                Phone: "maiores",
                PostalCode: "eos",
                StateProvince: "voluptatum",
            },
            Text: "expedita",
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