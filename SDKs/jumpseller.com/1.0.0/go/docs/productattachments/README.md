# ProductAttachments

### Available Operations

* [DeleteProductsIDAttachmentsAttachmentIDJSON](#deleteproductsidattachmentsattachmentidjson) - Delete a Product Attachment.
* [GetProductsIDAttachmentsJSON](#getproductsidattachmentsjson) - Retrieve all Product Attachments.
* [GetProductsIDAttachmentsCountJSON](#getproductsidattachmentscountjson) - Count all Product Attachments.
* [GetProductsIDAttachmentsAttachmentIDJSON](#getproductsidattachmentsattachmentidjson) - Retrieve a single Product Attachment.
* [PostProductsIDAttachmentsJSON](#postproductsidattachmentsjson) - Create a new Product Attachment.

## DeleteProductsIDAttachmentsAttachmentIDJSON

Delete a Product Attachment.

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
    res, err := s.ProductAttachments.DeleteProductsIDAttachmentsAttachmentIDJSON(ctx, operations.DeleteProductsIDAttachmentsAttachmentIDJSONRequest{
        AttachmentID: 379927,
        Authtoken: "assumenda",
        ID: 181151,
        Login: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductsIDAttachmentsAttachmentIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProductsIDAttachmentsJSON

Retrieve all Product Attachments.

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
    res, err := s.ProductAttachments.GetProductsIDAttachmentsJSON(ctx, operations.GetProductsIDAttachmentsJSONRequest{
        Authtoken: "quisquam",
        ID: 86377,
        Login: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachments != nil {
        // handle response
    }
}
```

## GetProductsIDAttachmentsCountJSON

Count all Product Attachments.

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
    res, err := s.ProductAttachments.GetProductsIDAttachmentsCountJSON(ctx, operations.GetProductsIDAttachmentsCountJSONRequest{
        Authtoken: "id",
        ID: 696997,
        Login: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDAttachmentsAttachmentIDJSON

Retrieve a single Product Attachment.

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
    res, err := s.ProductAttachments.GetProductsIDAttachmentsAttachmentIDJSON(ctx, operations.GetProductsIDAttachmentsAttachmentIDJSONRequest{
        AttachmentID: 778696,
        Authtoken: "illum",
        ID: 777408,
        Login: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## PostProductsIDAttachmentsJSON

Create a new Product Attachment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ProductAttachments.PostProductsIDAttachmentsJSON(ctx, operations.PostProductsIDAttachmentsJSONRequest{
        AttachmentEdit: shared.AttachmentEdit{
            Attachment: &shared.AttachmentEditFields{
                Filename: sdk.String("eius"),
                URL: sdk.String("eos"),
            },
        },
        Authtoken: "voluptas",
        ID: 69859,
        Login: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```
