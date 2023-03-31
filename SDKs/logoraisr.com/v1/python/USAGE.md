<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        token="YOUR_API_KEY_HERE",
    ),
)


req = operations.PreviewsReadRequest(
    file_id="corrupti",
)
    
res = s.previews.previews_read(req)

if res.preview_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->