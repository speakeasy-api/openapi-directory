<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetEventsRequest(
    company="Medhurst - Rau",
    deal="quibusdam",
    nexttoken="unde",
    queryexecutionid="nulla",
    site="corrupti",
    type="contacts",
)
    
res = s.developers.get_events(req)

if res.event_records is not None:
    # handle response
```
<!-- End SDK Example Usage -->