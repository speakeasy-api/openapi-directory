<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddUserToAccountRequest(
    path_params=operations.AddUserToAccountPathParams(
        account_id="perferendis",
    ),
    request=operations.AddUserToAccountRequestBody(
        user_id="qui",
    ),
)
    
res = s.accounts.add_user_to_account(req)

if res.add_user_to_account_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->