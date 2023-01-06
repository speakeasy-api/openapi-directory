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
    
    req := operations.GetAccountInfoRequest{
        Headers: operations.GetAccountInfoHeaders{
            TrainingKey: "consequuntur",
        },
    }
    
    res, err := s.AccountAPI.GetAccountInfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->