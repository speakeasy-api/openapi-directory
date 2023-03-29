<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetUsersRequest{
        QueryParams: operations.GetUsersQueryParams{
            Cursor: "unde",
            Order: "desc",
            PageSize: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.GetUsers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->