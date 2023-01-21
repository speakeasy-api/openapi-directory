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
            AccessTokens: "sit",
        },
        QueryParams: operations.GetAccessTokensAccessTokensQueryParams{
            Callback: "voluptas",
            Filter: "culpa",
            Page: 501233450539197794,
            Pagesize: 3390393562759376202,
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