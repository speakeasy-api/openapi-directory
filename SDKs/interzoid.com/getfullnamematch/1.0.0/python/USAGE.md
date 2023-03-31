<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetfullnamematchRequest(
    fullname="corrupti",
    license="provident",
)
    
res = s.full_name_match_similarity_key.getfullnamematch(req)

if res.getfullnamematch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->