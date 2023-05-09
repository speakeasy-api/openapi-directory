# Beneficiaries

### Available Operations

* [GetAccountsAccountIDBeneficiaries](#getaccountsaccountidbeneficiaries) - Get Beneficiaries

## GetAccountsAccountIDBeneficiaries

Get Beneficiaries by Account ID

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
    res, err := s.Beneficiaries.GetAccountsAccountIDBeneficiaries(ctx, operations.GetAccountsAccountIDBeneficiariesRequest{
        AccountID: "totam",
        SandboxID: "beatae",
        XCustomerUserAgent: sdk.String("commodi"),
        XFapiAuthDate: sdk.String("molestiae"),
        XFapiCustomerIPAddress: sdk.String("modi"),
        XFapiInteractionID: sdk.String("qui"),
    }, operations.GetAccountsAccountIDBeneficiariesSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadBeneficiary5 != nil {
        // handle response
    }
}
```
