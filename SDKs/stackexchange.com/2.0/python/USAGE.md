<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAccessTokensAccessTokensRequest(
    path_params=operations.GetAccessTokensAccessTokensPathParams(
        access_tokens="quia",
    ),
    query_params=operations.GetAccessTokensAccessTokensQueryParams(
        callback="eum",
        filter="numquam",
        page=6423785216339369715,
        pagesize=8269079274911214111,
    ),
)
    
res = s.get_access_tokens_access_tokens_(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->