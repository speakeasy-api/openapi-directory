<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
        user_id="YOUR_API_KEY_HERE",
    ),
)


req = operations.BadWordFilterRequestBody(
    catalog="corrupti",
    censor_character="provident",
    content="distinctio",
)
    
res = s.data_tools.bad_word_filter(req)

if res.bad_word_filter_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->