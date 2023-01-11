<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetweatherRequest(
    query_params=operations.GetweatherQueryParams(
        city="sit",
        license="occaecati",
        state="optio",
    ),
)
    
res = s.weather_by_city_and_state.getweather(req)

if res.getweather_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->