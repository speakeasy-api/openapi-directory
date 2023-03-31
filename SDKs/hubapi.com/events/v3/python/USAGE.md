<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetEventsV3EventsGetPageRequest(
    after="corrupti",
    before="provident",
    event_type="distinctio",
    limit=844266,
    object_id=602763,
    object_type="nulla",
    occurred_after="2021-04-22T12:08:58.275Z",
    occurred_before="2022-05-18T09:34:54.894Z",
    sort=[
        "suscipit",
        "iure",
        "magnam",
    ],
)
    
res = s.events.get_events_v3_events_get_page(req, operations.GetEventsV3EventsGetPageSecurity(
    hapikey="YOUR_API_KEY_HERE",
))

if res.collection_response_external_unified_event is not None:
    # handle response
```
<!-- End SDK Example Usage -->