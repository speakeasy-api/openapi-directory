# PaymentMethods

### Available Operations

* [GetPaymentMethodsJSON](#getpaymentmethodsjson) - Retrieve all Store's Payment Methods.
* [GetPaymentMethodsIDJSON](#getpaymentmethodsidjson) - Retrieve a single Payment Method.

## GetPaymentMethodsJSON

Retrieve all Store's Payment Methods.

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
    res, err := s.PaymentMethods.GetPaymentMethodsJSON(ctx, operations.GetPaymentMethodsJSONRequest{
        Authtoken: "reprehenderit",
        Login: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethods != nil {
        // handle response
    }
}
```

## GetPaymentMethodsIDJSON

Retrieve a single Payment Method.

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
    res, err := s.PaymentMethods.GetPaymentMethodsIDJSON(ctx, operations.GetPaymentMethodsIDJSONRequest{
        Authtoken: "fugiat",
        ID: 283519,
        Login: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```
