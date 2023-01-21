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
    
    req := operations.GetV1CategoryListOutputFormatRequest{
        PathParams: operations.GetV1CategoryListOutputFormatPathParams{
            OutputFormat: "json",
        },
        QueryParams: operations.GetV1CategoryListOutputFormatQueryParams{
            APIKey: "voluptas",
            Type: "user",
        },
    }
    
    res, err := s.GetV1CategoryListOutputFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->