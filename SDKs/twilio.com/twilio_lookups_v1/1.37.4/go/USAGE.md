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
            PhoneNumber: "voluptas",
        },
        QueryParams: operations.FetchPhoneNumberQueryParams{
            AddOns: []string{
                "quae",
            },
            AddOnsData: map[string]interface{}{
                "dolor": "nobis",
                "sint": "maxime",
            },
            CountryCode: "neque",
            Type: []string{
                "ullam",
                "placeat",
                "architecto",
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