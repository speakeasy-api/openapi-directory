<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetPublicHistoryRequest(
    from_="corrupti",
    q="provident",
    to="distinctio",
)
    
res = s.default.get_public_history(req)

if res.get_public_history_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->