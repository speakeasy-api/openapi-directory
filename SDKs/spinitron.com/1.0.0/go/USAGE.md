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
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.GetPersonasRequest{
        Count: 548814,
        Expand: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        Fields: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Name: "deserunt",
        Page: 384382,
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