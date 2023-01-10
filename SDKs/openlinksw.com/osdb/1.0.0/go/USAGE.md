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
    
    req := operations.ActionHelpRequest{
        PathParams: operations.ActionHelpPathParams{
            ActionID: "eum",
            ServiceID: "explicabo",
        },
    }
    
    res, err := s.OSDB.ActionHelp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionHelpResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->