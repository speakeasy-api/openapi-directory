# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `adexchangebuyerAccountsGet` - Gets one account by ID.
* `adexchangebuyerAccountsList` - Retrieves the authenticated user's list of accounts.
* `adexchangebuyerAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `adexchangebuyerAccountsUpdate` - Updates an existing account.

### billingInfo

* `adexchangebuyerBillingInfoGet` - Returns the billing information for one account specified by account ID.
* `adexchangebuyerBillingInfoList` - Retrieves a list of billing information for all accounts of the authenticated user.

### budget

* `adexchangebuyerBudgetGet` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `adexchangebuyerBudgetPatch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `adexchangebuyerBudgetUpdate` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### creatives

* `adexchangebuyerCreativesGet` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `adexchangebuyerCreativesInsert` - Submit a new creative.
* `adexchangebuyerCreativesList` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### directDeals

* `adexchangebuyerDirectDealsGet` - Gets one direct deal by ID.
* `adexchangebuyerDirectDealsList` - Retrieves the authenticated user's list of direct deals.

### performanceReport

* `adexchangebuyerPerformanceReportList` - Retrieves the authenticated user's list of performance metrics.

### pretargetingConfig

* `adexchangebuyerPretargetingConfigDelete` - Deletes an existing pretargeting config.
* `adexchangebuyerPretargetingConfigGet` - Gets a specific pretargeting configuration
* `adexchangebuyerPretargetingConfigInsert` - Inserts a new pretargeting configuration.
* `adexchangebuyerPretargetingConfigList` - Retrieves a list of the authenticated user's pretargeting configurations.
* `adexchangebuyerPretargetingConfigPatch` - Updates an existing pretargeting config. This method supports patch semantics.
* `adexchangebuyerPretargetingConfigUpdate` - Updates an existing pretargeting config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
