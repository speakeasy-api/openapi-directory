<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApplyYaraRulesRequestBody(
    file=operations.ApplyYaraRulesRequestBodyFile(
        content="corrupti".encode(),
        file="provident",
    ),
    is_unpacking_required="false",
    rules=[
        "unde",
        "nulla",
        "corrupti",
        "illum",
    ],
)
    
res = s.apply_yara_rules(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->