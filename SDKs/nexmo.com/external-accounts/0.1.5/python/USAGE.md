<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAllAccountsRequest(
    page_number=1,
    page_size=1,
    provider="viber_service_msg",
)
    
res = s.account.get_all_accounts(req, operations.GetAllAccountsSecurity(
    basic_auth=shared.SchemeBasicAuth(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
))

if res.get_all_accounts_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->