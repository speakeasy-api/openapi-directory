<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteContentRequest(
    sid="corrupti",
)
    
res = s.delete_content(req, operations.DeleteContentSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->