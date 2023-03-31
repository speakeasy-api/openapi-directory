<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccidentStatsGetRequest(
    year=548814,
)
    
res = s.accident_stats.accident_stats_get(req)

if res.tfl_api_presentation_entities_accident_stats_accident_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->