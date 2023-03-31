<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CorrelationRequest(
    limit="1000",
    tokens="3375, 3306",
)
    
res = s.correlation(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->