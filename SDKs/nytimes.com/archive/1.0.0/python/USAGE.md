<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetYearMonthJSONRequest(
    path_params=operations.GetYearMonthJSONPathParams(
        month=4321778818473430320,
        year=1814554449412994505,
    ),
)
    
res = s.archive.get_year_month_json(req)

if res.get_year_month_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->