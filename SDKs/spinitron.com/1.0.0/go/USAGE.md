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
            Count: 8717895732742165505,
            Expand: []string{
                "culpa",
            },
            Fields: []string{
                "consequuntur",
                "dolor",
            },
            Name: "expedita",
            Page: 6044372234677422456,
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