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

    req := operations.EmailValidationRequest{
        UserEmailHere: "example@example.com",
        YourAPIKeyHere: "asd24#sdfs322#",
    }

    ctx := context.Background()
    res, err := s.EmailValidation.EmailValidation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailValidation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->