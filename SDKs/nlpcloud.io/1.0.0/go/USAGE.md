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
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ReadDependenciesV1EnCoreWebSmDependenciesPostRequest{
        Request: shared.UserRequestIn{
            Text: "cum",
        },
    }
    
    res, err := s.ReadDependenciesV1EnCoreWebSmDependenciesPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DependenciesOut != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->