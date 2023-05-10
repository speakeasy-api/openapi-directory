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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllTransfersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllTransfersRequest();
    $request->id = '111';
    $request->limit = '10';
    $request->offset = '0';
    $request->order = 'ASC';
    $request->status = 'CREATED';

    $response = $sdk->billingSubPartnerAPI->getAllTransfers($request);

    if ($response->getAllTransfers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billingSubPartnerAPI](docs/billingsubpartnerapi/README.md)

* [getAllTransfers](docs/billingsubpartnerapi/README.md#getalltransfers) - Get all transfers
* [getSubPartnerBalance](docs/billingsubpartnerapi/README.md#getsubpartnerbalance) - Get sub-partner balance
* [getSubPartners](docs/billingsubpartnerapi/README.md#getsubpartners) - Get sub-partners
* [getTransfer](docs/billingsubpartnerapi/README.md#gettransfer) - Get transfer

### [paymentsAPI](docs/paymentsapi/README.md)

* [getEstimatedPrice](docs/paymentsapi/README.md#getestimatedprice) - Get estimated price
* [getListOfPayments](docs/paymentsapi/README.md#getlistofpayments) - Get list of payments
* [getPaymentStatus](docs/paymentsapi/README.md#getpaymentstatus) - Get payment status
* [getTheMinimumPaymentAmount](docs/paymentsapi/README.md#gettheminimumpaymentamount) - Get the minimum payment amount
* [getUpdatePaymentEstimate](docs/paymentsapi/README.md#getupdatepaymentestimate) - Get/Update payment estimate

### [payoutsAPI](docs/payoutsapi/README.md)

* [verifyPayout](docs/payoutsapi/README.md#verifypayout) - Verify payout

### [recurringPaymentsAPIEmailSubscriptionsFeature](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md)

* [deleteRecurringPayment](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#deleterecurringpayment) - Delete recurring payment
* [getManyPlans](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getmanyplans) - Get many plans
* [getManyRecurringPayments](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getmanyrecurringpayments) - Get many recurring payments
* [getOnePlan](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getoneplan) - Get one plan
* [getOneRecurringPayment](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getonerecurringpayment) - Get one recurring payment
* [updatePlan](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#updateplan) - Update plan
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
