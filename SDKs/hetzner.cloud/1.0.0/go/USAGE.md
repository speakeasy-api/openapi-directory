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
    
    req := operations.GetActionsRequest{
        QueryParams: operations.GetActionsQueryParams{
            ID: 8882134101877179010,
            Sort: "status:asc",
            Status: "success",
        },
    }
    
    res, err := s.Actions.GetActions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->