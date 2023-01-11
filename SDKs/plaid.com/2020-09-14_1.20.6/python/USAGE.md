<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
        plaid_version=shared.SchemePlaidVersion(
            api_key="YOUR_API_KEY_HERE",
        ),
        secret=shared.SchemeSecret(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AccountsBalanceGetRequest(
    request=shared.AccountsBalanceGetRequest(
        access_token="dolorem",
        client_id="officia",
        options=shared.AccountsBalanceGetRequestOptions(
            account_ids=[
                "dolorum",
            ],
            min_last_updated_datetime="1995-12-11T01:46:46Z",
        ),
        secret="sed",
    ),
)
    
res = s.plaid.accounts_balance_get(req)

if res.accounts_get_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->