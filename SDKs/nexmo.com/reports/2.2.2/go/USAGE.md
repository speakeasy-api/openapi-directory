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
    
    req := operations.CancelReportRequest{
        Security: operations.CancelReportSecurity{
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CancelReportPathParams{
            ReportID: "sit",
        },
    }
    
    res, err := s.CancelReport(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelReport200ApplicationJSONOneOf != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->