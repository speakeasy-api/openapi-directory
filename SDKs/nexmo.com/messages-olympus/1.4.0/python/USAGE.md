<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SendMessageRequestBody3Video(
    channel="whatsapp",
    client_ref="distinctio",
    from_="447700900001",
    message_type="video",
    to="447700900000",
    video=operations.SendMessageRequestBody3VideoVideo(
        url="https://example.com/video.mp4",
    ),
)
    
res = s.send_message(req, operations.SendMessageSecurity(
    basic_auth=shared.SchemeBasicAuth(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
))

if res.send_message_202_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->