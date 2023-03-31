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
        AddOns: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        AddOnsData: map[string]interface{}{
            "nulla": "corrupti",
            "illum": "vel",
            "error": "deserunt",
        },
        CountryCode: "suscipit",
        PhoneNumber: "iure",
        Type: []string{
            "debitis",
            "ipsa",
        },
    }

    ctx := context.Background()
    res, err := s.FetchPhoneNumber(ctx, req, operations.FetchPhoneNumberSecurity{
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
<!-- End SDK Example Usage -->