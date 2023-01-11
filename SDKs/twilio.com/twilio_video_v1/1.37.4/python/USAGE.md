<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateCompositionRequest(
    security=operations.CreateCompositionSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCompositionCreateCompositionRequest(
        audio_sources=[
            "qui",
            "quisquam",
        ],
        audio_sources_excluded=[
            "non",
        ],
        format="mp4",
        resolution="ipsam",
        room_sid="aperiam",
        status_callback="quia",
        status_callback_method="GET",
        trim=True,
        video_layout="error",
    ),
)
    
res = s.create_composition(req)

if res.video_v1_composition is not None:
    # handle response
```
<!-- End SDK Example Usage -->