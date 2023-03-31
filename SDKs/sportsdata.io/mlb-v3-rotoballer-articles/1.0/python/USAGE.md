<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = operations.RotoballerArticlesRequest(
    format="json",
)
    
res = s.rotoballer_articles(req)

if res.articles is not None:
    # handle response
```
<!-- End SDK Example Usage -->