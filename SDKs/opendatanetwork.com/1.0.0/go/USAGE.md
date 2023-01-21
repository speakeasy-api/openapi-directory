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
            AppToken: "sit",
            Constraint: "voluptas",
            EntityID: "culpa",
            Variable: "expedita",
        },
        Headers: operations.CreateAMapHeaders{
            XAppToken: "consequuntur",
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