# V1

### Available Operations

* [Get](#get) - Retrieve Legal Agreements for provided agreements keys

## Get

Retrieve Legal Agreements for provided agreements keys

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
    res, err := s.V1.Get(ctx, operations.GetRequest{
        XMarketID: sdk.String("corrupti"),
        XPrivateLabelID: sdk.Int64(847252),
        Keys: []string{
            "error",
            "deserunt",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
