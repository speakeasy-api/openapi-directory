# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/nowpayments.io/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BillingSubPartnerAPI.GetAllTransfers(ctx, operations.GetAllTransfersRequest{
        ID: sdk.String("111"),
        Limit: sdk.String("10"),
        Offset: sdk.String("0"),
        Order: sdk.String("ASC"),
        Status: sdk.String("CREATED"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAllTransfers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BillingSubPartnerAPI](docs/billingsubpartnerapi/README.md)

* [GetAllTransfers](docs/billingsubpartnerapi/README.md#getalltransfers) - Get all transfers
* [GetSubPartnerBalance](docs/billingsubpartnerapi/README.md#getsubpartnerbalance) - Get sub-partner balance
* [GetSubPartners](docs/billingsubpartnerapi/README.md#getsubpartners) - Get sub-partners
* [GetTransfer](docs/billingsubpartnerapi/README.md#gettransfer) - Get transfer

### [PaymentsAPI](docs/paymentsapi/README.md)

* [GetEstimatedPrice](docs/paymentsapi/README.md#getestimatedprice) - Get estimated price
* [GetListOfPayments](docs/paymentsapi/README.md#getlistofpayments) - Get list of payments
* [GetPaymentStatus](docs/paymentsapi/README.md#getpaymentstatus) - Get payment status
* [GetTheMinimumPaymentAmount](docs/paymentsapi/README.md#gettheminimumpaymentamount) - Get the minimum payment amount
* [GetUpdatePaymentEstimate](docs/paymentsapi/README.md#getupdatepaymentestimate) - Get/Update payment estimate

### [PayoutsAPI](docs/payoutsapi/README.md)

* [VerifyPayout](docs/payoutsapi/README.md#verifypayout) - Verify payout

### [RecurringPaymentsAPIEmailSubscriptionsFeature](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md)

* [DeleteRecurringPayment](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#deleterecurringpayment) - Delete recurring payment
* [GetManyPlans](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getmanyplans) - Get many plans
* [GetManyRecurringPayments](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getmanyrecurringpayments) - Get many recurring payments
* [GetOnePlan](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getoneplan) - Get one plan
* [GetOneRecurringPayment](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#getonerecurringpayment) - Get one recurring payment
* [UpdatePlan](docs/recurringpaymentsapiemailsubscriptionsfeature/README.md#updateplan) - Update plan
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
