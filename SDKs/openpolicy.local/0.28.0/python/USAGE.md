<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PostCompileRequest(
    request_body={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    explain="illum",
    instrument=False,
    metrics=False,
    pretty=False,
)
    
res = s.compile_api.post_compile(req)

if res.post_compile_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->