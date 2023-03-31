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

    req := operations.ConvertRequestBody{
        HundredsForm: "مائة",
        TheNumber: "2519.50",
        Unit: " ريال سعودي",
    }

    ctx := context.Background()
    res, err := s.Convert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->