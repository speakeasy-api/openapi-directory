<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="YOUR_API_KEY_HERE",
    ),
)

    
res = s.circuits.circuits_choices_list()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->