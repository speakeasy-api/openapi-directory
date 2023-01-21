<!-- Start SDK Example Usage -->
```go
package main

import (
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
            ConsentID: "sit",
        },
        Headers: operations.DeleteAccountAccessConsentsConsentIDHeaders{
            SandboxID: "voluptas",
            XCustomerUserAgent: "culpa",
            XFapiAuthDate: "expedita",
            XFapiCustomerIPAddress: "consequuntur",
            XFapiInteractionID: "dolor",
        },
    }
    
    res, err := s.AccountAccess.DeleteAccountAccessConsentsConsentID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->