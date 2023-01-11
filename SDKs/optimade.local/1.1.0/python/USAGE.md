<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetEntryInfoInfoEntryGetRequest(
    path_params=operations.GetEntryInfoInfoEntryGetPathParams(
        entry="vero",
    ),
)
    
res = s.info.get_entry_info_info_entry_get(req)

if res.entry_info_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->