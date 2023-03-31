<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.GetWellKnownMercureRequest(
    last_event_id="corrupti",
    last_event_id_query_parameter="provident",
    topic=[
        "quibusdam",
        "unde",
        "nulla",
    ],
)
    
res = s.get_well_known_mercure(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->