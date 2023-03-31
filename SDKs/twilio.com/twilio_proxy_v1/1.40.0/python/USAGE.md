<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateMessageInteractionRequest(
    participant_sid="corrupti",
    request_body=operations.CreateMessageInteractionCreateMessageInteractionRequest(
        body="provident",
        media_url=[
            "https://outstanding-strait.name",
            "https://impressive-ox.name",
            "http://innocent-effect.org",
        ],
    ),
    service_sid="ipsa",
    session_sid="delectus",
)
    
res = s.create_message_interaction(req, operations.CreateMessageInteractionSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.proxy_v1_service_session_participant_message_interaction is not None:
    # handle response
```
<!-- End SDK Example Usage -->