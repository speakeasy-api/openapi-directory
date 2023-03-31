<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetweatherzipcodeRequest(
    license="corrupti",
    zip="provident",
)
    
res = s.weather_by_zip_code.getweatherzipcode(req)

if res.getweatherzipcode_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->