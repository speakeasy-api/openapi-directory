# EmailValidation

### Available Operations

* [EmailValidation](#emailvalidation) - Email Validation

## EmailValidation

Email Validation

### Example Usage

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
    res, err := s.EmailValidation.EmailValidation(ctx, operations.EmailValidationRequest{
        UserEmailHere: "example@example.com",
        YourAPIKeyHere: "asd24#sdfs322#",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmailValidation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
