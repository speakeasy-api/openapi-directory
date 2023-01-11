<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRenderRequest(
    security=operations.GetRenderSecurity(
        developer_key=shared.SchemeDeveloperKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.GetRenderPathParams(
        id="vel",
    ),
)
    
res = s.edit.get_render(req)

if res.render_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->