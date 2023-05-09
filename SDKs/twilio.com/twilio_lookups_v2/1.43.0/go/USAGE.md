<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FetchPhoneNumber(ctx, operations.FetchPhoneNumberRequest{
        AddressCountryCode: sdk.String("corrupti"),
        AddressLine1: sdk.String("provident"),
        AddressLine2: sdk.String("distinctio"),
        City: sdk.String("New Orleans"),
        CountryCode: sdk.String("TC"),
        DateOfBirth: sdk.String("corrupti"),
        Fields: sdk.String("illum"),
        FirstName: sdk.String("Henry"),
        LastName: sdk.String("Mueller"),
        NationalID: sdk.String("deserunt"),
        PhoneNumber: "suscipit",
        PostalCode: sdk.String("28092"),
        State: sdk.String("suscipit"),
    }, operations.FetchPhoneNumberSecurity{
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