# Reference

### Available Operations

* [GetJournalExpressionSchema](#getjournalexpressionschema) - Gets the journal expression data schema

## GetJournalExpressionSchema

Gets the data schema for all available journal expression values. Includes table names, column names and data types.

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
    res, err := s.Reference.GetJournalExpressionSchema(ctx, operations.GetJournalExpressionSchemaRequest{
        APIVersion: "molestias",
        Authorization: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JournalExpressionDataTable != nil {
        // handle response
    }
}
```
