<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetcountrymatchRequest(
    query_params=operations.GetcountrymatchQueryParams(
        country="magni",
        license="officiis",
    ),
)
    
res = s.country_match_similarity_key.getcountrymatch(req)

if res.getcountrymatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->