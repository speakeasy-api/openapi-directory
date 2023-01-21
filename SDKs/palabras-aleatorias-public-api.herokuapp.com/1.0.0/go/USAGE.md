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
    
    req := operations.GetAddWordRequest{
        QueryParams: operations.GetAddWordQueryParams{
            Author: "sit",
            Definition: "voluptas",
            Related: "culpa",
            Word: "expedita",
        },
    }
    
    res, err := s.GetAddWord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->