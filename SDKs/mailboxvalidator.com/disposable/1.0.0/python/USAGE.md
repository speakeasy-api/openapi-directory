<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetV1EmailDisposableRequest(
    query_params=operations.GetV1EmailDisposableQueryParams(
        email="minus",
        format="json",
        key="dolor",
    ),
)
    
res = s.get_v1_email_disposable(req)

if res.get_v1_email_disposable_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->