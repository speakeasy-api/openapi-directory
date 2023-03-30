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

    req := operations.CheckSpellingRussianRequest{
        Headers: operations.CheckSpellingRussianHeaders{
            XRapidAPIKey: "unde",
        },
        Request: &operations.CheckSpellingRussianRequestBody{
            LangCode: "ru",
            Text: "Добрый вее!",
        },
    }

    ctx := context.Background()
    res, err := s.CheckSpellingRussian(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->