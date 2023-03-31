<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRenderRequest(
    id="corrupti",
)
    
res = s.edit.get_render(req, operations.GetRenderSecurity(
    developer_key="YOUR_API_KEY_HERE",
))

if res.render_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->