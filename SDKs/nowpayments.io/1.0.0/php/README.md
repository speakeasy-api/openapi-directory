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


### billingSubPartnerAPI

* `getAllTransfers` - Get all transfers
* `getSubPartnerBalance` - Get sub-partner balance
* `getSubPartners` - Get sub-partners
* `getTransfer` - Get transfer

### paymentsAPI

* `getEstimatedPrice` - Get estimated price
* `getListOfPayments` - Get list of payments
* `getPaymentStatus` - Get payment status
* `getTheMinimumPaymentAmount` - Get the minimum payment amount
* `getUpdatePaymentEstimate` - Get/Update payment estimate

### payoutsAPI

* `verifyPayout` - Verify payout

### recurringPaymentsAPIEmailSubscriptionsFeature

* `deleteRecurringPayment` - Delete recurring payment
* `getManyPlans` - Get many plans
* `getManyRecurringPayments` - Get many recurring payments
* `getOnePlan` - Get one plan
* `getOneRecurringPayment` - Get one recurring payment
* `updatePlan` - Update plan
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
