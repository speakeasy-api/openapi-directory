# Attachment

### Available Operations

* [CreateAttachment](#createattachment)
* [DeleteAttachment](#deleteattachment)

## CreateAttachment

### Example Usage

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
        BucketID: "ipsam",
        CollectionID: "repellendus",
        ID: "fc2ddf7c-c78c-4a1b-a928-fc816742cb73",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAttachment

### Example Usage

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
    res, err := s.Attachment.DeleteAttachment(ctx, operations.DeleteAttachmentRequest{
        BucketID: "excepturi",
        CollectionID: "aspernatur",
        ID: "05929396-fea7-4596-ab10-faaa2352c595",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
