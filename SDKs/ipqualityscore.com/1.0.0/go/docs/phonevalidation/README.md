# PhoneValidation

### Available Operations

* [PhoneValidation](#phonevalidation) - Phone Validation

## PhoneValidation

Phone Validation

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
    res, err := s.PhoneValidation.PhoneValidation(ctx, operations.PhoneValidationRequest{
        UserPhoneHere: "18007132618",
        YourAPIKeyHere: "asd24#sdfs322#",
        Country: sdk.String("UK"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PhoneValidation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
