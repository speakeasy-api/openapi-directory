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

    req := operations.CreateCustomerProfileRequest{
        Security: operations.CreateCustomerProfileSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCustomerProfileCreateCustomerProfileRequest{
            Email: "Larry_Rau85@yahoo.com",
            FriendlyName: "perspiciatis",
            PolicySid: "nulla",
            StatusCallback: "http://linda.name",
        },
    }

    ctx := context.Background()
    res, err := s.CreateCustomerProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TrusthubV1CustomerProfile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->