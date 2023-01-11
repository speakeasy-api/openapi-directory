<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FetchPhoneNumberRequest(
    security=operations.FetchPhoneNumberSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchPhoneNumberPathParams(
        phone_number="quia",
    ),
    query_params=operations.FetchPhoneNumberQueryParams(
        address_country_code="illum",
        address_line1="velit",
        address_line2="nihil",
        city="fuga",
        country_code="voluptas",
        date_of_birth="nesciunt",
        fields="perferendis",
        first_name="incidunt",
        last_name="necessitatibus",
        national_id="est",
        postal_code="in",
        state="sed",
    ),
)
    
res = s.fetch_phone_number(req)

if res.lookups_v2_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->