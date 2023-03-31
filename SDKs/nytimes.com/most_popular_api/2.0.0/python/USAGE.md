<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETMostemailedSectionTimePeriodJSONRequest(
    section="Public Editor",
    time_period="7",
)
    
res = s.get_mostemailed_section_time_period_json(req, operations.GETMostemailedSectionTimePeriodJSONSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_mostemailed_section_time_period_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->