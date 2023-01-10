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
    
    req := operations.GetUsersRequest{
        QueryParams: operations.GetUsersQueryParams{
            Cursor: "optio",
            Order: "desc",
            PageSize: 2776925417354444747,
        },
    }
    
    res, err := s.GetUsers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONAny != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->