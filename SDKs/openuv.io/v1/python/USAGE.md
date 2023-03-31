<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetForecastRequest(
    alt=1050,
    dt="2018-02-04T04:39:06.467Z",
    lat=78.67,
    lng=115.67,
    ozone=304.5,
    x_access_token="corrupti",
)
    
res = s.get_forecast(req)

if res.forecast_results is not None:
    # handle response
```
<!-- End SDK Example Usage -->