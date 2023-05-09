# Results

### Available Operations

* [ResultsRead](#resultsread) - Get the result from image processing

## ResultsRead

This GET-Method returns the URL where the result can downloaded from.

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Results.ResultsRead(ctx, operations.ResultsReadRequest{
        ResultFileID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResultResponse != nil {
        // handle response
    }
}
```
