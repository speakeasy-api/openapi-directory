<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetcompanymatchRequest(
    company="Medhurst - Rau",
    license="quibusdam",
)
    
res = s.company_name_similarity_key.getcompanymatch(req)

if res.getcompanymatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->