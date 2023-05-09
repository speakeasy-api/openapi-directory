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
        AddOns: []string{
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
        },
        AddOnsData: map[string]interface{}{
            "voluptatum": "iusto",
            "excepturi": "nisi",
            "recusandae": "temporibus",
            "ab": "quis",
        },
        CountryCode: sdk.String("BG"),
        PhoneNumber: "deserunt",
        Type: []string{
            "ipsam",
        },
    }, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV1PhoneNumber != nil {
        // handle response
    }
}
```
