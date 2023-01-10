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
    
    req := operations.DeleteCompanyAttendancesIDRequest{
        PathParams: operations.DeleteCompanyAttendancesIDPathParams{
            ID: 1969623670442928799,
        },
    }
    
    res, err := s.DeleteCompanyAttendancesID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->