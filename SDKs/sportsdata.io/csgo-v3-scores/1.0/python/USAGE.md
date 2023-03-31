<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.AreasCountriesRequest(
    format="json",
)
    
res = s.areas_countries(req)

if res.areas is not None:
    # handle response
```
<!-- End SDK Example Usage -->