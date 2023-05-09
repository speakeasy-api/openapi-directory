<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateDocument(ctx, operations.CreateDocumentRequest{
        RequestBody: &operations.CreateDocumentCreateDocumentRequest{
            Data: sdk.String("corrupti"),
            TTL: sdk.Int64(592845),
            UniqueName: sdk.String("distinctio"),
        },
        ServiceSid: "quibusdam",
    }, operations.CreateDocumentSecurity{
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