<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetQueryJSONRequest(
    date_range="corrupti",
    elevation=592845,
    facets="1",
    filter="quibusdam",
    latitude="unde",
    limit=857946,
    longitude="corrupti",
    name="illum",
    offset=423655,
    query="error",
    sort="deserunt",
    sw="suscipit",
)
    
res = s.events.get_query_json(req)

if res.get_query_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->