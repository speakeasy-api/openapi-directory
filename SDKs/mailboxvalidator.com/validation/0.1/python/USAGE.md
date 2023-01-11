<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetV1ValidationSingleRequest(
    query_params=operations.GetV1ValidationSingleQueryParams(
        email="ea",
        format="xml",
        key="aliquid",
    ),
)
    
res = s.get_v1_validation_single(req)

if res.get_v1_validation_single_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->