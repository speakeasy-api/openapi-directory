<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateEsimProfileCreateEsimProfileRequest(
    callback_method="PATCH",
    callback_url="provident",
    eid="distinctio",
    generate_matching_id=False,
)
    
res = s.create_esim_profile(req, operations.CreateEsimProfileSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.supersim_v1_esim_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->