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
        PhoneNumber: "corrupti",
    }

    ctx := context.Background()
    res, err := s.FetchPhoneNumber(ctx, req, operations.FetchPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2PhoneNumber != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->