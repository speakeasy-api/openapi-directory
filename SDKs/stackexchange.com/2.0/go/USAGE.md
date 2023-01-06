<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetAccessTokensAccessTokensRequest{
        PathParams: operations.GetAccessTokensAccessTokensPathParams{
            AccessTokens: "deserunt",
        },
        QueryParams: operations.GetAccessTokensAccessTokensQueryParams{
            Callback: "officia",
            Filter: "ex",
            Page: 6283338723397322837,
            Pagesize: 6436455238974199075,
        },
    }
    
    res, err := s.GetAccessTokensAccessTokens(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->