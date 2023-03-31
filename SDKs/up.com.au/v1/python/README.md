# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/up.com.au/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.GetAccountsRequest(
    filter_account_type="TRANSACTIONAL",
    filter_ownership_type="JOINT",
    page_size=715190,
)
    
res = s.accounts.get_accounts(req)

if res.list_accounts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `get_accounts` - List accounts
* `get_accounts_id_` - Retrieve account

### categories

* `get_categories` - List categories
* `get_categories_id_` - Retrieve category
* `patch_transactions_transaction_id_relationships_category` - Categorize transaction

### tags

* `delete_transactions_transaction_id_relationships_tags` - Remove tags from transaction
* `get_tags` - List tags
* `post_transactions_transaction_id_relationships_tags` - Add tags to transaction

### transactions

* `get_accounts_account_id_transactions` - List transactions by account
* `get_transactions` - List transactions
* `get_transactions_id_` - Retrieve transaction

### utility_endpoints

* `get_util_ping` - Ping

### webhooks

* `delete_webhooks_id_` - Delete webhook
* `get_webhooks` - List webhooks
* `get_webhooks_id_` - Retrieve webhook
* `get_webhooks_webhook_id_logs` - List webhook logs
* `post_webhooks` - Create webhook
* `post_webhooks_webhook_id_ping` - Ping webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
