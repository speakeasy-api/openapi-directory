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
            BearerAuth: shared.SchemeBearerAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.PostCheckCodeRequest{
        Request: operations.PostCheckCodeRequestBody{
            Code: "corrupti",
            Email: "Micheal_Sporer@yahoo.com",
        },
    }

    ctx := context.Background()
    res, err := s.PostCheckCode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCheckCode200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->