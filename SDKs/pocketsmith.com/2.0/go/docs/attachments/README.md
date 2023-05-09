# Attachments

### Available Operations

* [DeleteAttachmentsID](#deleteattachmentsid) - Delete attachment
* [DeleteTransactionsTransactionIDAttachmentsAttachmentID](#deletetransactionstransactionidattachmentsattachmentid) - Unassigns attachment in transaction
* [GetAttachmentsID](#getattachmentsid) - Get attachment
* [GetTransactionsIDAttachments](#gettransactionsidattachments) - List attachments in transaction
* [GetUsersIDAttachments](#getusersidattachments) - Lists attachments in user
* [PostTransactionsIDAttachments](#posttransactionsidattachments) - Assigns attachment to transaction
* [PostUsersIDAttachments](#postusersidattachments) - Create attachment in user
* [PutAttachmentsID](#putattachmentsid) - Update attachment

## DeleteAttachmentsID

Deletes a particular attachment by its ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.DeleteAttachmentsID(ctx, operations.DeleteAttachmentsIDRequest{
        ID: 720633,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTransactionsTransactionIDAttachmentsAttachmentID

Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.DeleteTransactionsTransactionIDAttachmentsAttachmentID(ctx, operations.DeleteTransactionsTransactionIDAttachmentsAttachmentIDRequest{
        AttachmentID: 639921,
        TransactionID: 582020,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAttachmentsID

Gets a particular attachment by its ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.GetAttachmentsID(ctx, operations.GetAttachmentsIDRequest{
        ID: 143353,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## GetTransactionsIDAttachments

Lists attachments belonging to a transaction by their ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.GetTransactionsIDAttachments(ctx, operations.GetTransactionsIDAttachmentsRequest{
        ID: 537373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachments != nil {
        // handle response
    }
}
```

## GetUsersIDAttachments

Lists attachments belonging to a user by their ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.GetUsersIDAttachments(ctx, operations.GetUsersIDAttachmentsRequest{
        ID: 944669,
        Unassigned: sdk.Int64(758616),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachments != nil {
        // handle response
    }
}
```

## PostTransactionsIDAttachments

Assigns an attachment to the transaction by their ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.PostTransactionsIDAttachments(ctx, operations.PostTransactionsIDAttachmentsRequest{
        RequestBody: &operations.PostTransactionsIDAttachmentsRequestBody{
            AttachmentID: sdk.Int64(1438154),
        },
        ID: 521848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## PostUsersIDAttachments

Creates an attachment belonging to the user by their ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.PostUsersIDAttachments(ctx, operations.PostUsersIDAttachmentsRequest{
        RequestBody: &operations.PostUsersIDAttachmentsRequestBody{
            FileData: sdk.String("beatae"),
            FileName: sdk.String("taxi.png"),
            Title: sdk.String("Invoice for taxi"),
        },
        ID: 414662,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```

## PutAttachmentsID

Updates the title of the attachment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.PutAttachmentsID(ctx, operations.PutAttachmentsIDRequest{
        RequestBody: &operations.PutAttachmentsIDRequestBody{
            Title: sdk.String("Invoice for taxi"),
        },
        ID: 473600,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Attachment != nil {
        // handle response
    }
}
```
