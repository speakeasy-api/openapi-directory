<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBulkLookupRequest(
    format="XML",
    ips="1.1.1.1,2.2.2.2",
    key="2517bc4fc3f790e8f09bc808bb63b899",
    lang="AR",
    params="currency",
)
    
res = s.get_bulk_lookup(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->