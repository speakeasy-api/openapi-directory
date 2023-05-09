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
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, operations.DeleteAccountAccessConsentsConsentIDRequest{
        ConsentID: "corrupti",
        SandboxID: "provident",
        XCustomerUserAgent: sdk.String("distinctio"),
        XFapiAuthDate: sdk.String("quibusdam"),
        XFapiCustomerIPAddress: sdk.String("unde"),
        XFapiInteractionID: sdk.String("nulla"),
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
<!-- End SDK Example Usage -->