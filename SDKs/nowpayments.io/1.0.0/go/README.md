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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAllTransfersRequest{
        ID: "111",
        Limit: "10",
        Offset: "0",
        Order: "ASC",
        Status: "CREATED",
    }

    ctx := context.Background()
    res, err := s.BillingSubPartnerAPI.GetAllTransfers(ctx, req)
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


### BillingSubPartnerAPI

* `GetAllTransfers` - Get all transfers
* `GetSubPartnerBalance` - Get sub-partner balance
* `GetSubPartners` - Get sub-partners
* `GetTransfer` - Get transfer

### PaymentsAPI

* `GetEstimatedPrice` - Get estimated price
* `GetListOfPayments` - Get list of payments
* `GetPaymentStatus` - Get payment status
* `GetTheMinimumPaymentAmount` - Get the minimum payment amount
* `GetUpdatePaymentEstimate` - Get/Update payment estimate

### PayoutsAPI

* `VerifyPayout` - Verify payout

### RecurringPaymentsAPIEmailSubscriptionsFeature

* `DeleteRecurringPayment` - Delete recurring payment
* `GetManyPlans` - Get many plans
* `GetManyRecurringPayments` - Get many recurring payments
* `GetOnePlan` - Get one plan
* `GetOneRecurringPayment` - Get one recurring payment
* `UpdatePlan` - Update plan
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
