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
                BearerToken: shared.SchemeBearerToken{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetApplicationsApplicationIDRequest{
        PathParams: operations.GetApplicationsApplicationIDPathParams{
            ApplicationID: "sit",
        },
    }
    
    res, err := s.Applications.GetApplicationsApplicationID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApplicationsApplicationID200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->