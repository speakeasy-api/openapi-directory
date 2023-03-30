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

    req := operations.CreateDocumentRequest{
        Security: operations.CreateDocumentSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateDocumentPathParams{
            ServiceSid: "corrupti",
        },
        Request: &operations.CreateDocumentCreateDocumentRequest{
            Data: "provident",
            TTL: 715190,
            UniqueName: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.CreateDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->