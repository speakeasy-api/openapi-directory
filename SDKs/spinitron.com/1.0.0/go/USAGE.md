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
            Count: 3450639195285476113,
            Expand: []string{
                "laudantium",
            },
            Fields: []string{
                "soluta",
                "vel",
                "et",
            },
            Name: "cupiditate",
            Page: 1874909988799788225,
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