# PaymentsAPI

### Available Operations

* [GetEstimatedPrice](#getestimatedprice) - Get estimated price
* [GetListOfPayments](#getlistofpayments) - Get list of payments
* [GetPaymentStatus](#getpaymentstatus) - Get payment status
* [GetTheMinimumPaymentAmount](#gettheminimumpaymentamount) - Get the minimum payment amount
* [GetUpdatePaymentEstimate](#getupdatepaymentestimate) - Get/Update payment estimate

## GetEstimatedPrice

This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.

### Example Usage

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
    res, err := s.PaymentsAPI.GetEstimatedPrice(ctx, operations.GetEstimatedPriceRequest{
        Amount: sdk.String("3999.5000"),
        CurrencyFrom: sdk.String("usd"),
        CurrencyTo: sdk.String("btc"),
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEstimatedPrice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetListOfPayments

Returns the entire list of all transactions, created with certain API key.
The list of optional parameters:
- limit - number of records in one page. (possible values: from 1 to 500)
- page - the page number you want to get (possible values: from 0 to **page count - 1**)
- sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
- orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
- dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
- dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).

### Example Usage

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
    res, err := s.PaymentsAPI.GetListOfPayments(ctx, operations.GetListOfPaymentsRequest{
        DateFrom: sdk.String("2020-01-01"),
        DateTo: sdk.String("2021-01-01"),
        Limit: sdk.String("10"),
        OrderBy: sdk.String("asc"),
        Page: sdk.String("0"),
        SortBy: sdk.String("created_at"),
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListOfPayments200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetPaymentStatus

Get the actual information about the payment. You need to provide the ID of the payment in the request.

NOTE! You should make the get payment status request with the same API key that you used in the create payment request.
Here is the list of avalable statuses:
- waiting - waiting for the customer to send the payment. The initial status of each payment.
- confirming - the transaction is being processed on the blockchain. Appears when NOWPayments detect the funds from the user on the blockchain.
- confirmed -  the process is confirmed by the blockchain. Customer’s funds have accumulated enough confirmations.
- sending - the funds are being sent to your personal wallet. We are in the process of sending the funds to you.
- partially_paid -  it shows that the customer sent the less than the actual price. Appears when the funds have arrived in your wallet.
- finished - the funds have reached your personal address and the payment is finished.
- failed -  the payment wasn't completed due to the error of some kind.
- refunded -  the funds were refunded back to the user.
- expired - the user didn't send the funds to the specified address in the 24 hour time window.

Additional info:
- outcome_amount - this parameter shows the amount that will be (or is already) received on your Outcome Wallet once the transaction is settled.
- outcome_currency - this parameter shows the currency in which the transaction will be settled.
- invoice_id - this parameter shows invoice ID from which the payment was created

### Example Usage

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
    res, err := s.PaymentsAPI.GetPaymentStatus(ctx, operations.GetPaymentStatusRequest{
        PaymentID: "impedit",
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPaymentStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTheMinimumPaymentAmount

Get the minimum payment amount for a specific pair.

You can provide both currencies in the pair or just currency\_from, and we will calculate the minimum payment amount for currency\_from and currency which you have specified as the outcome in the Store Settings.

You can also specify one of the fiat currencies in the currency\_from. In this case, the minimum payment will be calculated in this fiat currency.

You can also add field fiat\_equivalent (optional field) to get the fiat equivalent of the minimum amount.

In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.

### Example Usage

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
    res, err := s.PaymentsAPI.GetTheMinimumPaymentAmount(ctx, operations.GetTheMinimumPaymentAmountRequest{
        CurrencyFrom: sdk.String("eth"),
        CurrencyTo: sdk.String("trx"),
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTheMinimumPaymentAmount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetUpdatePaymentEstimate

This endpoint is required to get the current estimate on the payment, and update the current estimate.  
Please note! Calling this estimate before `expiration_estimate_date` will return the current estimate, it won’t be updated.

`:id` \- payment ID, for which you want to get the estimate

Response:  
`id` \- payment ID  
`token_id` - id of api key used to create this payment (please discard this parameter)  
`pay_amount` - payment estimate, the exact amount the user will have to send to complete the payment  
`expiration_estimate_date` - expiration date of this estimate

### Example Usage

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
    res, err := s.PaymentsAPI.GetUpdatePaymentEstimate(ctx, operations.GetUpdatePaymentEstimateRequest{
        ID: "b7392059-2939-46fe-a759-6eb10faaa235",
        XAPIKey: sdk.String("{{your_api_key}}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUpdatePaymentEstimate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
