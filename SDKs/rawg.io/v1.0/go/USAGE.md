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

    req := operations.CreatorRolesListRequest{
        QueryParams: operations.CreatorRolesListQueryParams{
            Page: 548814,
            PageSize: 592845,
        },
    }

    ctx := context.Background()
    res, err := s.CreatorRoles.CreatorRolesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatorRolesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->