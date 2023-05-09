# Document

### Available Operations

* [GetAllDocumentSubjects](#getalldocumentsubjects) - Get a list of subjects of projects
* [GetDocument](#getdocument) - View a single document
* [GetDocumentProgress](#getdocumentprogress) - View a document translation progress
* [GetDocuments](#getdocuments) - View your documents
* [GetSimilarDocuments](#getsimilardocuments) - Find documents similar to this document.
* [GetUserDocuments](#getuserdocuments) - Get a list of your documents
* [RegeneratePreview](#regeneratepreview) - Regenerate preview and return preview URL for given file
* [UseAsDraft](#useasdraft) - Use the translation of given source manual document as manual draft source for the given target document.
* [UseAsRegular](#useasregular) - Use the translation of the given manual document as a regular file.

## GetAllDocumentSubjects

Get a list of subjects of projects

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetAllDocumentSubjects(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentSubjects != nil {
        // handle response
    }
}
```

## GetDocument

View a single document from your MotaWord account with its translation info.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetDocument(ctx, operations.GetDocumentRequest{
        DocumentID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContinuousProjectDocument != nil {
        // handle response
    }
}
```

## GetDocumentProgress

View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetDocumentProgress(ctx, operations.GetDocumentProgressRequest{
        DocumentID: 8966.72,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Progress != nil {
        // handle response
    }
}
```

## GetDocuments

View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetDocuments(ctx, operations.GetDocumentsRequest{
        LanguageCode: sdk.String("distinctio"),
        OrderBy: operations.GetDocumentsOrderByEnumName.ToPointer(),
        OrderType: shared.ListOrderTypeEnumAsc.ToPointer(),
        Page: sdk.Int64(216897),
        PerPage: sdk.Int64(456015),
        Recent: sdk.Bool(false),
        Search: sdk.String("id"),
        TypeFilter: operations.GetDocumentsTypeFilterEnumStyleGuides.ToPointer(),
        With: []GetDocumentsWithEnum{
            operations.GetDocumentsWithEnumPreview,
            operations.GetDocumentsWithEnumPreview,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentList != nil {
        // handle response
    }
}
```

## GetSimilarDocuments

Find documents similar to this document. Optionally, include translation information.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetSimilarDocuments(ctx, operations.GetSimilarDocumentsRequest{
        DocumentID: 229219,
        PerPage: sdk.Int64(758379),
        With: []GetSimilarDocumentsWithEnum{
            operations.GetSimilarDocumentsWithEnumPreview,
            operations.GetSimilarDocumentsWithEnumEditors,
            operations.GetSimilarDocumentsWithEnumPreview,
            operations.GetSimilarDocumentsWithEnumEditors,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentList != nil {
        // handle response
    }
}
```

## GetUserDocuments

Get a list of your documents

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.GetUserDocuments(ctx, operations.GetUserDocumentsRequest{
        LanguageCode: sdk.String("provident"),
        OrderBy: operations.GetUserDocumentsOrderByEnumUpdatedAt.ToPointer(),
        OrderType: shared.ListOrderTypeEnumDesc.ToPointer(),
        Page: sdk.Int64(519711),
        PerPage: sdk.Int64(628982),
        Recent: sdk.Bool(false),
        Search: sdk.String("alias"),
        TypeFilter: operations.GetUserDocumentsTypeFilterEnumStyleGuides.ToPointer(),
        UserID: 311860,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentList != nil {
        // handle response
    }
}
```

## RegeneratePreview

Regenerate preview and return preview URL for given file

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.RegeneratePreview(ctx, operations.RegeneratePreviewRequest{
        DocumentID: 273542,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegeneratePreviewResponse != nil {
        // handle response
    }
}
```

## UseAsDraft

Use the translation of given source manual document as manual draft source for the given target document.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.UseAsDraft(ctx, operations.UseAsDraftRequest{
        UseAsDraftPayload: &shared.UseAsDraftPayload{
            FromFileID: sdk.Float64(4254.51),
            FromManualTranslationFileID: sdk.Float64(7980.47),
            ToManualTranslationFileID: sdk.Float64(8853.38),
        },
        DocumentID: 185636,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UseAsRegular

Use the translation of the given manual document as a regular file.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Document.UseAsRegular(ctx, operations.UseAsRegularRequest{
        UseAsRegularPayload: &shared.UseAsRegularPayload{
            AllowOriginalFilePreview: sdk.Bool(false),
            AllowReviewInManualEditor: sdk.Bool(false),
            DisableInvitations: sdk.Bool(false),
            FromManualTranslationFileID: sdk.Float64(6798.8),
            HideNumbers: sdk.Bool(false),
            Recreate: sdk.Bool(false),
        },
        DocumentID: 952792,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
