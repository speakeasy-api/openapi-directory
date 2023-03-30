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
            PhoneNumber: "corrupti",
        },
        QueryParams: operations.FetchPhoneNumberQueryParams{
            AddressCountryCode: "provident",
            AddressLine1: "distinctio",
            AddressLine2: "quibusdam",
            City: "Stiedemannstad",
            CountryCode: "illum",
            DateOfBirth: "vel",
            Fields: "error",
            FirstName: "Luna",
            LastName: "Hoppe",
            NationalID: "iure",
            PostalCode: "80923",
            State: "molestiae",
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