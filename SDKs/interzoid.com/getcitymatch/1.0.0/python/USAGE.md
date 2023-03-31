<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetcitymatchRequest(
    city="Laruecester",
    license="quibusdam",
)
    
res = s.city_name_similarity_key.getcitymatch(req)

if res.getcitymatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->