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
    
    req := operations.CreateBindingRequest{
        Security: operations.CreateBindingSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateBindingPathParams{
            ServiceSid: "sit",
        },
        Request: &operations.CreateBindingCreateBindingRequest{
            Address: "voluptas",
            BindingType: "gcm",
            CredentialSid: "expedita",
            Endpoint: "consequuntur",
            Identity: "dolor",
            NotificationProtocolVersion: "expedita",
            Tag: []string{
                "fugit",
                "et",
                "nihil",
            },
        },
    }
    
    res, err := s.CreateBinding(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->