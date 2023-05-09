<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActionARealTimeDecision(ctx, operations.ActionARealTimeDecisionRequest{
        ActionARealTimeDecisionParameters: shared.ActionARealTimeDecisionParameters{
            CardAuthorization: &shared.ActionARealTimeDecisionParametersCardAuthorization{
                Decision: shared.ActionARealTimeDecisionParametersCardAuthorizationDecisionEnumDecline,
            },
            DigitalWalletAuthentication: &shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication{
                Result: shared.ActionARealTimeDecisionParametersDigitalWalletAuthenticationResultEnumFailure,
            },
            DigitalWalletToken: &shared.ActionARealTimeDecisionParametersDigitalWalletToken{
                Approval: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval{
                    CardProfileID: "distinctio",
                    Email: sdk.String("Leda_Stiedemann@hotmail.com"),
                    Phone: sdk.String("1-663-528-0923 x478"),
                },
                Decline: &shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline{
                    Reason: sdk.String("voluptatum"),
                },
            },
        },
        RealTimeDecisionID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RealTimeDecision != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->