<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AccessTokenToPut(
    card_id=548814,
    user_id=592845,
)
    
res = s.access_token.access_token_put_form(req)

if res.access_token_put_form_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->