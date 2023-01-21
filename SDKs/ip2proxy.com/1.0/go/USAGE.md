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
    
    req := operations.GetRequest{
        QueryParams: operations.GetQueryParams{
            Format: "json",
            IP: "voluptas",
            Key: "culpa",
            Package: "expedita",
        },
    }
    
    res, err := s.Get(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200TextHTMLString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->