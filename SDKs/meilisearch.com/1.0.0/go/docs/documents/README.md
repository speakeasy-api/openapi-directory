# Documents

### Available Operations

* [AddOrReplaceDocuments](#addorreplacedocuments) - Add or replace documents
* [AddOrUpdateDocuments](#addorupdatedocuments) - Add or update documents
* [DeleteAllDocuments](#deletealldocuments) - Delete all documents
* [DeleteDocuments](#deletedocuments) - Delete documents
* [DeleteOneDocument](#deleteonedocument) - Delete one document
* [GetDocuments](#getdocuments) - Get documents
* [GetOneDocument](#getonedocument) - Get one document

## AddOrReplaceDocuments

Add or replace documents

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
    res, err := s.Documents.AddOrReplaceDocuments(ctx, operations.AddOrReplaceDocumentsRequest{
        RequestBody: []AddOrReplaceDocumentsRequestBody{
            operations.AddOrReplaceDocumentsRequestBody{
                Author: sdk.String("Jane Austen"),
                Genre: sdk.String("romance"),
                ID: sdk.Float64(2),
                Price: sdk.Float64(3.5),
                Title: sdk.String("Pride and Prejudice"),
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: sdk.String("Jane Austen"),
                Genre: sdk.String("romance"),
                ID: sdk.Float64(2),
                Price: sdk.Float64(3.5),
                Title: sdk.String("Pride and Prejudice"),
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: sdk.String("Jane Austen"),
                Genre: sdk.String("romance"),
                ID: sdk.Float64(2),
                Price: sdk.Float64(3.5),
                Title: sdk.String("Pride and Prejudice"),
            },
        },
        CsvDelimiter: sdk.String(";"),
        PrimaryKey: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AddOrUpdateDocuments

Add or update documents

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
    res, err := s.Documents.AddOrUpdateDocuments(ctx, operations.AddOrUpdateDocumentsRequest{
        RequestBody: []AddOrUpdateDocumentsRequestBody{
            operations.AddOrUpdateDocumentsRequestBody{
                Author: sdk.String("J. Austen"),
                Date: sdk.String("1813"),
                ID: sdk.Float64(2),
            },
            operations.AddOrUpdateDocumentsRequestBody{
                Author: sdk.String("J. Austen"),
                Date: sdk.String("1813"),
                ID: sdk.Float64(2),
            },
            operations.AddOrUpdateDocumentsRequestBody{
                Author: sdk.String("J. Austen"),
                Date: sdk.String("1813"),
                ID: sdk.Float64(2),
            },
        },
        CsvDelimiter: sdk.String(";"),
        PrimaryKey: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAllDocuments

Delete all documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Documents.DeleteAllDocuments(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDocuments

Delete documents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Documents.DeleteDocuments(ctx, []float64{
        1,
        1,
        1,
        1,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOneDocument

Delete one document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Documents.DeleteOneDocument(ctx, []byte("unde"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocuments

Get documents

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
    res, err := s.Documents.GetDocuments(ctx, operations.GetDocumentsRequest{
        Fields: sdk.String("id"),
        Limit: sdk.String("1"),
        Offset: sdk.String("10"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOneDocument

Get one document

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
    res, err := s.Documents.GetOneDocument(ctx, operations.GetOneDocumentRequest{
        Fields: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
