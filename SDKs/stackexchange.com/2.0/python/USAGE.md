<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccessTokensAccessTokensRequest(
    access_tokens="corrupti",
    callback="provident",
    filter="distinctio",
    page=844266,
    pagesize=602763,
)
    
res = s.get_access_tokens_access_tokens_(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->