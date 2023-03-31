<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRequest(
    format="xml",
    ip="8.8.8.8",
    key="provident",
    lang="pt",
)
    
res = s.get_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->