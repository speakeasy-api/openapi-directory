<!-- Start SDK Example Usage -->
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
    res, err := s.Call.PostV01BulkCall(ctx, shared.BulkCallParameters{
        AnswerURL: "https://example.com/answer/",
        CallerName: sdk.String("Bulk Test"),
        ConfirmKey: sdk.String("1"),
        ConfirmSound: sdk.String("https://example.com/confirm_sound/"),
        CoreUUID: sdk.String("2e8e6275-7cfe-4e3c-a8d6-25316b4519c7"),
        Delimiter: "<",
        ExtraDialString: sdk.String("bridge_early_media=true,hangup_after_bridge=true"),
        From: "15551234567",
        GatewayCodecs: sdk.String("'PCMA,PCMU','G729,PCMU','PCMA,G729'"),
        GatewayRetries: sdk.String("3,1,2"),
        GatewayTimeouts: sdk.String("10,30,20"),
        Gateways: "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
        HangupOnRing: sdk.Int64(90),
        HangupURL: sdk.String("https://example.com/hangup/"),
        RejectCauses: sdk.String("USER_BUSY,NO_ANSWER"),
        RingURL: sdk.String("https://example.com/ring/"),
        SendDigits: sdk.String("1w2w3W#*@1500"),
        SendOnPreanswer: sdk.Bool(false),
        TimeLimit: sdk.Int64(90),
        To: "15557654321",
    }, operations.PostV01BulkCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkCallResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->