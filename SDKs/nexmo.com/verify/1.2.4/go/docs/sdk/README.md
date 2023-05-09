# SDK

## Overview

The Verify API helps you to implement 2FA (two-factor authentication) in your applications. This is useful for:

* Protecting against spam, by preventing spammers from creating multiple accounts
* Monitoring suspicious activity, by forcing an account user to verify ownership of a number
* Ensuring that you can reach your users at any time because you have their correct phone number
More information is available at <https://developer.nexmo.com/verify>

More information on the Verify product on our Developer Portal
<https://developer.nexmo.com/verify>
### Available Operations

* [VerifyCheck](#verifycheck) - Verify Check
* [VerifyControl](#verifycontrol) - Verify Control
* [VerifyRequestWithPsd2](#verifyrequestwithpsd2) - PSD2 (Payment Services Directive 2) Request
* [VerifySearch](#verifysearch) - Verify Search

## VerifyCheck

Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.

1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.

*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.VerifyCheck(ctx, operations.VerifyCheckRequest{
        CheckRequest: shared.CheckRequest{
            APIKey: "abcd1234",
            APISecret: "Sup3rS3cr3t!!",
            Code: "1234",
            IPAddress: sdk.String("123.0.0.255"),
            RequestID: "abcdef0123456789abcdef0123456789",
        },
        Format: shared.FormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyCheck200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## VerifyControl

Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:


1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.

2. Check the `status` in the response.


*Note that this endpoint is available by `GET` request as well as `POST`.*

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.VerifyControl(ctx, operations.VerifyControlRequest{
        ControlRequest: shared.ControlRequest{
            APIKey: "abcd1234",
            APISecret: "Sup3rS3cr3t!!",
            Cmd: shared.ControlRequestCmdEnumCancel,
            RequestID: "abcdef0123456789abcdef0123456789",
        },
        Format: shared.FormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyControl200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## VerifyRequestWithPsd2

Use Verify request to generate and send a PIN to your user to authorize a payment:
1. Create a request to send a verification code to your user.
2. Check the `status` field in the response to ensure that your request was successful (zero is success).
3. Use the `request_id` field in the response for the Verify check.
(Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.VerifyRequestWithPsd2(ctx, operations.VerifyRequestWithPsd2Request{
        Format: shared.FormatEnumXML,
        Psd2Request: shared.Psd2Request{
            Amount: 48.00,
            APIKey: "abcd1234",
            APISecret: "Sup3rS3cr3t!!",
            CodeLength: shared.Psd2RequestCodeLengthEnumSix.ToPointer(),
            Country: sdk.String("GB"),
            Lg: shared.Psd2RequestLgEnumEsEs.ToPointer(),
            NextEventWait: sdk.Int64(120),
            Number: "447700900000",
            Payee: "Acme Inc",
            PinExpiry: sdk.Int64(240),
            WorkflowID: shared.Psd2RequestWorkflowIDEnumSeven.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyRequestWithPsd2200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## VerifySearch

Use Verify search to check the status of past or current verification requests:

1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.

*Note that this endpoint is available by `POST` request as well as `GET`.*

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.VerifySearch(ctx, operations.VerifySearchRequest{
        APIKey: "abcd1234",
        APISecret: "Sup3rS3cr3t!!",
        Format: shared.FormatEnumXML,
        RequestID: "illum",
        RequestIds: []string{
            "abcdef0123456789abcdef0123456789",
            "abcdef0123456789abcdef0123456789",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifySearch200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
