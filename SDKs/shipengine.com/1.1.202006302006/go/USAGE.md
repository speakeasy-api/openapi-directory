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
                AddressLine1: "veritatis",
                AddressLine2: "consequatur",
                AddressLine3: "molestiae",
                AddressResidentialIndicator: map[string]interface{}{
                    "qui": "autem",
                    "quia": "enim",
                },
                CityLocality: "quis",
                CompanyName: "beatae",
                CountryCode: "eos",
                Name: "numquam",
                Phone: "voluptate",
                PostalCode: "tempora",
                StateProvince: "id",
            },
            Text: "accusamus",
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