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
            AccessToken: &shared.SchemeAccessToken{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetPersonasRequest{
        QueryParams: operations.GetPersonasQueryParams{
            Count: 548814,
            Expand: []string{
                "porro",
                "nulla",
                "id",
            },
            Fields: []string{
                "perspiciatis",
                "nulla",
                "nihil",
                "fuga",
            },
            Name: "facilis",
            Page: 384382,
        },
    }

    ctx := context.Background()
    res, err := s.Persona.GetPersonas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonas200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->