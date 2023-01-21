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
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetEndpointsRequest{
        QueryParams: operations.GetEndpointsQueryParams{
            Openapi: false,
        },
    }
    
    res, err := s.APIInformation.GetEndpoints(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Endpoint != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->