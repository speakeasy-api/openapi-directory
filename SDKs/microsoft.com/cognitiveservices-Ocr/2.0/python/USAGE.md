<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apim_key=shared.SchemeApimKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BatchReadFileRequest(
    request=shared.ImageURL(
        url="veniam",
    ),
)
    
res = s.batch_read_file(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->