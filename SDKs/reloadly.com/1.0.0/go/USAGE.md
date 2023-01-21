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
    
    req := operations.CreateANewQuestionRequest{
        Request: &operations.CreateANewQuestionRequestBody{
            Choices: []string{
                "voluptas",
            },
            Question: "culpa",
        },
    }
    
    res, err := s.CreateANewQuestion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->