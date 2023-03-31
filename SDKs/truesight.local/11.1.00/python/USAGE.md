<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CollectNowRequest(
    device_id=548814,
    monitor_class="provident",
)
    
res = s.actions.collect_now(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->