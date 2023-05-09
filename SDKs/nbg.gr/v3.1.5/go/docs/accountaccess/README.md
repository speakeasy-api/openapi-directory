# AccountAccess

### Available Operations

* [DeleteAccountAccessConsentsConsentID](#deleteaccountaccessconsentsconsentid) - Delete Account Access Consents
* [GetAccountAccessConsentsConsentID](#getaccountaccessconsentsconsentid) - Get Account Access Consents
* [PostAccountAccessConsents](#postaccountaccessconsents) - Create Account Access Consents

## DeleteAccountAccessConsentsConsentID

Delete Account Access Consents by Consent ID

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
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, operations.DeleteAccountAccessConsentsConsentIDRequest{
        ConsentID: "corrupti",
        SandboxID: "illum",
        XCustomerUserAgent: sdk.String("vel"),
        XFapiAuthDate: sdk.String("error"),
        XFapiCustomerIPAddress: sdk.String("deserunt"),
        XFapiInteractionID: sdk.String("suscipit"),
    }, operations.DeleteAccountAccessConsentsConsentIDSecurity{
        ClientCredentialsToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountAccessConsentsConsentID

Get Account Access Consents by Consent ID

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
    res, err := s.AccountAccess.GetAccountAccessConsentsConsentID(ctx, operations.GetAccountAccessConsentsConsentIDRequest{
        ConsentID: "iure",
        SandboxID: "magnam",
        XCustomerUserAgent: sdk.String("debitis"),
        XFapiAuthDate: sdk.String("ipsa"),
        XFapiCustomerIPAddress: sdk.String("delectus"),
        XFapiInteractionID: sdk.String("tempora"),
    }, operations.GetAccountAccessConsentsConsentIDSecurity{
        ClientCredentialsToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadConsentResponse1 != nil {
        // handle response
    }
}
```

## PostAccountAccessConsents

Create Account Access Consents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountAccess.PostAccountAccessConsents(ctx, operations.PostAccountAccessConsentsRequest{
        OBReadConsent1: &shared.OBReadConsent1{
            Data: shared.OBReadData1{
                ExpirationDateTime: types.MustTimeFromString("2022-07-10T15:39:12.517Z"),
                Permissions: []shared.OBExternalPermissions1CodeEnum{
                    shared.OBExternalPermissions1CodeEnumReadTransactionsBasic,
                    shared.OBExternalPermissions1CodeEnumReadScheduledPaymentsBasic,
                    shared.OBExternalPermissions1CodeEnumReadProducts,
                    shared.OBExternalPermissions1CodeEnumReadScheduledPaymentsBasic,
                },
                TransactionFromDateTime: types.MustTimeFromString("2022-01-28T03:46:24.500Z"),
                TransactionToDateTime: types.MustTimeFromString("2022-10-15T05:10:19.629Z"),
            },
            Risk: map[string]interface{}{
                "veritatis": "deserunt",
                "perferendis": "ipsam",
            },
        },
        SandboxID: "repellendus",
        XCustomerUserAgent: sdk.String("sapiente"),
        XFapiAuthDate: sdk.String("quo"),
        XFapiCustomerIPAddress: sdk.String("odit"),
        XFapiInteractionID: sdk.String("at"),
    }, operations.PostAccountAccessConsentsSecurity{
        ClientCredentialsToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadConsentResponse1 != nil {
        // handle response
    }
}
```
