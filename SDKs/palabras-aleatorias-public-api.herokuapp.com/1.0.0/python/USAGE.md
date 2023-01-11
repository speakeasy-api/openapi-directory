<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAddWordRequest(
    query_params=operations.GetAddWordQueryParams(
        author="ut",
        definition="consequatur",
        related="at",
        word="quos",
    ),
)
    
res = s.get_add_word(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->