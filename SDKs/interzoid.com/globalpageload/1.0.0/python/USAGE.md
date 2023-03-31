<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GlobalpageloadRequest(
    license="corrupti",
    origin="provident",
    url="distinctio",
)
    
res = s.page_load_performance_time.globalpageload(req)

if res.globalpageload_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->