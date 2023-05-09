# Pdf

### Available Operations

* [CreatePDF](#createpdf) - Create PDF
* [GetPDF](#getpdf) - Get PDF

## CreatePDF

Creates a PDF containing the background check results.

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
    res, err := s.Pdf.CreatePDF(ctx, operations.CreatePDFRequest{
        CheckID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPDF

Downloads the PDF in the specified language, Spanish by default.

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
    res, err := s.Pdf.GetPDF(ctx, operations.GetPDFRequest{
        CheckID: "vero",
        Lang: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
