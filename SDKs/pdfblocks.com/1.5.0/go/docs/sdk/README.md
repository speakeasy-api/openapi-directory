# SDK

## Overview

PDF Blocks is a secure, reliable, and fast API to work with PDF documents. Actions include: Merge PDF documents, add or remove passwords, add watermarks, remove, extract, reverse, and rotate pages, and more.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1>
### Available Operations

* [AddImageWatermarkV1](#addimagewatermarkv1) - Add an image watermark to a PDF
* [AddPasswordV1](#addpasswordv1) - Add a password to a PDF
* [AddRestrictionsV1](#addrestrictionsv1) - Add restrictions to a PDF
* [AddTextWatermarkV1](#addtextwatermarkv1) - Add a text watermark to a PDF
* [ExtractPagesV1](#extractpagesv1) - Extract pages from a PDF
* [MergeDocumentsV1](#mergedocumentsv1) - Merge PDF documents
* [RemovePagesV1](#removepagesv1) - Remove pages from a PDF
* [RemovePasswordV1](#removepasswordv1) - Remove the password from a PDF
* [RemoveRestrictionsV1](#removerestrictionsv1) - Remove the restrictions from a PDF
* [RemoveSignaturesV1](#removesignaturesv1) - Remove the signatures from a PDF
* [ReversePagesV1](#reversepagesv1) - Reverse the pages of a PDF
* [RotatePagesV1](#rotatepagesv1) - Rotate pages in a PDF

## AddImageWatermarkV1

Add an image watermark to each page of a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-watermark-image>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddImageWatermarkV1(ctx, operations.AddImageWatermarkV1RequestBody{
        File: operations.AddImageWatermarkV1RequestBodyFile{
            Content: []byte("unde"),
            File: "nulla",
        },
        Image: operations.AddImageWatermarkV1RequestBodyImage{
            Content: []byte("corrupti"),
            Image: "illum",
        },
        Margin: sdk.Float32(1),
        Transparency: sdk.Int(50),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddImageWatermarkV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## AddPasswordV1

Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-password>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddPasswordV1(ctx, operations.AddPasswordV1RequestBody{
        EncryptionAlgorithm: operations.AddPasswordV1RequestBodyEncryptionAlgorithmEnumAes128.ToPointer(),
        File: operations.AddPasswordV1RequestBodyFile{
            Content: []byte("vel"),
            File: "error",
        },
        Password: "pa$$word",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddPasswordV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## AddRestrictionsV1

Add restrictions to prevent copying, printing, and modifying a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-restrictions>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddRestrictionsV1(ctx, operations.AddRestrictionsV1RequestBody{
        AllowAccessibility: sdk.Bool(false),
        AllowAssembleDocument: sdk.Bool(false),
        AllowChangeContent: sdk.Bool(false),
        AllowCommentAndFillForm: sdk.Bool(false),
        AllowCopyContent: sdk.Bool(false),
        AllowFillForm: sdk.Bool(false),
        AllowPrint: sdk.Bool(false),
        AllowPrintHighResolution: sdk.Bool(false),
        EncryptionAlgorithm: operations.AddRestrictionsV1RequestBodyEncryptionAlgorithmEnumAes128.ToPointer(),
        File: operations.AddRestrictionsV1RequestBodyFile{
            Content: []byte("deserunt"),
            File: "suscipit",
        },
        OwnerPassword: "pa$$word",
        UserPassword: sdk.String("pa$$word"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddRestrictionsV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## AddTextWatermarkV1

Add a text watermark to each page of a PDF document. Choose from several watermark templates.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-watermark-text>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddTextWatermarkV1(ctx, operations.AddTextWatermarkV1RequestBody{
        Color: operations.AddTextWatermarkV1RequestBodyColorEnumGray.ToPointer(),
        File: operations.AddTextWatermarkV1RequestBodyFile{
            Content: []byte("iure"),
            File: "magnam",
        },
        Line1: "Jane Doe",
        Line2: sdk.String("ACME, Inc"),
        Line3: sdk.String("Confidential"),
        Margin: sdk.Float32(1),
        Template: sdk.Int(1001),
        Transparency: sdk.Int(75),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTextWatermarkV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## ExtractPagesV1

Extract one or more pages from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/extract-pages>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExtractPagesV1(ctx, operations.ExtractPagesV1RequestBody{
        File: operations.ExtractPagesV1RequestBodyFile{
            Content: []byte("debitis"),
            File: "ipsa",
        },
        FirstPage: sdk.Int(963663),
        LastPage: sdk.Int(272656),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExtractPagesV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## MergeDocumentsV1

Combine multiple PDF documents into a single PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/merge-documents>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MergeDocumentsV1(ctx, operations.MergeDocumentsV1RequestBody{
        File: [][]byte{
            []byte("molestiae"),
            []byte("minus"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeDocumentsV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## RemovePagesV1

Remove one or more pages from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-pages>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemovePagesV1(ctx, operations.RemovePagesV1RequestBody{
        File: operations.RemovePagesV1RequestBodyFile{
            Content: []byte("placeat"),
            File: "voluptatum",
        },
        FirstPage: sdk.Int(479977),
        LastPage: sdk.Int(568045),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemovePagesV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## RemovePasswordV1

Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-password>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemovePasswordV1(ctx, operations.RemovePasswordV1RequestBody{
        File: operations.RemovePasswordV1RequestBodyFile{
            Content: []byte("nisi"),
            File: "recusandae",
        },
        Password: "pa$$word",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemovePasswordV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## RemoveRestrictionsV1

Remove all the restrictions from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-restrictions>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveRestrictionsV1(ctx, operations.RemoveRestrictionsV1RequestBody{
        File: operations.RemoveRestrictionsV1RequestBodyFile{
            Content: []byte("temporibus"),
            File: "ab",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveRestrictionsV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## RemoveSignaturesV1

Remove the cryptographic signatures and timestamps from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-signatures>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveSignaturesV1(ctx, operations.RemoveSignaturesV1RequestBody{
        File: operations.RemoveSignaturesV1RequestBodyFile{
            Content: []byte("quis"),
            File: "veritatis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveSignaturesV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## ReversePagesV1

Reverse the order of the pages of a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/reverse-pages>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReversePagesV1(ctx, operations.ReversePagesV1RequestBody{
        File: operations.ReversePagesV1RequestBodyFile{
            Content: []byte("deserunt"),
            File: "perferendis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReversePagesV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```

## RotatePagesV1

Rotate one or more pages in a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/rotate-pages>

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RotatePagesV1(ctx, operations.RotatePagesV1RequestBody{
        Angle: operations.RotatePagesV1RequestBodyAngleEnumOneHundredAndEighty,
        File: operations.RotatePagesV1RequestBodyFile{
            Content: []byte("repellendus"),
            File: "sapiente",
        },
        FirstPage: sdk.Int(778157),
        LastPage: sdk.Int(140350),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RotatePagesV1200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
