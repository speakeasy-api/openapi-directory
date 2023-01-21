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
    
    req := operations.CreatorRolesListRequest{
        QueryParams: operations.CreatorRolesListQueryParams{
            Page: 8717895732742165505,
            PageSize: 2259404117704393152,
        },
    }
    
    res, err := s.CreatorRoles.CreatorRolesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatorRolesList200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->