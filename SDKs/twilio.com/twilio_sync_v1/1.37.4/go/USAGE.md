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
    
    req := operations.CreateDocumentRequest{
        Security: operations.CreateDocumentSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateDocumentPathParams{
            ServiceSid: "sit",
        },
        Request: &operations.CreateDocumentCreateDocumentRequest{
            Data: "voluptas",
            TTL: 6050128673802995827,
            UniqueName: "expedita",
        },
    }
    
    res, err := s.CreateDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->