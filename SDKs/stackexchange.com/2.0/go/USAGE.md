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
            AccessTokens: "omnis",
        },
        QueryParams: operations.GetAccessTokensAccessTokensQueryParams{
            Callback: "qui",
            Filter: "doloribus",
            Page: 8480251478551216538,
            Pagesize: 2453198920892388966,
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