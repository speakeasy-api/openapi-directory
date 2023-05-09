# ThirdPartyTransaction

### Available Operations

* [DeleteThirdPartyTransactionTag](#deletethirdpartytransactiontag) - Delete third party transaction tag
* [GetAllThirdPartyTransactionTags](#getallthirdpartytransactiontags) - Get all third party transaction tags
* [GetAllThirdPartyTransactionsWithTag](#getallthirdpartytransactionswithtag) - Get links to tagged third party transactions
* [GetTagFromThirdPartyTransaction](#gettagfromthirdpartytransaction) - Get third party transaction tag
* [GetTagsFromThirdPartyTransaction](#gettagsfromthirdpartytransaction) - Get tags from third party transaction
* [PutThirdPartyTransactionTag](#putthirdpartytransactiontag) - insert third party transaction tag

## DeleteThirdPartyTransactionTag

Deletes a tag from the third party transaction

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
    res, err := s.ThirdPartyTransaction.DeleteThirdPartyTransactionTag(ctx, operations.DeleteThirdPartyTransactionTagRequest{
        APIVersion: "quam",
        Authorization: "atque",
        EmployerID: "officia",
        TagID: "ex",
        ThirdPartyTransactionID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllThirdPartyTransactionTags

Gets all the third party transaction tags

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
    res, err := s.ThirdPartyTransaction.GetAllThirdPartyTransactionTags(ctx, operations.GetAllThirdPartyTransactionTagsRequest{
        APIVersion: "a",
        Authorization: "laborum",
        EmployerID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllThirdPartyTransactionsWithTag

Gets the third party transactions with the specified tag

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
    res, err := s.ThirdPartyTransaction.GetAllThirdPartyTransactionsWithTag(ctx, operations.GetAllThirdPartyTransactionsWithTagRequest{
        APIVersion: "quod",
        Authorization: "a",
        EmployerID: "qui",
        TagID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagFromThirdPartyTransaction

Gets a tag from the third party transaction

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
    res, err := s.ThirdPartyTransaction.GetTagFromThirdPartyTransaction(ctx, operations.GetTagFromThirdPartyTransactionRequest{
        APIVersion: "commodi",
        Authorization: "atque",
        EmployerID: "totam",
        TagID: "tenetur",
        ThirdPartyTransactionID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsFromThirdPartyTransaction

Gets all tags from the third party transaction

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
    res, err := s.ThirdPartyTransaction.GetTagsFromThirdPartyTransaction(ctx, operations.GetTagsFromThirdPartyTransactionRequest{
        APIVersion: "quam",
        Authorization: "quod",
        EmployerID: "vitae",
        ThirdPartyTransactionID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PutThirdPartyTransactionTag

Inserts a tag on the third party transaction

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
    res, err := s.ThirdPartyTransaction.PutThirdPartyTransactionTag(ctx, operations.PutThirdPartyTransactionTagRequest{
        APIVersion: "reiciendis",
        Authorization: "quod",
        EmployerID: "voluptate",
        TagID: "inventore",
        ThirdPartyTransactionID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
