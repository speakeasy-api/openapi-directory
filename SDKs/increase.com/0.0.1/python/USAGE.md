<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.ActionARealTimeDecisionRequest(
    action_a_real_time_decision_parameters=shared.ActionARealTimeDecisionParameters(
        card_authorization=shared.ActionARealTimeDecisionParametersCardAuthorization(
            decision="decline",
        ),
        digital_wallet_authentication=shared.ActionARealTimeDecisionParametersDigitalWalletAuthentication(
            result="failure",
        ),
        digital_wallet_token=shared.ActionARealTimeDecisionParametersDigitalWalletToken(
            approval=shared.ActionARealTimeDecisionParametersDigitalWalletTokenApproval(
                card_profile_id="distinctio",
                email="Leda_Stiedemann@hotmail.com",
                phone="1-663-528-0923 x478",
            ),
            decline=shared.ActionARealTimeDecisionParametersDigitalWalletTokenDecline(
                reason="voluptatum",
            ),
        ),
    ),
    real_time_decision_id="iusto",
)
    
res = s.action_a_real_time_decision(req)

if res.real_time_decision is not None:
    # handle response
```
<!-- End SDK Example Usage -->