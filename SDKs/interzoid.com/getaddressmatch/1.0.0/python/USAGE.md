<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetaddressmatchRequest(
    query_params=operations.GetaddressmatchQueryParams(
        address="qui",
        license="blanditiis",
    ),
)
    
res = s.street_address_similarity_key.getaddressmatch(req)

if res.getaddressmatch_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->