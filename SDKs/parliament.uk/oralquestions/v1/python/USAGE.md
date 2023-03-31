<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PublishedEarlyDayMotionGetRequest(
    id=548814,
)
    
res = s.early_day_motions.published_early_day_motion_get(req)

if res.api_response_list_published_written_question is not None:
    # handle response
```
<!-- End SDK Example Usage -->