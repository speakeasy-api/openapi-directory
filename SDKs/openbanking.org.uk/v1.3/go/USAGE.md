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
    
    req := operations.GetAtmsRequest{
        Headers: operations.GetAtmsHeaders{
            IfModifiedSince: "vero",
            IfNoneMatch: "voluptatem",
        },
    }
    
    res, err := s.ATM.GetAtms(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->