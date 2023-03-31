# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/account/1.0.4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAccountBalanceRequest(
    api_key="abcd1234",
    api_secret="ABCDEFGH01234abc",
)
    
res = s.balance.get_account_balance(req)

if res.account_balance is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### balance

* `get_account_balance` - Get Account Balance
* `top_up_account_balance` - Top Up Account Balance

### configuration

* `change_account_settings` - Change Account Settings
* `register_sender` - Register an email sender

### secret_management

* `create_api_secret` - Create API Secret
* `retrieve_api_secret` - Retrieve one API Secret
* `retrieve_api_secrets` - Retrieve API Secrets
* `revoke_api_secret` - Revoke an API Secret
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
