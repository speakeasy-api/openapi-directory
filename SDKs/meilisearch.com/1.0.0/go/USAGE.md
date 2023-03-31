<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AddOrReplaceDocumentsRequest{
        RequestBody: []AddOrReplaceDocumentsRequestBody{
            operations.AddOrReplaceDocumentsRequestBody{
                Author: "Jane Austen",
                Genre: "romance",
                ID: 2,
                Price: 3.5,
                Title: "Pride and Prejudice",
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: "Jane Austen",
                Genre: "romance",
                ID: 2,
                Price: 3.5,
                Title: "Pride and Prejudice",
            },
            operations.AddOrReplaceDocumentsRequestBody{
                Author: "Jane Austen",
                Genre: "romance",
                ID: 2,
                Price: 3.5,
                Title: "Pride and Prejudice",
            },
        },
        PrimaryKey: "id",
    }

    ctx := context.Background()
    res, err := s.Documents.AddOrReplaceDocuments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->