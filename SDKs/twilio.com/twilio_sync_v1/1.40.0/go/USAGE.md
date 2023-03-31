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
        RequestBody: &operations.CreateDocumentCreateDocumentRequest{
            Data: "corrupti",
            TTL: 592845,
            UniqueName: "distinctio",
        },
        ServiceSid: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.CreateDocument(ctx, req, operations.CreateDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->