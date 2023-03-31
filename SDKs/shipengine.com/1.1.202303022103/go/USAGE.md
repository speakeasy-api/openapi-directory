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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.ParseAddressRequestBody{
        Address: &shared.PartialAddress{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: "Unit 408",
            AddressLine3: "Building #7",
            AddressResidentialIndicator: "no",
            CityLocality: "Winnipeg",
            CompanyName: "The Home Depot",
            CountryCode: "CA",
            Email: "example@example.com",
            Name: "John Doe",
            Phone: "+1 204-253-9411 ext. 123",
            PostalCode: "78756-3717",
            StateProvince: "Manitoba",
        },
        Text: "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.",
    }

    ctx := context.Background()
    res, err := s.Addresses.ParseAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ParseAddressResponseBody != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->