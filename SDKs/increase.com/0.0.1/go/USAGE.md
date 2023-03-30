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

    req := operations.ActionARealTimeDecisionRequest{
        PathParams: operations.ActionARealTimeDecisionPathParams{
            RealTimeDecisionID: "corrupti",
        },
        Request: shared.ActionARealTimeDecisionParameters{
            CardAuthorization: &shared.ActionARealTimeDecisionParametersCardAuthorization{
                Decision: "decline",
            },
            DigitalWalletAuthentication: &shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication{
                Result: "failure",
            },
            DigitalWalletToken: &shared.ActionARealTimeDecisionParametersDigitalWalletToken{
                Approval: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval{
                    CardProfileID: "quibusdam",
                    Email: "Ryan.Little62@yahoo.com",
                    Phone: "1-542-909-2347 x8545",
                },
                Decline: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline{
                    Reason: "nisi",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.ActionARealTimeDecision(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RealTimeDecision != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->