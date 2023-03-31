<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetYearMonthJSONRequest(
    month=548814,
    year=592845,
)
    
res = s.archive.get_year_month_json(req)

if res.get_year_month_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->