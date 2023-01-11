<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CollectNowRequest(
    path_params=operations.CollectNowPathParams(
        device_id=7415012023453953318,
    ),
    query_params=operations.CollectNowQueryParams(
        monitor_class="velit",
    ),
)
    
res = s.actions.collect_now(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->