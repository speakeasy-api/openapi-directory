# Requests

## Overview

Verify Requests

### Available Operations

* [VerifyRequest](#verifyrequest) - Request a Verification

## VerifyRequest

Use Verify request to generate and send a PIN to your user:

1. Create a request to send a verification code to your user.

2. Check the `status` field in the response to ensure that your request was successful (zero is success).

3. Use the `request_id` field in the response for the Verify check.

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
    res, err := s.Requests.VerifyRequest(ctx, operations.VerifyRequestRequest{
        Format: shared.FormatEnumXML,
        VerifyRequest: shared.VerifyRequest{
            APIKey: "abcd1234",
            APISecret: "Sup3rS3cr3t!!",
            Brand: "Acme Inc",
            CodeLength: shared.VerifyRequestCodeLengthEnumSix.ToPointer(),
            Country: sdk.String("GB"),
            Lg: shared.VerifyRequestLgEnumEnUs.ToPointer(),
            NextEventWait: sdk.Int64(120),
            Number: "447700900000",
            PinCode: sdk.String("AKFG-3424"),
            PinExpiry: sdk.Int64(240),
            SenderID: sdk.String("ACME"),
            WorkflowID: shared.VerifyRequestWorkflowIDEnumThree.ToPointer(),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyRequest200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
