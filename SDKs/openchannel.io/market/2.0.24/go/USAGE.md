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
            BasicAuth: shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.DeleteAppsAppIDRequest{
        PathParams: operations.DeleteAppsAppIDPathParams{
            AppID: "unde",
        },
        QueryParams: operations.DeleteAppsAppIDQueryParams{
            DeveloperID: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.AppsFindAndModifyApps.DeleteAppsAppID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->