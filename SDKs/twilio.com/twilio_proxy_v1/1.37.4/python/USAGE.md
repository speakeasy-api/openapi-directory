<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateMessageInteractionRequest(
    security=operations.CreateMessageInteractionSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateMessageInteractionPathParams(
        participant_sid="ratione",
        service_sid="officia",
        session_sid="ipsa",
    ),
    request=operations.CreateMessageInteractionCreateMessageInteractionRequest(
        body="quibusdam",
        media_url=[
            "deleniti",
            "voluptas",
        ],
    ),
)
    
res = s.create_message_interaction(req)

if res.proxy_v1_service_session_participant_message_interaction is not None:
    # handle response
```
<!-- End SDK Example Usage -->