# Changess

### Available Operations

* [GetChangess](#getchangess)

## GetChangess

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
    res, err := s.Changess.GetChangess(ctx, operations.GetChangessRequest{
        IfMatch: sdk.String("in"),
        IfNoneMatch: sdk.String("in"),
        Before: sdk.Int64(846409),
        Fields: []string{
            "rerum",
            "dicta",
            "magnam",
            "cumque",
        },
        Limit: sdk.Int64(813798),
        Since: sdk.Int64(411820),
        Sort: []string{
            "laborum",
            "accusamus",
        },
        To: sdk.Int64(249796),
        Token: sdk.String("occaecati"),
        ID: sdk.String("5efb9ba8-8f3a-4669-9707-4ba4469b6e21"),
        LastModified: sdk.Int64(298282),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```
