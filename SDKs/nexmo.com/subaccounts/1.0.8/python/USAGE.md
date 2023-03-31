<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateSubAccountRequest(
    new_subaccount_request=shared.NewSubaccountRequest(
        name="Subaccount department A",
        secret="Password123",
        use_primary_account_balance=False,
    ),
    api_key="corrupti",
)
    
res = s.subaccount_management.create_sub_account(req, operations.CreateSubAccountSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.subaccount_create_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->