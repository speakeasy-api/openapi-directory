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

    req := operations.FetchPhoneNumberRequest{
        Security: operations.FetchPhoneNumberSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchPhoneNumberPathParams{
            PhoneNumber: "unde",
        },
        QueryParams: operations.FetchPhoneNumberQueryParams{
            AddressCountryCode: "deserunt",
            AddressLine1: "porro",
            AddressLine2: "nulla",
            City: "Stiedemannmouth",
            CountryCode: "nulla",
            DateOfBirth: "nihil",
            Fields: "fuga",
            FirstName: "Luna",
            LastName: "Hoppe",
            NationalID: "iusto",
            PostalCode: "80923",
            State: "voluptatum",
        },
    }

    ctx := context.Background()
    res, err := s.FetchPhoneNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV2PhoneNumber != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->