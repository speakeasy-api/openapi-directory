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
        RequestBody: &operations.CreateBindingCreateBindingRequest{
            Address: "5786 Little Streets",
            BindingType: "sms",
            CredentialSid: "error",
            Endpoint: "deserunt",
            Identity: "suscipit",
            NotificationProtocolVersion: "iure",
            Tag: []string{
                "debitis",
                "ipsa",
            },
        },
        ServiceSid: "delectus",
    }

    ctx := context.Background()
    res, err := s.CreateBinding(ctx, req, operations.CreateBindingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->