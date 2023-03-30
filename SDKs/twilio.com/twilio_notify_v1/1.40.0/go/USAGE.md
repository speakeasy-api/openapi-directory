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

    req := operations.CreateBindingRequest{
        Security: operations.CreateBindingSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateBindingPathParams{
            ServiceSid: "unde",
        },
        Request: &operations.CreateBindingCreateBindingRequest{
            Address: "7868 Henri Neck",
            BindingType: "fcm",
            CredentialSid: "facilis",
            Endpoint: "eum",
            Identity: "iusto",
            NotificationProtocolVersion: "ullam",
            Tag: []string{
                "inventore",
                "sapiente",
                "enim",
                "eum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateBinding(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->