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
                CastLocalAuthorizationToken: shared.SchemeCastLocalAuthorizationToken{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccessibilityRequest{
        Request: shared.AccessibilityRequest{
            EndpointEnabled: false,
            HotwordEnabled: false,
        },
    }
    
    res, err := s.Assistant.Accessibility(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcurrentvalues != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->