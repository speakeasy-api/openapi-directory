<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.PostCheckCodeRequestBody(
    code="corrupti",
    email="Micheal_Sporer@yahoo.com",
)
    
res = s.post_check_code(req)

if res.post_check_code_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->