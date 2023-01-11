<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CrawlRequest(
    path_params=operations.CrawlPathParams(
        query="maiores",
    ),
)
    
res = s.crawl(req)

if res.crawl_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->