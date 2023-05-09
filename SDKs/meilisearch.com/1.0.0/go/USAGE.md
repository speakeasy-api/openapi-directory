<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->