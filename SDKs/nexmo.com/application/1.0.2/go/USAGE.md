<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, operations.CreateApplicationRequestBody{
        AnswerMethod: sdk.String("GET"),
        AnswerURL: sdk.String("https://example.com/webhooks/answer"),
        APIKey: "ap1k3y",
        APISecret: "230e6cf0709417176df1b4fc1e083adc",
        EventMethod: sdk.String("POST"),
        EventURL: sdk.String("https://example.com/webhooks/event"),
        InboundMethod: sdk.String("POST"),
        InboundURL: sdk.String("https://example.com/webhooks/inbound"),
        Name: "My Application",
        StatusMethod: sdk.String("POST"),
        StatusURL: sdk.String("https://example.com/webhooks/status"),
        Type: operations.CreateApplicationRequestBodyTypeEnumVoice,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationCreated != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->