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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := operations.ActionARealTimeDecisionRequest{
        ActionARealTimeDecisionParameters: shared.ActionARealTimeDecisionParameters{
            CardAuthorization: &shared.ActionARealTimeDecisionParametersCardAuthorization{
                Decision: "decline",
            },
            DigitalWalletAuthentication: &shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication{
                Result: "failure",
            },
            DigitalWalletToken: &shared.ActionARealTimeDecisionParametersDigitalWalletToken{
                Approval: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval{
                    CardProfileID: "distinctio",
                    Email: "Leda_Stiedemann@hotmail.com",
                    Phone: "1-663-528-0923 x478",
                },
                Decline: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline{
                    Reason: "voluptatum",
                },
            },
        },
        RealTimeDecisionID: "iusto",
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