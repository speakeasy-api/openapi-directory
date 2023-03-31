<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MirrorAccountsInsertRequest(
    account=shared.Account(
        auth_tokens=[
            shared.AuthToken(
                auth_token="provident",
                type="distinctio",
            ),
            shared.AuthToken(
                auth_token="quibusdam",
                type="unde",
            ),
            shared.AuthToken(
                auth_token="nulla",
                type="corrupti",
            ),
        ],
        features=[
            "vel",
            "error",
            "deserunt",
            "suscipit",
        ],
        password="iure",
        user_data=[
            shared.UserData(
                key="debitis",
                value="ipsa",
            ),
            shared.UserData(
                key="delectus",
                value="tempora",
            ),
        ],
    ),
    account_name="suscipit",
    account_type="molestiae",
    alt="json",
    fields_="minus",
    key="placeat",
    oauth_token="voluptatum",
    pretty_print=False,
    quota_user="iusto",
    user_ip="excepturi",
    user_token="nisi",
)
    
res = s.accounts.mirror_accounts_insert(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->