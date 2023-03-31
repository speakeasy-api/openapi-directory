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
            Option1: &shared.SecurityOption1{
                Jwt: "YOUR_API_KEY_HERE",
                APIKey: "YOUR_API_KEY_HERE",
                StreamAuthType: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := shared.GetCallTokenRequest{
        User: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        UserID: "illum",
    }

    ctx := context.Background()
    res, err := s.GetCallToken1(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCallTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->