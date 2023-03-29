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

    req := operations.CreateApplicationRequest{
        Request: &operations.CreateApplicationRequestBody{
            AnswerMethod: "GET",
            AnswerURL: "https://example.com/webhooks/answer",
            APIKey: "ap1k3y",
            APISecret: "230e6cf0709417176df1b4fc1e083adc",
            EventMethod: "POST",
            EventURL: "https://example.com/webhooks/event",
            InboundMethod: "POST",
            InboundURL: "https://example.com/webhooks/inbound",
            Name: "My Application",
            StatusMethod: "POST",
            StatusURL: "https://example.com/webhooks/status",
            Type: "voice",
        },
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationCreated != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->