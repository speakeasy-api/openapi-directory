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
            CastLocalAuthorizationToken: "YOUR_API_KEY_HERE",
        }),
    )

    req := shared.AccessibilityRequest{
        EndpointEnabled: false,
        HotwordEnabled: false,
    }

    ctx := context.Background()
    res, err := s.Assistant.Accessibility(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrentvalues != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->