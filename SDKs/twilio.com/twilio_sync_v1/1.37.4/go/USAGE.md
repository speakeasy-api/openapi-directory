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
            ServiceSid: "ratione",
        },
        Request: &operations.CreateDocumentCreateDocumentRequest{
            Data: "officia",
            TTL: 1252102352868461268,
            UniqueName: "quibusdam",
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