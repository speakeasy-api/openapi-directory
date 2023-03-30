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
            AddOns: []string{
                "porro",
                "nulla",
                "id",
            },
            AddOnsData: map[string]interface{}{
                "perspiciatis": "nulla",
                "nihil": "fuga",
                "facilis": "eum",
                "iusto": "ullam",
            },
            CountryCode: "saepe",
            Type: []string{
                "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.FetchPhoneNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV1PhoneNumber != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->