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
            AnswerMethod: "ut",
            AnswerURL: "odit",
            APIKey: "vel",
            APISecret: "saepe",
            EventMethod: "veritatis",
            EventURL: "laudantium",
            InboundMethod: "doloribus",
            InboundURL: "adipisci",
            Name: "est",
            StatusMethod: "voluptatem",
            StatusURL: "pariatur",
            Type: "voice",
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