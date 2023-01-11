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
    
res = s.circuits.circuits_choices_list()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->