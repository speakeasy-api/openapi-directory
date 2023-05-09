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
    res, err := s.Attachment.CreateAttachment(ctx, operations.CreateAttachmentRequest{
        BucketID: "corrupti",
        CollectionID: "provident",
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->