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

    req := operations.DeleteAccountAccessConsentsConsentIDRequest{
        ConsentID: "corrupti",
        SandboxID: "provident",
        XCustomerUserAgent: "distinctio",
        XFapiAuthDate: "quibusdam",
        XFapiCustomerIPAddress: "unde",
        XFapiInteractionID: "nulla",
    }

    ctx := context.Background()
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, req, operations.DeleteAccountAccessConsentsConsentIDSecurity{
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