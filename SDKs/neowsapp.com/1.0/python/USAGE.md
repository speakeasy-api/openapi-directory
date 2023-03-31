<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RetrieveNEOFeedTodayRequest(
    detailed=False,
)
    
res = s.feed.retrieve_neo_feed_today(req)

if res.near_earth_object_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->