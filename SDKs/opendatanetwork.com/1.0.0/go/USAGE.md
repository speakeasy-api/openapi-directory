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
    
    req := operations.CreateAMapRequest{
        QueryParams: operations.CreateAMapQueryParams{
            AppToken: "et",
            Constraint: "et",
            EntityID: "tempore",
            Variable: "occaecati",
        },
        Headers: operations.CreateAMapHeaders{
            XAppToken: "tempore",
        },
    }
    
    res, err := s.CreateAMap(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->