<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->