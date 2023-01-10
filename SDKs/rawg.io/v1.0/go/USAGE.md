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
            Page: 6249034122277746123,
            PageSize: 2509453817742034460,
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