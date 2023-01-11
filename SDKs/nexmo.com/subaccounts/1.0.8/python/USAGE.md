<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateSubAccountRequest(
    security=operations.CreateSubAccountSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateSubAccountPathParams(
        api_key="sed",
    ),
    request=shared.NewSubaccountRequest(
        name="et",
        secret="quos",
        use_primary_account_balance=False,
    ),
)
    
res = s.subaccount_management.create_sub_account(req)

if res.subaccount_create_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->