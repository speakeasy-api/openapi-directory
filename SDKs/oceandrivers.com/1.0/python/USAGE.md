<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CompareStationRequest(
    station_name="corrupti",
)
    
res = s.od_weather.compare_station(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->