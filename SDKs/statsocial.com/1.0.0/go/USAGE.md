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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetApplicationsStatusRequest{
        QueryParams: operations.GetApplicationsStatusQueryParams{
            Key: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Application.GetApplicationsStatus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->