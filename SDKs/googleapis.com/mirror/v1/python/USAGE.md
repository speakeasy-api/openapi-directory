<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MirrorAccountsInsertRequest(
    path_params=operations.MirrorAccountsInsertPathParams(
        account_name="quo",
        account_type="dolorem",
        user_token="quod",
    ),
    query_params=operations.MirrorAccountsInsertQueryParams(
        alt="json",
        fields="eius",
        key="dolor",
        oauth_token="maiores",
        pretty_print=False,
        quota_user="recusandae",
        user_ip="in",
    ),
    request=shared.Account(
        auth_tokens=[
            shared.AuthToken(
                auth_token="ipsum",
                type="mollitia",
            ),
        ],
        features=[
            "ipsum",
            "vero",
            "autem",
        ],
        password="laboriosam",
        user_data=[
            shared.UserData(
                key="incidunt",
                value="distinctio",
            ),
            shared.UserData(
                key="labore",
                value="magnam",
            ),
        ],
    ),
)
    
res = s.accounts.mirror_accounts_insert(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->