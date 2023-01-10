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
            AnswerMethod: "culpa",
            AnswerURL: "incidunt",
            APIKey: "asperiores",
            APISecret: "doloribus",
            EventMethod: "excepturi",
            EventURL: "enim",
            InboundMethod: "consectetur",
            InboundURL: "suscipit",
            Name: "ut",
            StatusMethod: "et",
            StatusURL: "at",
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