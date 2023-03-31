<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAMapRequest(
    x_app_token="corrupti",
    app_token="provident",
    constraint="distinctio",
    entity_id="quibusdam",
    variable="unde",
)
    
res = s.create_a_map(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->