<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetApplicationsStatusRequest{
        QueryParams: operations.GetApplicationsStatusQueryParams{
            Key: "magni",
        },
    }
    
    res, err := s.Application.GetApplicationsStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationStatus != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->