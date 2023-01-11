<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
res = s.pdf.get_api_pdf()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->