<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApplyYaraRulesRequest(
    request="quibusdam",
)
    
res = s.apply_yara_rules(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->