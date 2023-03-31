<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchPhoneNumberRequest(
    add_ons=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    add_ons_data={
        "nulla": "corrupti",
        "illum": "vel",
        "error": "deserunt",
    },
    country_code="suscipit",
    phone_number="iure",
    type=[
        "debitis",
        "ipsa",
    ],
)
    
res = s.fetch_phone_number(req, operations.FetchPhoneNumberSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.lookups_v1_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->