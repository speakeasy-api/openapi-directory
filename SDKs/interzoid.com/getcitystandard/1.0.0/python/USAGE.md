<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetcitystandardRequest(
    city="Laruecester",
    license="quibusdam",
)
    
res = s.city_data_standardization.getcitystandard(req)

if res.getcitystandard_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->