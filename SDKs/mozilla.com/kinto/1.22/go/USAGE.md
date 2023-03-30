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

    req := operations.CreateAttachmentRequest{
        PathParams: operations.CreateAttachmentPathParams{
            BucketID: "unde",
            CollectionID: "deserunt",
            ID: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.Attachment.CreateAttachment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->