# SDK

## Overview

The [Redact API](/redact/overview) helps organisations meet their privacy compliance obligations. It provides controlled, on-demand redaction of private information from transactional records in the long-term storage. Note, Redact API does not have the capability to redact the short-lived server logs that are retained for a few weeks. For SMS customers that need immediate redaction, Vonage suggests using [Advanced Auto-redact](/redact/overview#auto-redact-vs-redact-api).

### Available Operations

* [RedactMessage](#redactmessage) - Redact a specific message

## RedactMessage

Redact a specific message

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.RedactMessage(ctx, shared.RedactTransaction{
        ID: "209ab3c7536542b91e8b5aef032f6861",
        Product: shared.RedactTransactionProductEnumSms,
        Type: shared.RedactTransactionTypeEnumOutbound,
    }, operations.RedactMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
