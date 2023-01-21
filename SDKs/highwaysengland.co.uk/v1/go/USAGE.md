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
    
    req := operations.AreasGetRequest{
        PathParams: operations.AreasGetPathParams{
            Version: "sit",
        },
    }
    
    res, err := s.Areas.AreasGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AreaResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->