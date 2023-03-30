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
    s := sdk.New()

    req := operations.FetchUserRequest{
        Security: operations.FetchUserSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchUserPathParams{
            Sid: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.FetchUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FrontlineV1User != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->