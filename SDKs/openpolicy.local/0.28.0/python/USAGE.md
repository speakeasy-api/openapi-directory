<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostCompileRequest(
    query_params=operations.PostCompileQueryParams(
        explain="quia",
        instrument=True,
        metrics=True,
        pretty=False,
    ),
    request={
        "et": "blanditiis",
        "qui": "iure",
        "tempora": "sunt",
    },
)
    
res = s.compile_api.post_compile(req)

if res.post_compile_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->