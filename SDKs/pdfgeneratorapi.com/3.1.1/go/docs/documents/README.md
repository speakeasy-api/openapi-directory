# Documents

### Available Operations

* [MergeTemplate](#mergetemplate) - Generate document
* [MergeTemplates](#mergetemplates) - Generate document (multiple templates)

## MergeTemplate

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

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
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.MergeTemplate(ctx, operations.MergeTemplateRequest{
        Data: shared.Data{
            ID: sdk.Int64(12312),
            Name: sdk.String("Sample Data"),
        },
        Format: shared.FormatEnumPdf.ToPointer(),
        Name: sdk.String("My document"),
        Output: shared.OutputEnumBase64.ToPointer(),
        TemplateID: 19375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## MergeTemplates

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

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
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.MergeTemplates(ctx, operations.MergeTemplatesRequest{
        RequestBody: []shared.BatchData{
            shared.BatchData{
                Data: &shared.Data{
                    ID: sdk.Int64(12312),
                    Name: sdk.String("Sample Data"),
                },
                Template: sdk.Int64(52272),
            },
            shared.BatchData{
                Data: &shared.Data{
                    ID: sdk.Int64(12312),
                    Name: sdk.String("Sample Data"),
                },
                Template: sdk.Int64(52272),
            },
            shared.BatchData{
                Data: &shared.Data{
                    ID: sdk.Int64(12312),
                    Name: sdk.String("Sample Data"),
                },
                Template: sdk.Int64(52272),
            },
        },
        Format: shared.FormatEnumPdf.ToPointer(),
        Name: sdk.String("My document"),
        Output: shared.OutputEnumBase64.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeTemplates200ApplicationJSONObject != nil {
        // handle response
    }
}
```
