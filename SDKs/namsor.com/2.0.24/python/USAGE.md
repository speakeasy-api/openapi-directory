<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.AnonymizeRequest(
    anonymized=False,
    source="corrupti",
    token="provident",
)
    
res = s.admin.anonymize(req)

if res.api_key_out is not None:
    # handle response
```
<!-- End SDK Example Usage -->