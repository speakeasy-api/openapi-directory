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

    req := operations.SendAnSmsRequest{
        PathParams: operations.SendAnSmsPathParams{
            Format: "json",
        },
        Request: shared.NewMessage{
            AccountRef: "customer1234",
            APIKey: "abcd1234",
            APISecret: "abcdef0123456789",
            Body: "0011223344556677",
            Callback: "https://example.com/sms-dlr",
            ClientRef: "my-personal-reference",
            ContentID: "1107457532145798767",
            EntityID: "1101456324675322134",
            From: "AcmeInc",
            MessageClass: "2",
            ProtocolID: 127,
            Sig: "deserunt",
            StatusReportReq: false,
            Text: "Hello World!",
            To: "447700900000",
            TTL: 900000,
            Type: "text",
            Udh: "06050415811581",
        },
    }

    ctx := context.Background()
    res, err := s.SendAnSms(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SendAnSms200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->