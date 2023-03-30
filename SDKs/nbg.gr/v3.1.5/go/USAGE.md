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
        Security: operations.DeleteAccountAccessConsentsConsentIDSecurity{
            ClientCredentialsToken: shared.SchemeClientCredentialsToken{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            ClientID: shared.SchemeClientID{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.DeleteAccountAccessConsentsConsentIDPathParams{
            ConsentID: "corrupti",
        },
        Headers: operations.DeleteAccountAccessConsentsConsentIDHeaders{
            SandboxID: "provident",
            XCustomerUserAgent: "distinctio",
            XFapiAuthDate: "quibusdam",
            XFapiCustomerIPAddress: "unde",
            XFapiInteractionID: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->