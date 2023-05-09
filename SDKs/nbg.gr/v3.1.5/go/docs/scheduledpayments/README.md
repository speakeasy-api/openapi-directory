# ScheduledPayments

### Available Operations

* [GetAccountsAccountIDScheduledPayments](#getaccountsaccountidscheduledpayments) - Get Scheduled Payments

## GetAccountsAccountIDScheduledPayments

Get Scheduled Payments by Account ID

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
    res, err := s.ScheduledPayments.GetAccountsAccountIDScheduledPayments(ctx, operations.GetAccountsAccountIDScheduledPaymentsRequest{
        AccountID: "accusantium",
        SandboxID: "perferendis",
        XCustomerUserAgent: sdk.String("veritatis"),
        XFapiAuthDate: sdk.String("provident"),
        XFapiCustomerIPAddress: sdk.String("cumque"),
        XFapiInteractionID: sdk.String("iure"),
    }, operations.GetAccountsAccountIDScheduledPaymentsSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadScheduledPayment3 != nil {
        // handle response
    }
}
```
