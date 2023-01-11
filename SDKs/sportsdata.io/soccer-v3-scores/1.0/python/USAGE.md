<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AreasCountriesRequest(
    path_params=operations.AreasCountriesPathParams(
        format="json",
    ),
)
    
res = s.areas_countries(req)

if res.areas is not None:
    # handle response
```
<!-- End SDK Example Usage -->