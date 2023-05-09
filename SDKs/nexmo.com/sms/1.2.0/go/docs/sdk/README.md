# SDK

## Overview

With the SMS API you can send SMS from your account and lookup messages both messages that you've sent as well as messages sent to your virtual numbers. Numbers are specified in E.164 format. More SMS API documentation is at <https://developer.nexmo.com/messaging/sms/overview>

### Available Operations

* [SendAnSms](#sendansms) - Send an SMS

## SendAnSms

Send an outbound SMS from your Vonage account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/callbacks"
	"net/http"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.SendAnSms(ctx, operations.SendAnSmsRequest{
        NewMessage: shared.NewMessage{
            AccountRef: sdk.String("customer1234"),
            APIKey: "abcd1234",
            APISecret: sdk.String("abcdef0123456789"),
            Body: sdk.String("0011223344556677"),
            Callback: sdk.String("https://example.com/sms-dlr"),
            ClientRef: sdk.String("my-personal-reference"),
            ContentID: sdk.String("1107457532145798767"),
            EntityID: sdk.String("1101456324675322134"),
            From: "AcmeInc",
            MessageClass: shared.NewMessageMessageClassEnumTwo.ToPointer(),
            ProtocolID: sdk.Int64(127),
            Sig: sdk.String("quibusdam"),
            StatusReportReq: sdk.Bool(false),
            Text: sdk.String("Hello World!"),
            To: "447700900000",
            TTL: sdk.Int64(900000),
            Type: shared.NewMessageTypeEnumText.ToPointer(),
            Udh: sdk.String("06050415811581"),
        },
        Format: operations.SendAnSmsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendAnSms200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
