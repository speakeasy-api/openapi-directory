<!-- Start SDK Example Usage -->
```go
package main

import (
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
            PhoneNumber: "sit",
        },
        QueryParams: operations.FetchPhoneNumberQueryParams{
            AddOns: []string{
                "culpa",
            },
            AddOnsData: map[string]interface{}{
                "consequuntur": "dolor",
                "expedita": "voluptas",
            },
            CountryCode: "fugit",
            Type: []string{
                "nihil",
            },
        },
    }
    
    res, err := s.FetchPhoneNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV1PhoneNumber != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->