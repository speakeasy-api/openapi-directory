<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateCompositionCreateCompositionRequest(
    audio_sources=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    audio_sources_excluded=[
        "nulla",
        "corrupti",
        "illum",
    ],
    format="mp4",
    resolution="error",
    room_sid="deserunt",
    status_callback="http://innocent-effect.org",
    status_callback_method="HEAD",
    trim=False,
    video_layout="delectus",
)
    
res = s.create_composition(req, operations.CreateCompositionSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.video_v1_composition is not None:
    # handle response
```
<!-- End SDK Example Usage -->