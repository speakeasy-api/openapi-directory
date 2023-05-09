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
    res, err := s.GetAccessTokensAccessTokens(ctx, operations.GetAccessTokensAccessTokensRequest{
        AccessTokens: "corrupti",
        Callback: sdk.String("provident"),
        Filter: sdk.String("distinctio"),
        Page: sdk.Int64(844266),
        Pagesize: sdk.Int64(602763),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->