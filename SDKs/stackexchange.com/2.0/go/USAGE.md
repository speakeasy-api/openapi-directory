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

    req := operations.GetAccessTokensAccessTokensRequest{
        PathParams: operations.GetAccessTokensAccessTokensPathParams{
            AccessTokens: "unde",
        },
        QueryParams: operations.GetAccessTokensAccessTokensQueryParams{
            Callback: "deserunt",
            Filter: "porro",
            Page: 844266,
            Pagesize: 602763,
        },
    }

    ctx := context.Background()
    res, err := s.GetAccessTokensAccessTokens(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->