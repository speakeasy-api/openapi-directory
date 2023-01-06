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
                HTTPBearer: &shared.SchemeHTTPBearer{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetPersonasRequest{
        QueryParams: operations.GetPersonasQueryParams{
            Count: 2812151115189038889,
            Expand: []string{
                "ex",
                "excepturi",
                "suscipit",
            },
            Fields: []string{
                "omnis",
            },
            Name: "esse",
            Page: 6580372123814961441,
        },
    }
    
    res, err := s.Persona.GetPersonas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonas200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->