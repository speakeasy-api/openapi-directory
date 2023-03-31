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

    req := shared.BulkCallParameters{
        AnswerURL: "https://example.com/answer/",
        CallerName: "Bulk Test",
        ConfirmKey: "1",
        ConfirmSound: "https://example.com/confirm_sound/",
        CoreUUID: "2e8e6275-7cfe-4e3c-a8d6-25316b4519c7",
        Delimiter: "<",
        ExtraDialString: "bridge_early_media=true,hangup_after_bridge=true",
        From: "15551234567",
        GatewayCodecs: "'PCMA,PCMU','G729,PCMU','PCMA,G729'",
        GatewayRetries: "3,1,2",
        GatewayTimeouts: "10,30,20",
        Gateways: "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/",
        HangupOnRing: 90,
        HangupURL: "https://example.com/hangup/",
        RejectCauses: "USER_BUSY,NO_ANSWER",
        RingURL: "https://example.com/ring/",
        SendDigits: "1w2w3W#*@1500",
        SendOnPreanswer: false,
        TimeLimit: 90,
        To: "15557654321",
    }

    ctx := context.Background()
    res, err := s.Call.PostV01BulkCall(ctx, req, operations.PostV01BulkCallSecurity{
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