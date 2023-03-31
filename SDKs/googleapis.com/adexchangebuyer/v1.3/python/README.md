# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/adexchangebuyer/v1.3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdexchangebuyerAccountsGetRequest(
    alt="json",
    fields_="corrupti",
    id=592845,
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
)
    
res = s.accounts.adexchangebuyer_accounts_get(req, operations.AdexchangebuyerAccountsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `adexchangebuyer_accounts_get` - Gets one account by ID.
* `adexchangebuyer_accounts_list` - Retrieves the authenticated user's list of accounts.
* `adexchangebuyer_accounts_patch` - Updates an existing account. This method supports patch semantics.
* `adexchangebuyer_accounts_update` - Updates an existing account.

### billing_info

* `adexchangebuyer_billing_info_get` - Returns the billing information for one account specified by account ID.
* `adexchangebuyer_billing_info_list` - Retrieves a list of billing information for all accounts of the authenticated user.

### budget

* `adexchangebuyer_budget_get` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `adexchangebuyer_budget_patch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `adexchangebuyer_budget_update` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### creatives

* `adexchangebuyer_creatives_get` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `adexchangebuyer_creatives_insert` - Submit a new creative.
* `adexchangebuyer_creatives_list` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### direct_deals

* `adexchangebuyer_direct_deals_get` - Gets one direct deal by ID.
* `adexchangebuyer_direct_deals_list` - Retrieves the authenticated user's list of direct deals.

### performance_report

* `adexchangebuyer_performance_report_list` - Retrieves the authenticated user's list of performance metrics.

### pretargeting_config

* `adexchangebuyer_pretargeting_config_delete` - Deletes an existing pretargeting config.
* `adexchangebuyer_pretargeting_config_get` - Gets a specific pretargeting configuration
* `adexchangebuyer_pretargeting_config_insert` - Inserts a new pretargeting configuration.
* `adexchangebuyer_pretargeting_config_list` - Retrieves a list of the authenticated user's pretargeting configurations.
* `adexchangebuyer_pretargeting_config_patch` - Updates an existing pretargeting config. This method supports patch semantics.
* `adexchangebuyer_pretargeting_config_update` - Updates an existing pretargeting config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
