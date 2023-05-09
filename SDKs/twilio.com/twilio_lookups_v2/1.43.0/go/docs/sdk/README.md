# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchPhoneNumber](#fetchphonenumber)

## FetchPhoneNumber

### Example Usage

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
    res, err := s.SDK.FetchPhoneNumber(ctx, operations.FetchPhoneNumberRequest{
        AddressCountryCode: sdk.String("molestiae"),
        AddressLine1: sdk.String("minus"),
        AddressLine2: sdk.String("placeat"),
        City: sdk.String("Jayceestead"),
        CountryCode: sdk.String("HR"),
        DateOfBirth: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        FirstName: sdk.String("Antonetta"),
        LastName: sdk.String("Hauck"),
        NationalID: sdk.String("veritatis"),
        PhoneNumber: "deserunt",
        PostalCode: sdk.String("38971"),
        State: sdk.String("at"),
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
