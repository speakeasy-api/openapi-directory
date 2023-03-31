<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FetchPhoneNumberRequest(
    address_country_code="corrupti",
    address_line1="provident",
    address_line2="distinctio",
    city="New Orleans",
    country_code="nulla",
    date_of_birth="corrupti",
    fields_="illum",
    first_name="Henry",
    last_name="Mueller",
    national_id="deserunt",
    phone_number="suscipit",
    postal_code="28092",
    state="suscipit",
)
    
res = s.fetch_phone_number(req, operations.FetchPhoneNumberSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.lookups_v2_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->