<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GroundhogRequest(
    slug="corrupti",
)
    
res = s.groundhogs.groundhog(req)

if res.groundhog_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->