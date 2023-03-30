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

    req := operations.DeleteRealmAttackDetectionBruteForceUsersRequest{
        PathParams: operations.DeleteRealmAttackDetectionBruteForceUsersPathParams{
            Realm: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.AttackDetection.DeleteRealmAttackDetectionBruteForceUsers(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->