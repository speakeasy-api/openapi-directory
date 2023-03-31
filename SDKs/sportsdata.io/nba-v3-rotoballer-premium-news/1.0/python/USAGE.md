<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.PremiumNewsRequest(
    format="json",
)
    
res = s.premium_news(req)

if res.news is not None:
    # handle response
```
<!-- End SDK Example Usage -->