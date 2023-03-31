<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddUserToAccountRequestBody(
    account=operations.AddUserToAccountRequestBodyAccount(
        account_id="corrupti",
        domain="provident",
    ),
    users=[
        operations.AddUserToAccountRequestBodyUsers(
            identification=operations.AddUserToAccountRequestBodyUsersIdentification(
                email="Leda_Stiedemann@hotmail.com",
                user_id="vel",
            ),
        ),
        operations.AddUserToAccountRequestBodyUsers(
            identification=operations.AddUserToAccountRequestBodyUsersIdentification(
                email="Luna.Hoppe@yahoo.com",
                user_id="debitis",
            ),
        ),
        operations.AddUserToAccountRequestBodyUsers(
            identification=operations.AddUserToAccountRequestBodyUsersIdentification(
                email="Vincenzo.Goldner@gmail.com",
                user_id="minus",
            ),
        ),
    ],
)
    
res = s.accounts.add_user_to_account(req)

if res.add_user_to_account_201_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->