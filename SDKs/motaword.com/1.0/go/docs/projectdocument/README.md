# ProjectDocument

### Available Operations

* [CreateProjectDocument](#createprojectdocument) - Upload a new document
* [DeleteProjectDocument](#deleteprojectdocument) - Delete the document
* [DownloadProjectDocument](#downloadprojectdocument) - Download a project source document
* [DownloadTranslatedDocumentForLanguage](#downloadtranslateddocumentforlanguage) - Download translated document
* [GetProjectDocument](#getprojectdocument) - View a project source document
* [GetProjectDocuments](#getprojectdocuments) - View project source documents
* [UpdateProjectDocumentJSON](#updateprojectdocumentjson) - Update the document.
* [UpdateProjectDocumentMultipart](#updateprojectdocumentmultipart) - Update the document.

## CreateProjectDocument

Upload a new document

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
    res, err := s.ProjectDocument.CreateProjectDocument(ctx, operations.CreateProjectDocumentRequest{
        DocumentUpdates: &shared.DocumentUpdates{
            Documents: [][]byte{
                []byte("fugit"),
                []byte("accusamus"),
            },
            Schemes: sdk.String("inventore"),
            SourceLinks: []shared.LinkedSourceDocument{
                shared.LinkedSourceDocument{
                    Name: sdk.String("Sonya Osinski"),
                    Size: sdk.Int64(432148),
                    Source: shared.LinkedSourceDocumentSourceEnumGoogledrive.ToPointer(),
                    URL: sdk.String("https://natural-sovereignty.org"),
                },
                shared.LinkedSourceDocument{
                    Name: sdk.String("Jeannette Boyer"),
                    Size: sdk.Int64(131482),
                    Source: shared.LinkedSourceDocumentSourceEnumGoogledrive.ToPointer(),
                    URL: sdk.String("http://last-eligibility.info"),
                },
            },
        },
        ProjectID: 262118,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentList != nil {
        // handle response
    }
}
```

## DeleteProjectDocument

Delete the document

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
    res, err := s.ProjectDocument.DeleteProjectDocument(ctx, operations.DeleteProjectDocumentRequest{
        DocumentID: 458515,
        ProjectID: 456141,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DownloadProjectDocument

Download an actual source file you uploaded to be translated in your project.

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
    res, err := s.ProjectDocument.DownloadProjectDocument(ctx, operations.DownloadProjectDocumentRequest{
        DocumentID: 524593,
        ProjectID: 683282,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadProjectDocument200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DownloadTranslatedDocumentForLanguage

Download translated document in the given target language.

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
    res, err := s.ProjectDocument.DownloadTranslatedDocumentForLanguage(ctx, operations.DownloadTranslatedDocumentForLanguageRequest{
        Certified: sdk.Bool(false),
        DocumentID: 442015,
        Language: "quidem",
        ProjectID: 852635,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadTranslatedDocumentForLanguage200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## GetProjectDocument

View the details of a source file you uploaded to be translated in your project.

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
    res, err := s.ProjectDocument.GetProjectDocument(ctx, operations.GetProjectDocumentRequest{
        DocumentID: 283519,
        ProjectID: 433439,
        With: []GetProjectDocumentWithEnum{
            operations.GetProjectDocumentWithEnumEditors,
            operations.GetProjectDocumentWithEnumPreview,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## GetProjectDocuments

Get a list of source files you uploaded to be translated in your project.

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
    res, err := s.ProjectDocument.GetProjectDocuments(ctx, operations.GetProjectDocumentsRequest{
        ProjectID: 509342,
        With: []GetProjectDocumentsWithEnum{
            operations.GetProjectDocumentsWithEnumPreview,
            operations.GetProjectDocumentsWithEnumPreview,
            operations.GetProjectDocumentsWithEnumEditors,
            operations.GetProjectDocumentsWithEnumEditors,
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

## UpdateProjectDocumentJSON

Update the document. File name and contents will replaced with the new one.

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
    res, err := s.ProjectDocument.UpdateProjectDocumentJSON(ctx, operations.UpdateProjectDocumentJSONRequest{
        DocumentUploadRequest: &shared.DocumentUploadRequest{
            Documents: []byte("neque"),
            Schemes: sdk.String("quo"),
            SourceLink: &shared.LinkedSourceDocument{
                Name: sdk.String("Salvatore Parker"),
                Size: sdk.Int64(373813),
                Source: shared.LinkedSourceDocumentSourceEnumDropbox.ToPointer(),
                URL: sdk.String("https://acrobatic-divide.org"),
            },
        },
        DocumentID: 370853,
        ProjectID: 133465,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## UpdateProjectDocumentMultipart

Update the document. File name and contents will replaced with the new one.

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
    res, err := s.ProjectDocument.UpdateProjectDocumentMultipart(ctx, operations.UpdateProjectDocumentMultipartRequest{
        DocumentUploadRequest1: &shared.DocumentUploadRequest1{
            Documents: &shared.DocumentUploadRequestDocuments{
                Content: []byte("sequi"),
                Documents: "quo",
            },
            Schemes: sdk.String("esse"),
            SourceLink: &shared.LinkedSourceDocument{
                Name: sdk.String("Kevin Rau"),
                Size: sdk.Int64(76956),
                Source: shared.LinkedSourceDocumentSourceEnumGoogledrive.ToPointer(),
                URL: sdk.String("https://uncommon-encounter.info"),
            },
        },
        DocumentID: 577543,
        ProjectID: 414567,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```
