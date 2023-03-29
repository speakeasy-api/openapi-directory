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
            AccessToken: shared.SchemeAccessToken{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Account.GetAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->