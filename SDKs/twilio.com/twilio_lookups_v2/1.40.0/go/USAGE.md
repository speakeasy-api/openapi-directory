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
        AddressCountryCode: "corrupti",
        AddressLine1: "provident",
        AddressLine2: "distinctio",
        City: "New Orleans",
        CountryCode: "nulla",
        DateOfBirth: "corrupti",
        Fields: "illum",
        FirstName: "Henry",
        LastName: "Mueller",
        NationalID: "deserunt",
        PhoneNumber: "suscipit",
        PostalCode: "28092",
        State: "suscipit",
    }

    ctx := context.Background()
    res, err := s.FetchPhoneNumber(ctx, req, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV2PhoneNumber != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->