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
    res, err := s.OpenAiProductEndpoint.ProductsUsingGET(ctx, operations.ProductsUsingGETRequest{
        Budget: sdk.Int64(548814),
        Q: "provident",
        Size: sdk.Int64(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->