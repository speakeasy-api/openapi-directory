<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        token=shared.SchemeToken(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.PreviewsReadRequest(
    path_params=operations.PreviewsReadPathParams(
        file_id="optio",
    ),
)
    
res = s.previews.previews_read(req)

if res.preview_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->