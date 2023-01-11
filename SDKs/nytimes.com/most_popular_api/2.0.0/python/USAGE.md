<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetMostemailedSectionTimePeriodJSONRequest(
    security=operations.GetMostemailedSectionTimePeriodJSONSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.GetMostemailedSectionTimePeriodJSONPathParams(
        section="Arts",
        time_period="7",
    ),
)
    
res = s.get_mostemailed_section_time_period_json(req)

if res.get_mostemailed_section_time_period_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->