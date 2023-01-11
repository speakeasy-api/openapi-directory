<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetV1EmailFreeRequest(
    query_params=operations.GetV1EmailFreeQueryParams(
        email="labore",
        format="xml",
        key="nemo",
    ),
)
    
res = s.get_v1_email_free(req)

if res.get_v1_email_free_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->