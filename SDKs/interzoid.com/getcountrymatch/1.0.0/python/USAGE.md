<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetcountrymatchRequest(
    country="Malta",
    license="provident",
)
    
res = s.country_match_similarity_key.getcountrymatch(req)

if res.getcountrymatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->