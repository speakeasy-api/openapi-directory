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
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.GetAuth(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->