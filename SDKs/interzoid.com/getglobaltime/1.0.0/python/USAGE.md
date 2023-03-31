<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetglobaltimeRequest(
    license="corrupti",
    locale="provident",
)
    
res = s.current_global_time.getglobaltime(req)

if res.getglobaltime_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->