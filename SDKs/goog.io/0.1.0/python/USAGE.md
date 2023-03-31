<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.CrawlRequest(
    query="corrupti",
)
    
res = s.crawl(req)

if res.crawl_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->