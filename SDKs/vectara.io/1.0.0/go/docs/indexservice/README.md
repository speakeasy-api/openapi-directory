# IndexService

## Overview

Indexing operations, such as creating and deleting documents

### Available Operations

* [Delete](#delete) - Delete
* [FileUpload](#fileupload) - File Upload
* [Index](#index) - Index

## Delete

Delete

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
    res, err := s.IndexService.Delete(ctx, operations.DeleteRequest{
        CustomerID: 158969,
        VectaraDeleteDocumentRequest: shared.VectaraDeleteDocumentRequest{
            CorpusID: sdk.String("quis"),
            CustomerID: sdk.String("vitae"),
            DocumentID: sdk.String("laborum"),
        },
    }, operations.DeleteSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VectaraDeleteDocumentResponse != nil {
        // handle response
    }
}
```

## FileUpload

File Upload

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
    res, err := s.IndexService.FileUpload(ctx, operations.FileUploadRequest{
        RequestBody: &operations.FileUploadRequestBody{
            DocMetadata: sdk.String("animi"),
            File: &operations.FileUploadRequestBodyFile{
                Content: []byte("enim"),
                File: "odit",
            },
        },
        C: 778346,
        D: sdk.Bool(false),
        O: 196582,
    }, operations.FileUploadSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FileUpload200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Index

Index

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
    res, err := s.IndexService.Index(ctx, operations.IndexRequest{
        CustomerID: 949572,
        VectaraIndexDocumentRequest: shared.VectaraIndexDocumentRequest{
            CorpusID: sdk.String("ipsam"),
            CustomerID: sdk.String("id"),
            Document: &shared.VectaraindexingDocument{
                CustomDims: []shared.VectaraindexingCustomDimension{
                    shared.VectaraindexingCustomDimension{
                        Name: sdk.String("Joyce Mueller"),
                        Value: sdk.Float64(960.98),
                    },
                    shared.VectaraindexingCustomDimension{
                        Name: sdk.String("Jan Thiel"),
                        Value: sdk.Float64(9767.62),
                    },
                    shared.VectaraindexingCustomDimension{
                        Name: sdk.String("Geneva Klein Jr."),
                        Value: sdk.Float64(4417.11),
                    },
                    shared.VectaraindexingCustomDimension{
                        Name: sdk.String("Shawna Carter"),
                        Value: sdk.Float64(4808.94),
                    },
                },
                Description: sdk.String("dicta"),
                DocumentID: sdk.String("harum"),
                MetadataJSON: sdk.String("enim"),
                Section: []shared.IndexingSection{
                    shared.IndexingSection{
                        CustomDims: []shared.VectaraindexingCustomDimension{
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Eric Emmerich"),
                                Value: sdk.Float64(5666.02),
                            },
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Joel Lang"),
                                Value: sdk.Float64(939.4),
                            },
                        },
                        ID: sdk.Int(921158),
                        MetadataJSON: sdk.String("sint"),
                        Section: []shared.IndexingSection{
                            shared.IndexingSection{},
                        },
                        Text: sdk.String("itaque"),
                        Title: sdk.String("Mrs."),
                    },
                    shared.IndexingSection{
                        CustomDims: []shared.VectaraindexingCustomDimension{
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Monique Spinka"),
                                Value: sdk.Float64(7163.27),
                            },
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Francisco Gleason"),
                                Value: sdk.Float64(5865.13),
                            },
                        },
                        ID: sdk.Int(552822),
                        MetadataJSON: sdk.String("perferendis"),
                        Section: []shared.IndexingSection{
                            shared.IndexingSection{},
                        },
                        Text: sdk.String("assumenda"),
                        Title: sdk.String("Mrs."),
                    },
                    shared.IndexingSection{
                        CustomDims: []shared.VectaraindexingCustomDimension{
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Sonya Marks"),
                                Value: sdk.Float64(7351.94),
                            },
                        },
                        ID: sdk.Int(288476),
                        MetadataJSON: sdk.String("delectus"),
                        Section: []shared.IndexingSection{
                            shared.IndexingSection{},
                            shared.IndexingSection{},
                        },
                        Text: sdk.String("non"),
                        Title: sdk.String("Miss"),
                    },
                    shared.IndexingSection{
                        CustomDims: []shared.VectaraindexingCustomDimension{
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Sherri Tremblay"),
                                Value: sdk.Float64(2230.81),
                            },
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Randal Parisian"),
                                Value: sdk.Float64(8464.09),
                            },
                            shared.VectaraindexingCustomDimension{
                                Name: sdk.String("Jean Buckridge"),
                                Value: sdk.Float64(8137.98),
                            },
                        },
                        ID: sdk.Int(411820),
                        MetadataJSON: sdk.String("aliquid"),
                        Section: []shared.IndexingSection{
                            shared.IndexingSection{},
                            shared.IndexingSection{},
                            shared.IndexingSection{},
                        },
                        Text: sdk.String("accusamus"),
                        Title: sdk.String("Mrs."),
                    },
                },
                Title: sdk.String("Ms."),
            },
        },
    }, operations.IndexSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VectaraIndexDocumentResponse != nil {
        // handle response
    }
}
```
