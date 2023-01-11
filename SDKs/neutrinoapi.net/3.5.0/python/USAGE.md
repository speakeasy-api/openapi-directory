<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        user_id=shared.SchemeUserID(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BadWordFilterRequest(
    request=operations.BadWordFilterRequestBody(
        catalog="neque",
        censor_character="molestias",
        content="libero",
        output_case="camel",
    ),
)
    
res = s.data_tools.bad_word_filter(req)

if res.bad_word_filter_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->