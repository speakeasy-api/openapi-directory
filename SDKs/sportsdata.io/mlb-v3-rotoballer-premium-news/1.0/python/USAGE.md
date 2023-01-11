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
    
req = operations.PremiumNewsRequest(
    path_params=operations.PremiumNewsPathParams(
        format="json",
    ),
)
    
res = s.premium_news(req)

if res.news is not None:
    # handle response
```
<!-- End SDK Example Usage -->