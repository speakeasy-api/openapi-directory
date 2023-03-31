<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.gateway.get_v0_5_well_known_openid_configuration()

if res.open_id_configuration is not None:
    # handle response
```
<!-- End SDK Example Usage -->