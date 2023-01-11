<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetForecastRequest(
    query_params=operations.GetForecastQueryParams(
        alt=20.200001,
        dt="1985-12-02T13:43:44Z",
        lat=17.100000,
        lng=31.100000,
        ozone=10.200000,
    ),
    headers=operations.GetForecastHeaders(
        x_access_token="delectus",
    ),
)
    
res = s.get_forecast(req)

if res.forecast_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->