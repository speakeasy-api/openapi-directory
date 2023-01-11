<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer_auth=shared.SchemeBearerAuth(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.ReadDependenciesV1EnCoreWebSmDependenciesPostRequest(
    request=shared.UserRequestIn(
        text="sapiente",
    ),
)
    
res = s.read_dependencies_v1_en_core_web_sm_dependencies_post(req)

if res.dependencies_out is not None:
    # handle response
```
<!-- End SDK Example Usage -->