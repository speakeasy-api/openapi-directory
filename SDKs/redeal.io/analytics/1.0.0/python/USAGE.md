<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetEventsRequest(
    query_params=operations.GetEventsQueryParams(
        company="praesentium",
        deal="totam",
        nexttoken="asperiores",
        queryexecutionid="deserunt",
        site="ex",
        type="clicks",
    ),
)
    
res = s.developers.get_events(req)

if res.event_records is not None:
    # handle response
```
<!-- End SDK Example Usage -->