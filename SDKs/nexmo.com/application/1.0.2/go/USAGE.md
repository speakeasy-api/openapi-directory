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
    
    req := operations.CreateApplicationRequest{
        Request: &operations.CreateApplicationRequestBody{
            AnswerMethod: "sit",
            AnswerURL: "voluptas",
            APIKey: "culpa",
            APISecret: "expedita",
            EventMethod: "consequuntur",
            EventURL: "dolor",
            InboundMethod: "expedita",
            InboundURL: "voluptas",
            Name: "fugit",
            StatusMethod: "et",
            StatusURL: "nihil",
            Type: "messages",
        },
    }
    
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationCreated != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->