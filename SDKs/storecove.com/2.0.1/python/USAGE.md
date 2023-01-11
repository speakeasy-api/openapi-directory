<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateAdministrationRequest(
    path_params=operations.CreateAdministrationPathParams(
        legal_entity_id=3526217757577307766,
    ),
    request="sit",
)
    
res = s.administrations.create_administration(req)

if res.administration is not None:
    # handle response
```
<!-- End SDK Example Usage -->